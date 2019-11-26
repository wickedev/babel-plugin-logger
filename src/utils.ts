import { NodePath } from '@babel/traverse'
import {
    ArrowFunctionExpression,
    ClassMethod,
    FunctionDeclaration,
    isClassDeclaration,
} from '@babel/types'
import * as path from 'path'
import { Optional } from '~/types'
import { FileInfo } from '~/options'

export function getArrowFunctionName(
    path: NodePath<ArrowFunctionExpression>,
): string {
    const ancestorNode = path?.parentPath?.parentPath?.parentPath?.node
    const parentNode = path?.parentPath?.node as any
    const fn = parentNode?.id?.name ?? parentNode?.key?.name ?? 'anonymous'

    if (isClassDeclaration(ancestorNode)) {
        return `[${(ancestorNode as any)?.id?.name}] ${fn}`
    }

    return fn
}

export function getClassMethodName(path: NodePath<ClassMethod>): string {
    const ancestorNode = path?.parentPath?.parentPath?.node
    const method = (path?.node?.key as any)?.name ?? 'unknown'
    return `[${(ancestorNode as any)?.id?.name}] ${method}`
}

export function getFunctionDeclarationName(
    path: NodePath<FunctionDeclaration>,
): string {
    return path?.node?.id?.name ?? 'unknown'
}

type Param = {
    name: string
    type: string
    properties?: [
        {
            value?: { name?: string }
        },
    ]
}

export function getParamNames(path: NodePath<any>): string[] {
    return (path.node.params as Param[]).flatMap((param: Param) => {
        if (param.type === 'ObjectPattern') {
            return (
                param?.properties!.map(
                    property => property.value?.name ?? 'unknown',
                ) ?? []
            )
        }

        return [param.name]
    })
}

export function getFileData(
    nodePath: NodePath<any>,
    state: any,
): Optional<FileInfo> {
    const sourceRoot = state?.file?.opts?.root
    const sourceName = state?.file?.opts?.filename

    if (!sourceName || !sourceRoot) {
        return
    }

    const parsedPath = path.parse(sourceName)
    const sourceDir = parsedPath.dir
    const sourcePath = sourceDir.substring(sourceRoot.length, sourceDir.length)

    return {
        name: parsedPath.base,
        path: sourcePath,
        line: nodePath?.node?.loc?.start?.line ?? -1,
    }
}

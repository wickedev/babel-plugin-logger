import { NodePath } from '@babel/traverse'
import {
    ArrowFunctionExpression,
    ClassMethod,
    FunctionDeclaration,
} from '@babel/types'
import * as path from 'path'
import { Optional } from '~/types'
import { FileInfo } from '~/options'

export function getMetaData(path: NodePath<any>): string {
    if (path.isClassMethod()) {
        const parent: any = path.findParent(pp => pp.isClassDeclaration())
        return parent?.node?.id?.name
    } else if (path.isFunctionDeclaration()) {
        return 'fn'
    } else if (path.isArrowFunctionExpression()) {
        const parent: any = path.findParent(pp => pp.isClassDeclaration())
        return parent?.node?.id?.name ?? 'fn'
    }
    return 'unknown'
}

export function getFunctionDeclarationName(
    path: NodePath<FunctionDeclaration>,
): string {
    return path?.node?.id?.name ?? 'unknown'
}

export function getArrowFunctionName(
    path: NodePath<ArrowFunctionExpression>,
): string {
    const parent: any = path.findParent(
        pp => pp.isClassProperty() || pp.isVariableDeclarator(),
    )

    if (parent.isClassProperty()) {
        return parent?.node?.key?.name
    } else if (parent.isVariableDeclarator()) {
        return parent?.node?.id?.name
    }

    return 'anonymous'
}

export function getClassMethodName(path: NodePath<ClassMethod>): string {
    return (path?.node?.key as any)?.name ?? 'unknown'
}

export function getName(path: NodePath<any>): string {
    if (path.isFunctionDeclaration()) {
        return getFunctionDeclarationName(path as any)
    } else if (path.isArrowFunctionExpression()) {
        return getArrowFunctionName(path as any)
    } else if (path.isClassMethod()) {
        return getClassMethodName(path as any)
    }

    return 'unknown'
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
    return (
        (path.node.params as Param[])?.flatMap((param: Param) => {
            if (param.type === 'ObjectPattern') {
                return (
                    param?.properties!.map(
                        property => property.value?.name ?? 'unknown',
                    ) ?? []
                )
            }

            return [param.name]
        }) || []
    )
}

export function getParamNameOnCatch(path: NodePath<any>): string[] {
    const eName = path.node?.param?.name
    return eName ? [eName] : []
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

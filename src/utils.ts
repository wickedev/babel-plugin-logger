import { NodePath } from '@babel/traverse'
import {
    ArrowFunctionExpression,
    ClassMethod,
    FunctionDeclaration,
} from '@babel/types'
import * as path from 'path'
import { Optional } from '~/types'
import { FileInfo } from '~/options'

export function getArrowFunctionName(
    path: NodePath<ArrowFunctionExpression>,
): string {
    const parentNode = path?.parentPath?.node as any
    return parentNode?.id?.name ?? parentNode?.key?.name ?? 'anonymous'
}

export function getClassMethodName(path: NodePath<ClassMethod>): string {
    return (path?.node?.key as any)?.name ?? 'unknown'
}

export function getFunctionDeclarationName(
    path: NodePath<FunctionDeclaration>,
): string {
    return path?.node?.id?.name ?? 'unknown'
}

export function getParamNames(path: NodePath<any>): string[] {
    return (path.node.params as { name: string }[]).map(param => param.name)
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

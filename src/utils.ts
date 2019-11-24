import { NodePath } from '@babel/traverse'
import {
    ArrowFunctionExpression,
    ClassMethod,
    FunctionDeclaration,
} from '@babel/types'
import * as path from 'path'
import { Optional } from '~/model'
import { FileData } from '~/options'

export function getArrowFunctionName(
    path: NodePath<ArrowFunctionExpression>,
): string {
    return (path?.parentPath?.node as any)?.key?.name ?? 'unknown'
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
): Optional<FileData> {
    const sourceFile = state?.file?.opts?.sourceFileName

    if (!sourceFile) {
        return
    }

    const sourceFileData = path.parse(sourceFile)

    return {
        name: sourceFileData.base,
        path: sourceFileData.dir,
        line: nodePath?.node?.loc?.start?.line ?? -1,
    }
}

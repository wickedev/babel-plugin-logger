// @ts-ignore
import template from '@babel/template'
import { NodePath } from '@babel/traverse'
import {
    ArrowFunctionExpression,
    ClassMethod,
    FunctionDeclaration,
} from '@babel/types'
import { debug } from '~/debug'
import { FileData, FunctionData, Optional } from '~/model'

export function getArrowFunctionName(
    path: NodePath<ArrowFunctionExpression>,
): string {
    // @ts-ignore
    return path.parentPath.node.key.name
}

export function getClassMethodName(path: NodePath<ClassMethod>): string {
    // @ts-ignore
    return path.node.key.name
}

export function getFunctionDeclarationName(
    path: NodePath<FunctionDeclaration>,
): string {
    // @ts-ignore
    return path.node.id.name
}

export function getParamNames(path: NodePath<any>): string[] {
    // @ts-ignore
    return path.node.params.map(param => param.name)
}

function insertComma(args: string[], idx: number): string {
    return 1 < args.length && idx < args.length - 1 ? ',' : ''
}

export function argsFormatter(args: string[]) {
    const formatStr = args.map(
        (arg, idx) => `'${arg} = [', ${arg} ,']${insertComma(args, idx)}'`,
    )
    return formatStr.length
        ? `, 'with:',` + formatStr.slice(0, formatStr.length)
        : ''
}

function getFileFormat(fileData?: FileData): string {
    if (!fileData) {
        return ''
    }

    const { filePath, loc } = fileData

    return `[${filePath}:${loc}] `
}

function loggerFactory({ name, args, fileData }: FunctionData) {
    const fileFormat = getFileFormat(fileData)

    const argsFormat = argsFormatter(args)

    return template(
        `console.log('${fileFormat}${name}() called'` + argsFormat + `)`,
    )
}

export function insertLogAtFirst(path: NodePath, data: FunctionData) {
    const logger = loggerFactory(data)()
    // @ts-ignore
    path.unshiftContainer('body', logger)
}

export function getFileData(path: NodePath, state: any): Optional<FileData> {
    if (!state) {
        return undefined
    }

    return {
        filePath: state.file.opts.sourceFileName,
        // @ts-ignore
        loc: path.node.loc.start.line,
    }
}

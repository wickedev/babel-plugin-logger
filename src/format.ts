import { FileData, FunctionData } from '~/options'

function insertComma(args: string[], idx: number): string {
    return 1 < args.length && idx < args.length - 1 ? ',' : ''
}

export function defaultFileFormat(file: FileData) {
    return file.name && file.line != null
        ? `'[${file.path ? `${file.path}/` : ''}${file.name}:${file.line}]', `
        : ''
}

export function defaultArgsFormat(args: string[]) {
    const formatStr = args.map(
        (arg, idx) => `'${arg} = [', ${arg} ,']${insertComma(args, idx)}'`,
    )
    return formatStr.length
        ? `, 'with:',` + formatStr.slice(0, formatStr.length)
        : ''
}

export function defaultCallFormat(func: FunctionData) {
    return `'${func.name}() called'`
}

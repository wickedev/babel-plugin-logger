import { FileInfo, FunctionInfo } from '~/options'

function insertComma(args: string[], idx: number): string {
    return 1 < args.length && idx < args.length - 1 ? ',' : ''
}

export function defaultFileFormat(file: FileInfo) {
    return file.name && file.line != null
        ? `'[${file.path ? `${file.path}/` : ''}${file.name}:${file.line}]', `
        : ''
}

export function defaultCallFormat(func: FunctionInfo) {
    return `'[${func.meta}] ${func.name}() called${
        func.args.length ? ' with' : ''
    }'`
}

export function defaultArgsFormat(args: string[]) {
    const formatStr = args.map(
        (arg, idx) => `'${arg} = [ ' + ${arg} + ' ]${insertComma(args, idx)}'`,
    )
    return formatStr.length ? `,` + formatStr.slice(0, formatStr.length) : ''
}

export function groupArgsFormat(args: string[]) {
    return args.map(arg => `console.log('${arg} = [ ', ${arg}, ' ]');`).join('')
}

export function defaultInfoTemplate(file: FileInfo, func: FunctionInfo) {
    return `console.log(${defaultFileFormat(file) +
        defaultCallFormat(func) +
        defaultArgsFormat(func.args)});`
}

export function defaultErrorTemplate(file: FileInfo, func: FunctionInfo) {
    return `console.error(${defaultFileFormat(file) +
        defaultCallFormat(func) +
        defaultArgsFormat(func.args)});`
}

export function groupInfoTemplate(file: FileInfo, func: FunctionInfo) {
    if (func.args.length <= 0) {
        return defaultInfoTemplate(file, func)
    }

    const fileAndCallFormat = defaultFileFormat(file) + defaultCallFormat(func)
    return `console.groupCollapsed(${fileAndCallFormat});
            ${groupArgsFormat(func.args)}
            console.groupEnd();`
}

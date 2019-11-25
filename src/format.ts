import stringify from '@bugsnag/safe-json-stringify'
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
    return `'${func.name}() called'`
}

function objectFilter(arg: any): string {
    if (typeof arg === 'object') {
        const json = stringify(arg)
        if (json.length < 20) {
            return json
        } else {
            return arg.toString()
        }
    }

    return arg
}

export function defaultArgsFormat(args: string[]) {
    const formatStr = args.map(
        (arg, idx) => `'${arg} = [' + ${arg} + ']${insertComma(args, idx)}'`,
    )
    return formatStr.length
        ? `, 'with:',` + formatStr.slice(0, formatStr.length)
        : ''
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

import {
    defaultArgsFormat,
    defaultFileFormat,
    defaultCallFormat,
} from '~/format'

export interface FileData {
    readonly path: string
    readonly name: string
    readonly line: number
}

export interface FunctionData {
    readonly name: string
    readonly args: string[]
}

export interface Options {
    readonly printFile?:
        | {
              readonly path: boolean
              readonly line: boolean
          }
        | boolean
    readonly group?: boolean
    readonly loggerTemplate?: string
    readonly customTemplate?: (file: FileData, func: FunctionData) => string
}

export const defaultOptions: Options = {
    printFile: true,
    group: true,
    loggerTemplate: 'console.log',
    customTemplate: (file: FileData, func: FunctionData) =>
        defaultFileFormat(file) +
        defaultCallFormat(func) +
        defaultArgsFormat(func.args),
}

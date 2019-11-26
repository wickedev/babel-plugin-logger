import { defaultInfoTemplate, defaultErrorTemplate } from '~/format'

export interface FileInfo {
    readonly path: string
    readonly name: string
    readonly line: number
}

export interface FunctionInfo {
    readonly meta: string // class name or 'function'
    readonly name: string
    readonly args: string[]
}

export interface Options {
    readonly require?: string[]
    readonly infoTemplate?:
        | ((file: FileInfo, func: FunctionInfo) => string)
        | false
    readonly errorTemplate?:
        | ((file: FileInfo, func: FunctionInfo) => string)
        | false
}

export const defaultOptions: Options = {
    require: [], // example: ['import logger from "winston"']
    infoTemplate: (file: FileInfo, func: FunctionInfo) =>
        defaultInfoTemplate(file, func),
    errorTemplate: (file: FileInfo, func: FunctionInfo) =>
        defaultErrorTemplate(file, func),
}

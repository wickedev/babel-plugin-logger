import { argsFormatter } from '~/utils'

export interface File {
    readonly path: string
    readonly name: string
    readonly line: number
}

export interface Function {
    readonly name: string
    readonly args: string[]
}

export interface Options {
    readonly printFile:
        | {
              readonly path: boolean
              readonly line: boolean
          }
        | boolean
    readonly group: boolean
    readonly loggerTemplate: string
    readonly formatTemplate: (file: File, func: Function) => string
}

export const defaultOption = {
    printFile: true,
    group: true,
    loggerTemplate: 'console.log',
    formatTemplate: (file: File, func: Function) =>
        `'[${file.path}/${file.name}:${file.line}] ${func.name} called'` +
        argsFormatter(func.args) +
        `)`,
}

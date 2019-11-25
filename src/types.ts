import { FileInfo } from '~/options'

export type Optional<T> = undefined | T
export type FuncData = { name: string; args: string[]; file?: FileInfo }

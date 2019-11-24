import { FileData } from '~/options'

export type Optional<T> = undefined | T
export type FuncData = { name: string; args: string[]; fileData?: FileData }

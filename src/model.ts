export type Optional<T> = undefined | T
export type FileData = { filePath: string; loc: any }
export type FunctionData = { name: string; args: string[]; fileData?: FileData }

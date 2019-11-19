export declare type Optional<T> = undefined | T;
export declare type FileData = {
    filePath: string;
    loc: any;
};
export declare type FunctionData = {
    name: string;
    args: string[];
    fileData?: FileData;
};

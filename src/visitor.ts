import template from '@babel/template'
import { NodePath } from '@babel/traverse'
import {
    ArrowFunctionExpression,
    ClassMethod,
    FunctionDeclaration,
} from '@babel/types'
import { FuncData } from '~/model'

import { defaultOptions, Options } from '~/options'
import {
    getArrowFunctionName,
    getClassMethodName,
    getParamNames,
    getFunctionDeclarationName,
    getFileData,
} from '~/utils'

class LoggerVisitor {
    constructor(private readonly options: Options) {}

    public FunctionDeclaration(
        nodePath: NodePath<FunctionDeclaration>,
        state: any,
    ) {
        const funcData = {
            name: getFunctionDeclarationName(nodePath),
            args: getParamNames(nodePath),
            fileData: getFileData(nodePath, state),
        }
        const body: NodePath = nodePath.get('body')
        this.insertLogAtTop(body, funcData)
    }

    public ArrowFunctionExpression(
        nodePath: NodePath<ArrowFunctionExpression>,
        state: any,
    ) {
        const funcData = {
            name: getArrowFunctionName(nodePath),
            args: getParamNames(nodePath),
            fileData: getFileData(nodePath, state),
        }
        const body: NodePath = nodePath.get('body')
        this.insertLogAtTop(body, funcData)
    }

    public ClassMethod(nodePath: NodePath<ClassMethod>, state: any) {
        const funcData = {
            name: getClassMethodName(nodePath),
            args: getParamNames(nodePath),
            fileData: getFileData(nodePath, state),
        }
        const body: NodePath = nodePath.get('body')
        this.insertLogAtTop(body, funcData)
    }

    private insertLogAtTop(nodePath: NodePath<any>, funcData: FuncData) {
        const logger = this.logGeneration(funcData)
        ;(nodePath as any).unshiftContainer('body', logger)
    }

    // noinspection JSUnusedLocalSymbols
    private insertLogAtReturn(body: NodePath, funcData: FuncData) {
        // TODO
    }

    private logGeneration({ name, args, fileData }: FuncData) {
        const tmpl = this.options.customTemplate!(
            {
                name: fileData?.name ?? '',
                path: fileData?.path ?? '',
                line: fileData?.line ?? -1,
            },
            {
                name,
                args,
            },
        )

        return template(`${defaultOptions.loggerTemplate}(${tmpl});`)()
    }
}

export const visitorFactory = (options: Options) => {
    const opts = Object.assign(defaultOptions, options)
    const visitor = new LoggerVisitor(opts)

    return {
        FunctionDeclaration: (
            nodePath: NodePath<FunctionDeclaration>,
            state: any,
        ) => {
            visitor.FunctionDeclaration(nodePath, state)
        },
        ArrowFunctionExpression: (
            nodePath: NodePath<ArrowFunctionExpression>,
            state: any,
        ) => {
            visitor.ArrowFunctionExpression(nodePath, state)
        },
        ClassMethod: (nodePath: NodePath<ClassMethod>, state: any) => {
            visitor.ClassMethod(nodePath, state)
        },
    }
}

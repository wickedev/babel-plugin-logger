import template from '@babel/template'
import { NodePath } from '@babel/traverse'
import {
    ArrowFunctionExpression,
    ClassMethod,
    FunctionDeclaration,
} from '@babel/types'
import { groupInfoTemplate } from '~/format'
import { FuncData } from '~/types'

import { defaultOptions, Options } from '~/options'
import {
    getArrowFunctionName,
    getClassMethodName,
    getParamNames,
    getFunctionDeclarationName,
    getFileData,
    getMetaData,
    getParamNameOnCatch,
    getName,
} from '~/utils'

class LoggerVisitor {
    constructor(private readonly options: Options) {}

    public FunctionDeclaration(
        nodePath: NodePath<FunctionDeclaration>,
        state: any,
    ) {
        const funcData: FuncData = {
            name: getFunctionDeclarationName(nodePath),
            meta: getMetaData(nodePath),
            args: getParamNames(nodePath),
            file: getFileData(nodePath, state),
        }
        const body: NodePath = nodePath.get('body')
        this.insertLogAtTop(body, funcData)
    }

    public ArrowFunctionExpression(
        nodePath: NodePath<ArrowFunctionExpression>,
        state: any,
    ) {
        const name = getArrowFunctionName(nodePath)

        const funcData: FuncData = {
            name,
            meta: getMetaData(nodePath),
            args: getParamNames(nodePath),
            file: getFileData(nodePath, state),
        }
        const body: NodePath = nodePath.get('body')
        this.insertLogAtTop(body, funcData)
    }

    public ClassMethod(nodePath: NodePath<ClassMethod>, state: any) {
        const funcData: FuncData = {
            name: getClassMethodName(nodePath),
            meta: getMetaData(nodePath),
            args: getParamNames(nodePath),
            file: getFileData(nodePath, state),
        }
        const body: NodePath = nodePath.get('body')
        this.insertLogAtTop(body, funcData)
    }

    public CatchClause(nodePath: NodePath<ClassMethod>, state: any) {
        const parent = nodePath.findParent(
            pp =>
                pp.isFunctionDeclaration() ||
                pp.isClassMethod() ||
                pp.isArrowFunctionExpression(),
        )

        const funcData: FuncData = {
            name: getName(parent),
            meta: getMetaData(parent),
            args: getParamNameOnCatch(nodePath),
            file: getFileData(nodePath, state),
        }
        const body: NodePath = nodePath.get('body')
        this.insertErrorAtCatch(body, funcData)
    }

    private insertLogAtTop(nodePath: NodePath<any>, funcData: FuncData) {
        if (!nodePath['body']) {
            return
        }

        const logger = this.logGeneration(funcData)
        ;(nodePath as any).unshiftContainer('body', logger)
    }

    private logGeneration({ name, meta, args, file }: FuncData) {
        const format = (this.options.infoTemplate as any)(
            {
                name: file?.name ?? '',
                path: file?.path ?? '',
                line: file?.line ?? -1,
            },
            {
                meta,
                name,
                args,
            },
        )

        return template(format)({})
    }

    private errorGeneration({ name, meta, args, file }: FuncData) {
        const format = (this.options.errorTemplate as any)(
            {
                name: file?.name ?? '',
                path: file?.path ?? '',
                line: file?.line ?? -1,
            },
            {
                meta,
                name,
                args,
            },
        )

        return template(format)({})
    }

    private insertErrorAtCatch(nodePath: NodePath, funcData: FuncData) {
        if (!nodePath['body']) {
            return
        }

        const logger = this.errorGeneration(funcData)
        ;(nodePath as any).unshiftContainer('body', logger)
    }
}

export const visitorFactory = (options: Options = {}) => {
    const opts = Object.assign(defaultOptions, options)

    if (opts.infoTemplate === 'group') {
        // noinspection JSUnnecessarySemicolon
        ;(opts.infoTemplate as any) = groupInfoTemplate
    }

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
        CatchClause: (nodePath: NodePath<ClassMethod>, state: any) => {
            visitor.CatchClause(nodePath, state)
        },
    }
}

import { NodePath } from '@babel/traverse'
import {
    ArrowFunctionExpression,
    ClassMethod,
    FunctionDeclaration,
} from '@babel/types'
import { Options } from '~/options'
import {
    getArrowFunctionName,
    getClassMethodName,
    getParamNames,
    getFunctionDeclarationName,
    insertLogAtFirst,
    getFileData,
} from '~/utils'

export function visitorFactory(options: Options) {
    return {
        FunctionDeclaration(path: NodePath<FunctionDeclaration>) {
            const name = getFunctionDeclarationName(path)
            const args = getParamNames(path)
            insertLogAtFirst(path.get('body'), { name, args })
        },
        ArrowFunctionExpression(path: NodePath<ArrowFunctionExpression>) {
            const name = getArrowFunctionName(path)
            const args = getParamNames(path)
            insertLogAtFirst(path.get('body'), { name, args })
        },
        ClassMethod(path: NodePath<ClassMethod>, state: any) {
            // @ts-ignore
            const fileData = getFileData(path, state)
            const name = getClassMethodName(path)
            const args = getParamNames(path)
            insertLogAtFirst(path.get('body'), { name, args, fileData })
        },
    }
}

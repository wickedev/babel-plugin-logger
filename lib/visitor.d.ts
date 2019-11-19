import { NodePath } from '@babel/traverse';
import { ArrowFunctionExpression, ClassMethod, FunctionDeclaration } from '@babel/types';
import { Options } from '~/options';
export declare function visitorFactory(options: Options): {
    FunctionDeclaration(path: NodePath<FunctionDeclaration>): void;
    ArrowFunctionExpression(path: NodePath<ArrowFunctionExpression>): void;
    ClassMethod(path: NodePath<ClassMethod>, state: any): void;
};

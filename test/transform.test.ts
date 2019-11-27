import { parse } from '@babel/parser'
import traverse from '@babel/traverse'
import generator from '@babel/generator'
import fs from 'fs-extra'
import * as path from 'path'
import { groupArgsFormat, groupInfoTemplate } from '~/format'
import { visitorFactory } from '~/visitor'

function normalize(input: string): string {
    return generator(parse(input, { plugins: ['classProperties'] }) as any).code
}

test('default log insert', async () => {
    const input = await fs.readFile(
        path.join(__dirname, 'fixtures/default-log/input.js'),
    )
    const output = await fs.readFile(
        path.join(__dirname, 'fixtures/default-log/output.js'),
    )

    const ast = parse(input.toString(), { plugins: ['classProperties'] })

    traverse(ast as any, visitorFactory() as any)

    const gen = generator(ast as any, { flowCommaSeparator: false } as any)
    expect(gen.code).toEqual(normalize(output.toString()))
})

test('group log generation', async () => {
    const input = await fs.readFile(
        path.join(__dirname, 'fixtures/group-log/input.js'),
    )
    const output = await fs.readFile(
        path.join(__dirname, 'fixtures/group-log/output.js'),
    )

    const ast = parse(input.toString(), { plugins: ['classProperties'] })

    traverse(
        ast as any,
        visitorFactory({
            infoTemplate: groupInfoTemplate,
        }) as any,
    )

    const gen = generator(ast as any, { flowCommaSeparator: false } as any)
    expect(gen.code).toEqual(normalize(output.toString()))
})

test('groupArgsFormat test', () => {
    const result = groupArgsFormat(['a', 'b'])
    expect(result).toEqual(
        "console.log('a = [ ', a, ' ]');console.log('b = [ ', b, ' ]');",
    )
})

test('path sample', () => {
    const file = path.parse(
        'using-default-options/function-declaration/input.js',
    )

    expect(file.dir).toEqual('using-default-options/function-declaration')
    expect(file.base).toEqual('input.js')
})

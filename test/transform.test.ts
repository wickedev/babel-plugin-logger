import { parse } from '@babel/parser'
import traverse from '@babel/traverse'
import generator from '@babel/generator'
import fs from 'fs-extra'
import * as path from 'path'
import { defaultOption } from '~/options'
import { visitorFactory } from '~/visitor'

function normalize(input: string): string {
    // @ts-ignore
    return generator(parse(input, { plugins: ['classProperties'] })).code
}

test('babel transform example', async () => {
    const input = await fs.readFile(path.join(__dirname, 'fixtures/input.js'))
    const output = await fs.readFile(path.join(__dirname, 'fixtures/output.js'))

    // @ts-ignore
    const ast = parse(input.toString(), { plugins: ['classProperties'] })

    // @ts-ignore
    traverse(ast, visitorFactory(defaultOption))

    // @ts-ignore
    const gen = generator(ast, { flowCommaSeparator: false })
    expect(gen.code).toEqual(normalize(output.toString()))
})

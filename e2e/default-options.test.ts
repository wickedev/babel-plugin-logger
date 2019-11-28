import pluginTester from 'babel-plugin-tester/pure'
import { create } from 'babel-test'
import { toMatchFile } from 'jest-file-snapshot'
import * as path from 'path'
import plugin from '../src/index'

expect.extend({ toMatchFile })

describe('using default options', () => {
    const { fixtures } = create({
        plugins: [plugin],
    })

    fixtures(
        '[babel-test] default fixtures',
        path.join(__dirname, 'fixtures/using-default-options'),
        {},
    )

    pluginTester({
        title: '[babel-plugin-tester] default',
        plugin: plugin,
        fixtures: path.join(__dirname, 'fixtures/using-default-options'),
    })
})

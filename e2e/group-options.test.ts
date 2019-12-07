import { create } from 'babel-test'
import { toMatchFile } from 'jest-file-snapshot'
import * as path from 'path'
import plugin from '../src/index'
// noinspection TypeScriptPreferShortImport
import { groupInfoTemplate } from '../src/format'

expect.extend({ toMatchFile })

describe('using group options', () => {
    const { fixtures } = create({
        plugins: [
            [
                plugin,
                {
                    infoTemplate: groupInfoTemplate,
                },
            ],
        ],
    })

    fixtures(
        '[babel-test] group fixtures',
        path.join(__dirname, 'fixtures/using-group-options'),
    )
})

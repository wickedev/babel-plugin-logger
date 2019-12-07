import { create } from 'babel-test'
import { toMatchFile } from 'jest-file-snapshot'
import * as path from 'path'
import plugin from '../src/index'

expect.extend({ toMatchFile })

describe('using group string options', () => {
    const { fixtures } = create({
        plugins: [
            [
                plugin,
                {
                    infoTemplate: 'group',
                },
            ],
        ],
    })

    fixtures(
        '[babel-test] group fixtures',
        path.join(__dirname, 'fixtures/using-group-options'),
    )
})

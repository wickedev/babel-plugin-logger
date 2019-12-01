import { declare } from '@babel/helper-plugin-utils'
import { defaultOptions, Options } from '~/options'
import { visitorFactory } from '~/visitor'
const packageJson = require('../package.json')

export * from '~/format'

// noinspection JSUnusedLocalSymbols
export default declare((
    { types: t }: any /* api */,
    options: Options = defaultOptions,
    dirname: string,
) => {
    return {
        name: packageJson.name,
        visitor: visitorFactory(options),
    }
})

import { declare } from '@babel/helper-plugin-utils'
import { defaultOptions, Options } from '~/options'
import { visitorFactory } from '~/visitor'

// noinspection JSUnusedLocalSymbols
export default declare((
    { types: t }: any /* api */,
    options: Options = defaultOptions,
    dirname: string,
) => {
    return {
        visitor: visitorFactory(options),
    }
})

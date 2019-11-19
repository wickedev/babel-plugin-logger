import { declare } from '@babel/helper-plugin-utils'
import { defaultOption, Options } from '~/options'
import { visitorFactory } from '~/visitor'

export default declare((
    { types: t }: any /* api */,
    options: Options = defaultOption,
    dirname: string,
) => {
    return {
        visitor: visitorFactory(options),
    }
})

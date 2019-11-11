import { declare } from '@babel/helper-plugin-utils'
import fse from 'fs-extra'
import stringify from '@bugsnag/safe-json-stringify'

// @ts-ignore
export default declare((api: any, options: any, dirname: any) => {
    return {
        visitor: {
            Function(path: any, state: any) {
                fse.mkdirpSync('./log')
                fse.writeFileSync(
                    './log/visitor.log',
                    `path: ${path}, state: ${stringify(state, null, 4)}`,
                )
            },
        },
    }
})

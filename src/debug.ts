import fs from 'fs-extra'

export function debug(message?: any) {
    fs.appendFileSync('debug.log', message + '\n')
}

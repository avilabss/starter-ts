import { logger } from './utils/logger.js'

export class Hello {
    name: string
    constructor(name: string) {
        this.name = name
    }

    run() {
        const res = `Hello ${this.name}!`
        logger.info(res)
        return res
    }
}

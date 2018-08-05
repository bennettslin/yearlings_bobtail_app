import pino from 'pino'

const logger = pino()

if (process.env.NODE_ENV === 'production') {

    /* eslint-disable no-empty-function */
    logger.trace = () => {}
    logger.debug = () => {}
    logger.info = () => {}
    logger.warn = () => {}
    /* eslint-enable no-empty-function */
}

global.logger = logger

export default logger

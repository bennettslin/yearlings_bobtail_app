import pino from 'pino'

const logger = pino()

if (process.env.NODE_ENV === 'production') {
    logger.trace = () => {}
    logger.debug = () => {}
    logger.info = () => {}
    logger.warn = () => {}
}

global.logger = logger

export default logger

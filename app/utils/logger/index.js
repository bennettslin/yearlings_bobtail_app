import {
    logAccess,
    logFocus,
    logMount,
    logParse,
    logPlayer,
    logTransition,
    logScroll,
    logError,
    logger
} from './helper'

// TODO: Show in production for now.
// if (process.env.NODE_ENV === 'production') {
//     logger.trace = () => {}
//     logger.debug = () => {}
//     logger.info = () => {}
//     logger.warn = () => {}
// }

global.logAccess = logAccess
global.logFocus = logFocus
global.logMount = logMount
global.logParse = logParse
global.logPlayer = logPlayer
global.logTransition = logTransition
global.logScroll = logScroll
global.logError = logError

export default logger

import {
    logAccess,
    logAnalytics,
    logEvent,
    logFocus,
    logMount,
    logParse,
    logPlayer,
    logScroll,
    logTransition,
    logSuccess,
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
global.logAnalytics = logAnalytics
global.logEvent = logEvent
global.logFocus = logFocus
global.logMount = logMount
global.logParse = logParse
global.logPlayer = logPlayer
global.logScroll = logScroll
global.logTransition = logTransition
global.logSuccess = logSuccess
global.logError = logError

export default logger

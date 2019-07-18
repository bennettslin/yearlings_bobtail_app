import {
    logAccess,
    logAdmin,
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

// Only show error and fatal in production.
// TODO: Do this before release, but leave logging in production for now.
// if (process.env.NODE_ENV === 'production') {
//     logger.trace = () => {}
//     logger.debug = () => {}
//     logger.info = () => {}
//     logger.warn = () => {}
// }

global.logAccess = logAccess
global.logAdmin = logAdmin
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

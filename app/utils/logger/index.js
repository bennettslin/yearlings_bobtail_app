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
} from './helpers/logs'

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

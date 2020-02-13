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
    logSelect,
    logSuccess,
    logTransition,
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
global.logSelect = logSelect
global.logSuccess = logSuccess
global.logTransition = logTransition
global.logError = logError

export default logger

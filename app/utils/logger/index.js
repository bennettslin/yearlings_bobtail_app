import {
    logAccess,
    logAdmin,
    logEvent,
    logFocus,
    logMount,
    logServe,
    logPlayer,
    logScroll,
    logSelect,
    logTransition,
    logError,
    logger
} from './helpers/logs'

logServe({
    log: `Built ${BUILD_DATE_TIME}.`,
    action: 'load',
    label: BUILD_DATE_TIME
})

global.logAccess = logAccess
global.logAdmin = logAdmin
global.logEvent = logEvent
global.logFocus = logFocus
global.logMount = logMount
global.logServe = logServe
global.logPlayer = logPlayer
global.logScroll = logScroll
global.logSelect = logSelect
global.logTransition = logTransition
global.logError = logError

export default logger

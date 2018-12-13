import {
    logAccess,
    logEvent,
    logFocus,
    logMount,
    logParse,
    logPlayer,
    logRender,
    logRenderable,
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
global.logEvent = logEvent
global.logFocus = logFocus
global.logMount = logMount
global.logParse = logParse
global.logPlayer = logPlayer
global.logRender = logRender
global.logRenderable = logRenderable
global.logScroll = logScroll
global.logError = logError

export default logger

import pino from 'pino'

const logger = pino(),

    ACCESS_STYLE = 'background: #666; color: #bbf; padding: 4px;',
    EVENT_STYLE = 'background: #666; color: #bbf; padding: 4px;',
    FOCUS_STYLE = 'background: #666; color: #bbf; padding: 4px;',
    PARSE_STYLE = 'background: #666; color: #bbf; padding: 4px;',
    PLAYER_STYLE = 'background: #666; color: #bbf; padding: 4px;',
    RENDER_STYLE = 'background: #666; color: #bbf; padding: 4px;',
    RENDERABLE_STYLE = 'background: #666; color: #bbf; padding: 4px;',
    SCROLL_STYLE = 'background: #666; color: #bbf; padding: 4px;',
    ERROR_STYLE = 'background: #666; color: #bbf; padding: 4px;',

    logInfo = (log, style) => {
        logger.info(`%c${log}`, style)
    },
    logAccess = (log) => {
        logInfo(log, ACCESS_STYLE)
    },
    logEvent = (log) => {
        logInfo(log, EVENT_STYLE)
    },
    logFocus = (log) => {
        logInfo(log, FOCUS_STYLE)
    },
    logParse = (log) => {
        logInfo(log, PARSE_STYLE)
    },
    logPlayer = (log) => {
        logInfo(log, PLAYER_STYLE)
    },
    logRender = (log) => {
        logInfo(log, RENDER_STYLE)
    },
    logRenderable = (log) => {
        logInfo(log, RENDERABLE_STYLE)
    },
    logScroll = (log) => {
        logInfo(log, SCROLL_STYLE)
    },
    logError = (log) => {
        logger.error(`%c${log}`, ERROR_STYLE)
    }

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
global.logParse = logParse
global.logPlayer = logPlayer
global.logRender = logRender
global.logRenderable = logRenderable
global.logScroll = logScroll
global.logError = logError

export default logger

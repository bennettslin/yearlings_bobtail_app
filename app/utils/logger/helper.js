import pino from 'pino'
import { differenceInMilliseconds } from 'date-fns'

const logger = pino(),
    startTime = Date.now()

const _getDifference = () => {
    const difference = differenceInMilliseconds(Date.now(), startTime)
    return (difference * 0.001).toFixed(2)
}

const _getStyles = (styles = {}) => {
        const finalStyles = {
                color: '#888',
                padding: '8px',
                borderRadius: '4px',
                background: '#efe',
                fontSize: '1em',
                ...styles
            },
            stylesArray = []

        for (const key in finalStyles) {

            // Change camel case to dashed case.
            const dashedKey =
                key.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)

            stylesArray.push(`${dashedKey}: ${finalStyles[key]};`)
        }
        return stylesArray.join(' ')
    },

    ACCESS_STYLE = _getStyles({
        color: '#4b4'
    }),
    EVENT_STYLE = _getStyles(),
    FOCUS_STYLE = _getStyles({
        color: '#874'
    }),
    MOUNT_STYLE = _getStyles({
        color: '#b4b',
        fontSize: '1.25em'
    }),
    PARSE_STYLE = _getStyles(),
    PLAYER_STYLE = _getStyles({
        color: '#487'
    }),
    RENDER_STYLE = _getStyles({
        color: '#44b'
    }),
    RENDERABLE_STYLE = _getStyles({
        color: '#847'
    }),
    SCROLL_STYLE = _getStyles({
        color: '#748'
    }),
    ERROR_STYLE = _getStyles({
        color: '#b44',
        fontSize: '1.5em'
    })

const _logInfo = ({
    log,
    styles,
    level = 'info'
}) => {
    logger[level](`%c${log}`, styles, _getDifference())
}

const
    logAccess = (log) => {
        _logInfo({
            log,
            styles: ACCESS_STYLE
        })
    },
    logEvent = (log) => {
        _logInfo({
            log,
            styles: EVENT_STYLE
        })
    },
    logFocus = (log) => {
        _logInfo({
            log,
            styles: FOCUS_STYLE
        })
    },
    logMount = (text) => {
        _logInfo({
            log: `${text} mounted.`,
            styles: MOUNT_STYLE
        })
    },
    logParse = (log) => {
        _logInfo({
            log,
            styles: PARSE_STYLE
        })
    },
    logPlayer = (log) => {
        _logInfo({
            log,
            styles: PLAYER_STYLE
        })
    },
    logRender = (log) => {
        _logInfo({
            log,
            styles: RENDER_STYLE
        })
    },
    logRenderable = (log) => {
        _logInfo({
            log,
            styles: RENDERABLE_STYLE
        })
    },
    logScroll = (text) => {
        _logInfo({
            log: `Scroll: ${text}`,
            styles: SCROLL_STYLE
        })
    },
    logError = (log) => {
        _logInfo({
            log,
            styles: ERROR_STYLE,
            level: 'error'
        })
    }

export {
    logAccess,
    logEvent,
    logFocus,
    logMount,
    logParse,
    logPlayer,
    logRender,
    logRenderable,
    logScroll,
    logError
}

import pino from 'pino'
import { differenceInMilliseconds } from 'date-fns'

const
    logger = pino(),
    startTime = Date.now(),

    _getTimeDifference = () => {
        const difference = differenceInMilliseconds(Date.now(), startTime)
        return (difference * 0.001).toFixed(2)
    },

    _getStyles = (styles = {}) => {
        const finalStyles = {
                color: '#888',
                padding: '12px 8px',
                border: '1px solid #bbb',
                borderRadius: '4px',
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
        color: '#b4b'
    }),
    PARSE_STYLE = _getStyles(),
    PLAYER_STYLE = _getStyles({
        color: '#487'
    }),
    ENTER_STYLE = _getStyles({
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
    }),

    _logInfo = ({
        log,
        styles,
        level = 'info'
    }) => {
        logger[level](`%c${log}`, styles, _getTimeDifference())
    }

export const logAccess = (log) => {
    _logInfo({
        log,
        styles: ACCESS_STYLE
    })
}
export const logEvent = (log) => {
    _logInfo({
        log,
        styles: EVENT_STYLE
    })
}
export const logFocus = (log) => {
    _logInfo({
        log,
        styles: FOCUS_STYLE
    })
}
export const logMount = (text) => {
    _logInfo({
        log: `${text} mounted.`,
        styles: MOUNT_STYLE
    })
}
export const logParse = (log) => {
    _logInfo({
        log,
        styles: PARSE_STYLE
    })
}
export const logPlayer = (log) => {
    _logInfo({
        log,
        styles: PLAYER_STYLE
    })
}
export const logEnter = (log) => {
    _logInfo({
        log,
        styles: ENTER_STYLE
    })
}
export const logRenderable = (log) => {
    _logInfo({
        log,
        styles: RENDERABLE_STYLE
    })
}
export const logScroll = (text) => {
    _logInfo({
        log: `Scroll: ${text}`,
        styles: SCROLL_STYLE
    })
}
export const logError = (log) => {
    _logInfo({
        log,
        styles: ERROR_STYLE,
        level: 'error'
    })
}

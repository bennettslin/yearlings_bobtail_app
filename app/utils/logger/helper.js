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
                backgroundColor: '#f8ffff',
                color: '#888',
                padding: '6px 8px',
                margin: '2px 0',
                border: '1px solid #bbb',
                borderRadius: '4px',
                fontSize: '1.25em',
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
        color: '#b84',
        fontSize: '1.1em'
    }),
    EVENT_STYLE = _getStyles({
        color: '#8ad',
        fontSize: '1em'
    }),
    FOCUS_STYLE = _getStyles({
        color: '#874',
        fontSize: '1em'
    }),
    MOUNT_STYLE = _getStyles({
        color: '#66b',
        fontSize: '1.1em'
    }),
    PARSE_STYLE = _getStyles({
        fontSize: '1.1em'
    }),
    PLAYER_STYLE = _getStyles({
        color: '#487',
        fontSize: '1.35em'
    }),
    SCROLL_STYLE = _getStyles({
        color: '#748',
        fontSize: '1.2em'
    }),
    TRANSITION_STYLE = _getStyles({
        color: '#b4b',
        fontSize: '1.35em'
    }),
    SUCCESS_STYLE = _getStyles({
        color: '#4b4',
        fontSize: '2em'
    }),
    ERROR_STYLE = _getStyles({
        color: '#b44',
        fontSize: '2em'
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
export const logEvent = (componentName, e) => {
    const { type } = e
    _logInfo({
        log: `Event "${type}" from ${componentName}.`,
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
export const logScroll = (text) => {
    _logInfo({
        log: `Scroll: ${text}`,
        styles: SCROLL_STYLE
    })
}
export const logSuccess = (log) => {
    _logInfo({
        log,
        styles: SUCCESS_STYLE
    })
}
export const logTransition = (log) => {
    _logInfo({
        log,
        styles: TRANSITION_STYLE
    })
}
export const logError = (log) => {
    _logInfo({
        log,
        styles: ERROR_STYLE,
        level: 'error'
    })
}

export const ACCESS = 'access'
export const ADMIN = 'admin'
export const ANALYTICS__FAILURE = 'analyticsFailure'
export const ANALYTICS__PENDING = 'analyticsPending'
export const ANALYTICS__SUCCESS = 'analyticsSuccess'
export const ERROR = 'error'
export const EVENT = 'event'
export const FOCUS = 'focus'
export const MOUNT = 'mount'
export const PLAYER = 'player'
export const SCROLL = 'scroll'
export const SELECT = 'select'
export const SERVE = 'serve'
export const STATE = 'state'
export const SUCCESS = 'style'
export const TRANSITION = 'transition'

const BASE_STYLES = {
    // Show turquoise background by default.
    backgroundColor: '#f0ffff',
    color: '#888',
    padding: '6px 8px',
    margin: '2px 0',
    border: '1px solid #bbb',
    borderRadius: '4px',
    fontSize: '1.25em',
}

const GA_STYLE = {
    // If log sends to analytics, show yellow background instead.
    backgroundColor: '#fffff0',
}

const _getStyles = (styles) => {
    const stylesArray = []

    for (const key in styles) {
        // Change camel case to dashed case.
        const dashedKey =
            key.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)

        stylesArray.push(`${dashedKey}: ${styles[key]};`)
    }
    return stylesArray.join(' ')
}

const LOG_STYLES = {
    [ACCESS]: {
        color: '#b82',
        fontSize: '1.1em',
    },
    [ADMIN]: {
        color: '#2b8',
        fontSize: '2em',
    },
    [ANALYTICS__FAILURE]: {
        color: '#b44',
        fontSize: '0.6em',
    },
    [ANALYTICS__PENDING]: {
        color: '#bb4',
        fontSize: '0.6em',
    },
    [ANALYTICS__SUCCESS]: {
        color: '#4b4',
        fontSize: '0.6em',
    },
    [ERROR]: {
        color: '#b44',
        fontSize: '2em',
    },
    [EVENT]: {
        color: '#8ad',
        fontSize: '0.8em',
    },
    [FOCUS]: {
        color: '#874',
        fontSize: '0.8em',
    },
    [MOUNT]: {
        color: '#66b',
        fontSize: '1.1em',
    },
    [PLAYER]: {
        color: '#487',
        fontSize: '1.35em',
    },
    [SCROLL]: {
        color: '#748',
        fontSize: '1.2em',
    },
    [SELECT]: {
        color: '#82b',
        fontSize: '1.275em',
    },
    [SERVE]: {
        fontSize: '1.1em',
    },
    [STATE]: {
        color: '#da8',
        fontSize: '0.8em',
    },
    [SUCCESS]: {
        color: '#4b4',
        fontSize: '2em',
    },
    [TRANSITION]: {
        color: '#b4b',
        fontSize: '1.35em',
    },
}

export const getStyleForCategory = ({
    category,
    action,

}) => (
    _getStyles({
        ...(
            category !== ANALYTICS__SUCCESS &&
            category !== ANALYTICS__PENDING &&
            category !== ANALYTICS__FAILURE
        ) && BASE_STYLES,
        ...LOG_STYLES[category],
        // It's a GA call if it has an action.
        ...Boolean(action) && GA_STYLE,
    })
)

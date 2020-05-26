const BASE_STYLES = {
    backgroundColor: '#f0ffff',
    color: '#888',
    padding: '6px 8px',
    margin: '2px 0',
    border: '1px solid #bbb',
    borderRadius: '4px',
    fontSize: '1.25em'
}

const GA_STYLE = {
    backgroundColor: '#fffff0'
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

export const ACCESS = 'access'
export const ADMIN = 'admin'
export const ANALYTICS = 'analytics'
export const ERROR = 'error'
export const EVENT = 'event'
export const FOCUS = 'focus'
export const MOUNT = 'mount'
export const PLAYER = 'player'
export const SCROLL = 'scroll'
export const SELECT = 'select'
export const SERVE = 'serve'
export const SUCCESS = 'style'
export const TRANSITION = 'transition'

const LOG_STYLES = {
    [ACCESS]: {
        color: '#b82',
        fontSize: '1.1em'
    },
    [ADMIN]: {
        color: '#2b8',
        fontSize: '1.2em'
    },
    [ANALYTICS]: {
        color: '#888',
        fontSize: '0.6em'
    },
    [ERROR]: {
        color: '#b44',
        fontSize: '2em'
    },
    [EVENT]: {
        color: '#8ad',
        fontSize: '0.8em'
    },
    [FOCUS]: {
        color: '#874',
        fontSize: '0.8em'
    },
    [MOUNT]: {
        color: '#66b',
        fontSize: '1.1em'
    },
    [PLAYER]: {
        color: '#487',
        fontSize: '1.35em'
    },
    [SCROLL]: {
        color: '#748',
        fontSize: '1.2em'
    },
    [SELECT]: {
        color: '#82b',
        fontSize: '1.2em'
    },
    [SERVE]: {
        fontSize: '1.1em'
    },
    [SUCCESS]: {
        color: '#4b4',
        fontSize: '2em'
    },
    [TRANSITION]: {
        color: '#b4b',
        fontSize: '1.35em'
    }
}

export const getStyleForCategory = ({
    category,
    isGaCall

}) => (
    _getStyles({
        ...category !== ANALYTICS && BASE_STYLES,
        ...LOG_STYLES[category],
        ...isGaCall && GA_STYLE
    })
)

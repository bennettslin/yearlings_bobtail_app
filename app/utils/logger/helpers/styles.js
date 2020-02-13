const BASE_STYLES = {
    backgroundColor: '#f0ffff',
    color: '#888',
    padding: '6px 8px',
    margin: '2px 0',
    border: '1px solid #bbb',
    borderRadius: '4px',
    fontSize: '1.25em'
}

const _getStyles = ({
    baseStyles = BASE_STYLES,
    ...styles
}) => {
    const finalStyles = {
            ...baseStyles,
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
}

export const ACCESS = 'access'
export const ADMIN = 'admin'
export const ANALYTICS = 'analytics'
export const ERROR = 'error'
export const EVENT = 'event'
export const FOCUS = 'focus'
export const MOUNT = 'mount'
export const PARSE = 'parse'
export const PLAYER = 'player'
export const SCROLL = 'scroll'
export const SELECT = 'select'
export const SUCCESS = 'style'
export const TRANSITION = 'transition'

const LOG_STYLES = {
    [ACCESS]: _getStyles({
        color: '#b82',
        fontSize: '1.1em'
    }),
    [ADMIN]: _getStyles({
        color: '#2b8',
        fontSize: '1.2em'
    }),
    [ANALYTICS]: _getStyles({
        baseStyles: {},
        color: '#888',
        fontSize: '0.6em'
    }),
    [ERROR]: _getStyles({
        color: '#b44',
        fontSize: '2em'
    }),
    [EVENT]: _getStyles({
        color: '#8ad',
        fontSize: '1em'
    }),
    [FOCUS]: _getStyles({
        color: '#874',
        fontSize: '1em'
    }),
    [MOUNT]: _getStyles({
        color: '#66b',
        fontSize: '1.1em'
    }),
    [PARSE]: _getStyles({
        fontSize: '1.1em'
    }),
    [PLAYER]: _getStyles({
        color: '#487',
        fontSize: '1.35em'
    }),
    [SCROLL]: _getStyles({
        color: '#748',
        fontSize: '1.2em'
    }),
    [SELECT]: _getStyles({
        color: '#82b',
        fontSize: '1.2em'
    }),
    [SUCCESS]: _getStyles({
        color: '#4b4',
        fontSize: '2em'
    }),
    [TRANSITION]: _getStyles({
        color: '#b4b',
        fontSize: '1.35em'
    })
}

export const getStyleForCategory = category => (
    LOG_STYLES[category]
)

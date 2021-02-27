import { getSceneIndexForVerse } from '../../api/album/verses'
import { sendToGaFromLog } from './helpers/analytics'
import { getTimeDifference } from './helpers/time'
import {
    ACCESS,
    ADMIN,
    EVENT,
    FOCUS,
    MOUNT,
    PLAYER,
    SCROLL,
    SELECT,
    SERVE,
    STATE,
    TRANSITION,
    SUCCESS,
    ERROR,
    getStyleForCategory,
} from './helpers/styles'

const _log = ({
    log,
    styles,
    level = 'info',
    category,
    styleCategory,
    action,
    label,
    value,
    useTimeForValue,

}) => {
    const timeDifference = getTimeDifference()

    if (log) {
        console[level](
            `%c${log}`,
            styles || getStyleForCategory({
                category: styleCategory || category,
                action,
            }),
            timeDifference
        )
    }

    sendToGaFromLog({
        category,
        action,
        label,
        value: parseInt(
            useTimeForValue ?
                // Send to analytics as milliseconds.
                timeDifference * 1000 :
                value
        ),
    })
}

/** Analytics events */
export const logAccess = (log, keyName) => {
    _log({
        log,
        styleCategory: ACCESS,
        // Only send to GA if the key was registered.
        ...Boolean(keyName) && {
            // Send to GA as an event category.
            category: EVENT,
            action: 'Key',
            label: keyName,
        },
    })
}
export const logEvent = (componentName, label) => {
    _log({
        log: `Event "${label || 'click'}" from ${componentName}.`,
        category: EVENT,
        action: componentName,
        label,
    })
}
export const logPlayer = (log, { success, ...props }) => {
    _log({
        log,
        styleCategory: success ? SUCCESS : PLAYER,
        category: PLAYER,
        ...props,
    })
}
export const logSelect = ({
    action,
    song,
    verse,
    annotation,
}) => {
    let message = `song: ${song}`

    if (Number.isFinite(verse)) {
        const scene = getSceneIndexForVerse(song, verse)
        message += `, scene: ${scene}, verse: ${verse}`
    }
    if (annotation) {
        message += `, annotation: ${annotation}`
    }

    _log({
        log: `Selected ${message}.`,
        category: SELECT,
        action,
        label: message,
    })
}
export const logServe = (log, props) => {
    _log({
        log,
        category: SERVE,
        useTimeForValue: true,
        ...props,
    })
}
export const logState = (stateName, label) => {
    let labelText = label
    if (typeof label === 'undefined') {
        labelText = 'on'
    }
    _log({
        log: `"${stateName}" is now ${labelText}.`,
        category: STATE,
        action: stateName,
        label,
    })
}
export const logError = (log, props) => {
    _log({
        log,
        level: 'error',
        category: ERROR,
        ...props,
    })
}

/** Non-analytics events */

export const logAdmin = log => {
    _log({
        log,
        category: ADMIN,
    })
}
export const logFocus = log => {
    _log({
        log,
        category: FOCUS,
    })
}
export const logMount = componentName => {
    _log({
        log: `${componentName} mounted.`,
        category: MOUNT,
    })
}
export const logScroll = ({
    isCarousel,
    isAnchor,
    log,
}) => {
    let scrollType = 'verse'
    if (isCarousel) {
        scrollType = 'carousel'
    } else if (isAnchor) {
        scrollType = 'anchor'
    }
    _log({
        log: `Scroll ${scrollType}: ${log}`,
        category: SCROLL,
    })
}
export const logTransition = log => {
    _log({
        log,
        category: TRANSITION,
    })
}

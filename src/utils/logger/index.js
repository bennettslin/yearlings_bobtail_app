import { getSceneIndexForVerse } from '../../endpoint/album/verses'
import { sendToAnalyticsFromLog } from './helpers/analytics'
import { getTimeDifference } from './helpers/time'
import {
    ACCESS, ADMIN, EVENT, GENERAL, MOUNT, PLAYER, SCROLL, SELECT, SERVE, STATE, TRANSITION, SUCCESS, ERROR, getStyleForCategoryLog,
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
    useTimeDifferenceForValue,

}) => {
    const timeDifference = getTimeDifference()

    if (log) {
        console[level](
            `%c${log}`,
            styles || getStyleForCategoryLog(styleCategory || category),
            timeDifference,
        )
    }

    sendToAnalyticsFromLog({
        category,
        action,
        label,
        value: parseInt(
            useTimeDifferenceForValue && !Number.isFinite(value) ?
                // Send to analytics as milliseconds.
                timeDifference * 1000 :
                value,
        ),
    })
}

/** Analytics events */
export const logAccess = (log, keyName) => {
    _log({
        log,
        styleCategory: ACCESS,
        // Send to GA as an event category.
        category: EVENT,
        action: 'Key',
        label: keyName,
    })
}
export const logEvent = (componentName, label, value) => {
    _log({
        log: `Event "${label || 'click'}" from ${componentName}.`,
        category: EVENT,
        action: componentName,
        label,
        ...Number.isFinite(value) && { value },
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
        useTimeDifferenceForValue: true,
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
export const logSuccess = (log, props) => {
    _log({
        log,
        category: SUCCESS,
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
export const logGeneral = log => {
    _log({
        log,
        category: GENERAL,
    })
}
export const logMount = componentName => {
    _log({
        log: `${componentName} mounted.`,
        category: MOUNT,
    })
}
export const logPlayer = log => {
    _log({
        log,
        category: PLAYER,
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

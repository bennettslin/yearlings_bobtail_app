import { getSceneIndexForVerse } from '../../../api/album/verses'
import { sendToGaFromLog } from './analytics'
import { getTimeDifference } from './time'
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
    TRANSITION,
    SUCCESS,
    ERROR,
    getStyleForCategory,
} from './styles'

const _logInfo = ({
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
export const logAccess = ({
    log,
    label,
}) => {
    _logInfo({
        log,
        styleCategory: ACCESS,
        // Only send to GA if the key was registered.
        ...Boolean(label) && {
            // Send to GA as an event category.
            category: EVENT,
            action: 'key',
            label,
        },
    })
}
export const logEvent = ({
    componentName,
    e: { type },
    analyticsIdentifier,
}) => {
    _logInfo({
        log: `Event "${type}" from ${componentName}.`,
        category: EVENT,
        ...Boolean(analyticsIdentifier) && {
            action: type,
            label: `${componentName} ${analyticsIdentifier}`,
        },
    })
}
export const logMount = (componentName) => {
    _logInfo({
        log: `${componentName} mounted.`,
        styleCategory: MOUNT,
        category: 'lifecycle',
        action: MOUNT,
        label: componentName,
        useTimeForValue: true,
    })
}
export const logPlayer = ({
    log,
    success,
    ...props
}) => {
    _logInfo({
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
    if (verse !== undefined) {
        const
            scene = getSceneIndexForVerse(song, verse),
            message = `song: ${song}, scene: ${scene}, verse: ${verse}.`
        _logInfo({
            log: message,
            category: SELECT,
            action,
            label: message,
        })
    }
    if (annotation) {
        const message = `song: ${song}, annotation: ${annotation}`
        _logInfo({
            log: message,
            category: SELECT,
            action,
            label: message,
        })
    }
}
export const logServe = ({
    log,
    ...props
}) => {
    _logInfo({
        log,
        category: SERVE,
        useTimeForValue: true,
        ...props,
    })
}
export const logError = (log, props) => {
    _logInfo({
        log,
        level: 'error',
        category: ERROR,
        ...props,
    })
}

/** Non-analytics events */

export const logAdmin = log => {
    _logInfo({
        log,
        category: ADMIN,
    })
}
export const logFocus = log => {
    _logInfo({
        log,
        category: FOCUS,
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
    _logInfo({
        log: `Scroll ${scrollType}: ${log}`,
        category: SCROLL,
    })
}
export const logTransition = log => {
    _logInfo({
        log,
        category: TRANSITION,
    })
}

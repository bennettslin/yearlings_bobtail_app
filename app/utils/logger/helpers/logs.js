import pino from 'pino'
import sendToGa from '../../analytics'

import { getTimeDifference } from './time'

import {
    ACCESS,
    ADMIN,
    ANALYTICS,
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
    getStyleForCategory
} from './styles'

export const logger = pino()

const _logInfo = ({
    log,
    styles,
    level = 'info',
    category,
    styleCategory,
    action,
    label,
    value,
    useTimeForValue

}) => {
    const
        isGaCall = Boolean(category && action),
        timeDifference = getTimeDifference(),
        finalValue = parseInt(
            useTimeForValue ?
                // Send to analytics as milliseconds.
                timeDifference * 1000 :
                value
        )

    if (log) {
        logger[level](
            `%c${log}`,
            styles || getStyleForCategory({
                category: styleCategory || category,
                isGaCall
            }),
            timeDifference
        )
    }

    if (isGaCall) {

        const didGaSucceed = sendToGa({
            category,
            action,
            label,
            value: finalValue
        })

        if (SHOW_ADMIN && didGaSucceed) {
            // Log analytics parameters to make data analysis easier.
            logger.info(`%c${`category: ${category}\naction: ${action}${label ? `\nlabel: ${label}` : ''}${finalValue ? `\nvalue: ${finalValue}` : ''}`}`, getStyleForCategory({ category: ANALYTICS }))
        }

    }
}

/** Analytics events */
export const logAccess = ({
    log,
    label
}) => {
    _logInfo({
        log,
        styleCategory: ACCESS,
        // Only send to GA if the key was registered.
        ...Boolean(label) && {
            // Send to GA as an event category.
            category: EVENT,
            action: 'key',
            label
        }
    })
}
export const logEvent = ({
    componentName,
    e: { type },
    analyticsIdentifier
}) => {
    _logInfo({
        log: `Event "${type}" from ${componentName}.`,
        category: EVENT,
        ...Boolean(analyticsIdentifier) && {
            action: type,
            label: `${componentName} ${analyticsIdentifier}`
        }
    })
}
export const logMount = (componentName) => {
    _logInfo({
        log: `${componentName} mounted.`,
        styleCategory: MOUNT,
        category: 'lifecycle',
        action: MOUNT,
        label: componentName,
        useTimeForValue: true
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
        ...props
    })
}
export const logSelect = ({
    action,
    song,
    verse,
    annotation,
    scene
}) => {
    if (verse !== undefined && scene !== undefined) {
        const message = `song: ${song}, scene: ${scene}, verse: ${verse}`
        _logInfo({
            log: message,
            category: SELECT,
            action,
            label: message
        })
    }
    if (annotation) {
        const message = `song: ${song}, annotation: ${annotation}`
        _logInfo({
            log: message,
            category: SELECT,
            action,
            label: message
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
        ...props
    })
}
export const logError = ({
    log,
    ...props
}) => {
    _logInfo({
        log,
        category: ERROR,
        ...props
    })
}

/** Non-analytics events */

export const logAdmin = (log) => {
    _logInfo({
        log,
        category: ADMIN
    })
}
export const logFocus = (log) => {
    _logInfo({
        log,
        category: FOCUS
    })
}
export const logScroll = (text) => {
    _logInfo({
        log: `Scroll: ${text}`,
        category: SCROLL
    })
}
export const logTransition = (log) => {
    _logInfo({
        log,
        category: TRANSITION
    })
}

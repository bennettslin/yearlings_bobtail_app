import pino from 'pino'
import isUndefined from 'lodash/isundefined'
import sendEvent from '../../analytics'

import { getTimeDifference } from './time'

import {
    ACCESS,
    ADMIN,
    ANALYTICS,
    EVENT,
    FOCUS,
    MOUNT,
    PARSE,
    PLAYER,
    SCROLL,
    SELECT,
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
            styles || getStyleForCategory(styleCategory || category),
            timeDifference
        )
    }

    if (category && action) {
        if (sendEvent({
            category,
            action,
            label,
            value: finalValue
        })) {
            // Log analytics parameters to make data analysis easier.
            logger.info(`%c${`category: ${category}\naction: ${action}${label ? `\nlabel: ${label}` : ''}${finalValue ? `\nvalue: ${finalValue}` : ''}`}`, getStyleForCategory(ANALYTICS))
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
export const logParse = ({
    log,
    ...props
}) => {
    _logInfo({
        log,
        category: PARSE,
        useTimeForValue: true,
        ...props
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
    if (!isUndefined(verse) && !isUndefined(scene)) {
        _logInfo({
            category: SELECT,
            action,
            label: `song: ${song}, scene: ${scene}, verse: ${verse}`
        })
    }
    if (annotation) {
        _logInfo({
            category: SELECT,
            action,
            label: `song: ${song}, annotation: ${annotation}`
        })
    }
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

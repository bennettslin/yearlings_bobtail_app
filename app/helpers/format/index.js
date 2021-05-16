// Helpers for parsing text objects.
import { isString } from '../general'

const _appendSharedSuffix = style => (
    `${style}__shared`
)

export const getSharedClassNames = sharedStyle => {
    if (isString(sharedStyle)) {
        return _appendSharedSuffix(sharedStyle)

    } else if (Array.isArray(sharedStyle)) {
        return (
            sharedStyle.map(style => (
                _appendSharedSuffix(style)
            ))
        )

    } else {
        return null
    }
}

// TODO: This won't be needed once no presence has its own custom styling.
export const convertPresenceKeyToClassName = (word = '') => {
    // Remove anything after double underscore.
    return word.split('__')[0]
}

export const capitaliseForClassName = word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

export const convertPresenceKeyToTitle = string => {
    // Convert to camel case.
    return string.replace(/([A-Z])/g, ' $1')

        // Replace double underscore with space.
        .replace('__', ' ')
        .toLowerCase()
}

export const getFormattedTime = time => {
    if (time === -1) {
        time = 0
    }

    const minutes = Math.floor(time / 60),
        seconds = Math.floor(time % 60),
        secondsZeroTen = seconds < 10 ? '0' : '',
        baseTime = `${minutes}:${secondsZeroTen}${seconds}`

    return baseTime
}

export const hasSpecialCharacterAtIndex = (text, index) => {
    const indexedChar = text.charAt(index)
    return indexedChar === ',' ||
        indexedChar === '.' ||
        indexedChar === '?' ||
        indexedChar === '!' ||
        indexedChar === ':' ||
        indexedChar === ';' ||
        indexedChar === '—' ||
        indexedChar === '…'
}

export const getFormattedEndingVerseSpanText = text => {
    // End in ellipsis.
    if (hasSpecialCharacterAtIndex(text, text.length - 1)) {
        text = `${text.slice(0, text.length - 1)}…`

    } else {
        text = `${text}…`
    }

    return text
}

export const getFormattedLyricSpanText = text => {
    // This prevents any new line from being a lone word.
    const lastSpaceIndex = text.lastIndexOf(' ')

    if (lastSpaceIndex > -1) {
        return `${text.slice(0, lastSpaceIndex)}\u00a0${text.slice(lastSpaceIndex + 1)}`

    } else {
        return text
    }
}

export const getCharStringForNumber = myNumber => {
    if (myNumber === -1) {
        return 'n'
    }

    // 10 is a, 11 is b, and so forth.
    return myNumber < 10 ? myNumber : String.fromCharCode(myNumber + 87)
}

export const getJsFromSass = (sassVariable = '') => {
    return parseFloat(sassVariable.replace(/[^\d.-]/g, ''))
}

export const convertToMilliseconds = seconds => (
    getJsFromSass(seconds) * 1000
)

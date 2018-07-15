// Helpers for parsing text objects.

import { LYRIC_TEXT_KEYS } from '../constants/lyrics'

export const getFormattedTime = (time, withJiffy) => {
    if (time === -1) {
        time = 0
    }

    const minutes = Math.floor(time / 60),
        seconds = Math.floor(time % 60),
        secondsZeroTen = seconds < 10 ? '0' : '',
        baseTime = `${minutes}:${secondsZeroTen}${seconds}`

    // If including jiffy, return an object.
    if (withJiffy) {
        const jiffy = Math.floor((time * 10) % 6)

        return {
            base: baseTime,
            jiffy: `.${jiffy}`
        }

    // Otherwise return a string.
    } else {
        return baseTime
    }
}

// Parses text in anchor tag into annotation header.
export const getFormattedAnnotationTitle = (anchor, properNoun, keepEndCharacter) => {
    /**
     * Get annotation title from anchor text. Convert from object if
     * necessary, and also uncapitalise if not a proper noun.
     */
    let title = anchor

    // Convert from object if necessary.
    if (typeof anchor === 'object') {
        title = _getStringFromObject(title)
    }

    // This flag exists solely for "Constellations!" title.
    if (!keepEndCharacter) {
        title = _getDeletedSpecialCharactersText(title)
    }
    title = _getDeletedWrappingCharactersText(title)

    // Uncapitalise if not a proper noun.
    if (!properNoun) {
        if (!_beginsWithPronounI(title)) {
            title = _getUncapitalisedText(title)
        }
    }

    // Finally, replace double quotes with single quotes.
    return title.replace(/"/g, "'")
}

const _getStringFromObject = (textEntity) => {

    if (Array.isArray(textEntity)) {
        /**
         * This adds a whitespace unless the following text begins with "'s."
         * Check "Bobtail's words" in M and "surrendered for Bobtail's sake" in
         * Uncanny Valley.
         */
        return textEntity.reduce((textString, textObject) => {
            const objectString = _getStringFromObject(textObject),
                whiteSpace = objectString.indexOf('\'s') === 0 ? '' : ' '

            return textString + whiteSpace + objectString
        }, '')

    } else if (typeof textEntity === 'object') {
        return LYRIC_TEXT_KEYS.reduce((prevString, textKey) => {
            return textEntity[textKey] ? _getStringFromObject(textEntity[textKey]) : prevString
        }, '')

    } else {
        return textEntity
    }
}

const _getUncapitalisedText = (text) => {
    return text.charAt(0).toLowerCase() + text.slice(1)
}

const _beginsWithPronounI = (text) => {
    return text.indexOf('I ') === 0 || text.indexOf('I\'') === 0
}

const _getDeletedSpecialCharactersText = (text) => {
    // Eliminate all special characters at end.
    if (_hasSpecialCharacterAtIndex(text, text.length - 1)) {
        text = _getDeletedSpecialCharactersText(text.slice(0, text.length - 1))

    // Also eliminate special character right before a double quote.
    } else if (text.charAt(text.length - 1) === '"' &&
               _hasSpecialCharacterAtIndex(text, text.length - 2)) {
        text = _getDeletedSpecialCharactersText(text.slice(0, text.length - 2) + text.slice(text.length - 1))
    }

    return text
}

const _getDeletedWrappingCharactersText = (text) => {
    /**
     * Note that this only knows how to differentiate between one wrapping
     * character versus two.
     */
    const WRAPPING_CHARS = ['"', '—', '…']

    WRAPPING_CHARS.forEach(char => {
        const firstIndex = text.indexOf(char),
            lastIndex = text.lastIndexOf(char)

        // Delete if lone wrapping character.
        if (firstIndex === lastIndex) {
            text = text.replace(char, '')

        // If two wrapping characters...
        } else {
            // ... delete both '"'s if entire text is wrapped between them.
            if (char === '"' && firstIndex === 0 && lastIndex === text.length - 1) {
                // e.g. '"tetherboy"'
                text = text.slice(1, -1)

            // ... convert first '—' to a comma, and delete second.
            } else if (char === '—') {
                // e.g. 'heroes— ourauras left—'
                text = text.replace('—', ',').replace('—', '')
            }
        }
    })

    return text
}

const _hasSpecialCharacterAtIndex = (text, index) => {
    const indexedChar = text.charAt(index)
    return indexedChar === ',' ||
        indexedChar === '.' ||
        indexedChar === '?' ||
        indexedChar === '!' ||
        indexedChar === ':' ||
        indexedChar === ';' ||
        indexedChar === '' ||
        indexedChar === '…'
}

export const getFormattedEndingVerseSpanText = (text) => {
    // End in ellipsis.
    if (_hasSpecialCharacterAtIndex(text, text.length - 1)) {
        text = `${text.slice(0, text.length - 1)}…`

    } else {
        text = `${text}…`
    }

    return text
}

export const getFormattedLyricSpanText = (text) => {
    const lastSpaceIndex = text.lastIndexOf(' ')

    if (lastSpaceIndex > -1) {
        return `${text.slice(0, lastSpaceIndex)}\u00a0${text.slice(lastSpaceIndex + 1)}`

    } else {
        return text
    }
}

export const getVerseUnitClassName = ({
    isEven,
    inVerseBar,
    inMain,
    isTitle
}) => {

    if (!inVerseBar) {
        if (isTitle) {
            return 'title'
        } else if (inMain) {
            return isEven ? 'even' : 'odd'
        } else {
            return 'inSide'
        }
    }

    return ''
}

export const getCursorStatusClassName = ({
    isOnCursor,
    isAfterCursor
}) => {

    if (isOnCursor) {
        return 'onCursor'

    } else if (isAfterCursor) {
        return 'afterCursor'

    } else {
        return 'beforeCursor'
    }
}

export const getCharStringForNumber = (myNumber) => {
    // 10 is a, 11 is b, and so forth.
    return myNumber < 10 ? myNumber : String.fromCharCode(myNumber + 87)
}

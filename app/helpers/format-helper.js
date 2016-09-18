// Helpers for parsing text objects.

import { LYRIC_TEXT_KEYS } from './constants'

export const getFormattedTime = (time) => {
    const minutes = Math.floor(time / 60),
        seconds = Math.floor(time % 60),
        zeroTen = seconds < 10 ? '0' : ''

    return `${minutes}:${zeroTen}${seconds}`
}

// Parses text in anchor tag into annotation header.
export const getFormattedAnnotationTitle = (anchor, properNoun) => {
    /**
     * Get annotation title from anchor text. Convert from object if
     * necessary, and also uncapitalise if not a proper noun.
     */
    let title = anchor

    // Convert from object if necessary.
    if (typeof title === 'object') {
        title = _getStringFromObject(title)
    }

    title = _getDeletedSpecialCharactersText(title)
    title = _getDeletedWrappingCharactersText(title)

    // Uncapitalise if not a proper noun.
    if (!properNoun) {
        if (!_beginsWithPronounI(title)) {
            title = _getUncapitalisedText(title)
        }
    }

    return title
}

const _getStringFromObject = (text) => {

    if (Array.isArray(text)) {
        /**
         * This adds a whitespace unless the following text begins with "'s."
         * Check "Bobtail's words" in M and "surrendered for Bobtail's sake" in
         * Uncanny Valley.
         */
        return text.reduce((textString, textObject, index) => {
            const objectString = _getStringFromObject(textObject),
                whiteSpace = objectString.indexOf('\'s') === 0 ? '' : ' '

            return textString + whiteSpace + objectString
        }, '')

    } else if (typeof text === 'object') {
        return LYRIC_TEXT_KEYS.reduce((prevString, textKey) => {
            return text[textKey] ? _getStringFromObject(text[textKey]) : prevString
        }, '')

    } else {
        return text
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

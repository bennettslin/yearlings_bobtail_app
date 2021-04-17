import { hasSpecialCharacterAtIndex } from '.'
import { LYRIC_TEXT_KEYS } from '../../constants/lyrics'

const _getStringFromObject = textEntity => {

    if (Array.isArray(textEntity)) {
        /**
         * This adds a whitespace unless the following text begins with "'s."
         * Check "Bobtail's words" in M and "surrendered for Bobtail's sake" in
         * Uncanny Valley.
         */
        return textEntity.reduce((textString, textObject) => {
            const objectString = _getStringFromObject(textObject),
                whiteSpace = objectString.indexOf(`’s`) === 0 ? '' : ' '

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

const _getUncapitalisedText = text => {
    return text.charAt(0).toLowerCase() + text.slice(1)
}

const _beginsWithPronounI = text => {
    return text.indexOf(`I `) === 0 || text.indexOf(`I’`) === 0
}

const _getDeletedSpecialCharactersText = text => {
    // Eliminate all special characters at end.
    if (hasSpecialCharacterAtIndex(text, text.length - 1)) {
        text = _getDeletedSpecialCharactersText(text.slice(0, text.length - 1))

    // Also eliminate special character right before a double quote.
    } else if (text.charAt(text.length - 1) === `”` &&
               hasSpecialCharacterAtIndex(text, text.length - 2)) {
        text = _getDeletedSpecialCharactersText(text.slice(0, text.length - 2) + text.slice(text.length - 1))
    }

    return text
}

const _getDeletedWrappingCharactersText = text => {
    const lastCharacter = text[text.length - 1]

    // If ends in ellipsis, delete ellipsis.
    if (lastCharacter === '…') {
        text = text.replace('…', '')
    }

    // If ends in em-dash...
    if (lastCharacter === '—') {
        // If there is another, convert first to comma and delete second.
        if (text.indexOf('—') !== text.length - 1) {
            // e.g. 'heroes— ourauras left—'
            text = text.replace('—', ',').replace('—', '')
        } else {
            text = text.replace('—', '')
        }
    }

    // Delete both double quotes if entire text is wrapped between them.
    if (text[0] === `“` && lastCharacter === `”`) {
        // e.g. '"tetherboy"'
        text = text.slice(1, -1)

    // Delete if there's only a leading double quote.
    } else if (text[0] === `“` && text.indexOf(`”`) === -1) {
        text = text.replace(`“`, '')

    // Delete if there's only a trailing double quote.
    } else if (lastCharacter === `”` && text.indexOf(`“`) === -1) {
        text = text.replace(`”`, '')
    }

    return text
}

// Parses text in anchor tag into annotation header.
export const getFormattedAnnotationTitle = ({
    anchor,
    properNoun,
    keepEndCharacter,

}) => {
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
    return title.replace(/\u201C/g, `‘`).replace(/\u201D/g, `’`).trim()
}

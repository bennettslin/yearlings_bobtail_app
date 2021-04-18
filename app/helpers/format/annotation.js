import { hasSpecialCharacterAtIndex } from '.'
import { LYRIC_TEXT_KEYS } from '../../constants/lyrics'

const _getStringText = textEntity => {

    if (Array.isArray(textEntity)) {
        /**
         * This adds a whitespace unless the following text begins with "'s."
         * Check "Bobtail's words" in M and "surrendered for Bobtail's sake" in
         * Uncanny Valley.
         */
        return textEntity.reduce((textString, textObject) => {
            const
                objectString = _getStringText(textObject),
                whiteSpace = objectString.indexOf(`’s`) === 0 ? '' : ' '

            return textString + whiteSpace + objectString
        }, '')

    } else if (typeof textEntity === 'object') {
        return LYRIC_TEXT_KEYS.reduce((prevString, textKey) => {
            return textEntity[textKey] ?
                _getStringText(textEntity[textKey]) :
                prevString
        }, '')

    } else {
        return textEntity
    }
}

const _getDeletedSpecialCharactersText = text => {
    // Eliminate all special characters at end.
    const lastCharacter = text.charAt(text.length - 1)

    if (hasSpecialCharacterAtIndex(text, text.length - 1)) {
        if (
            // Don't remove exclamation if there are two, e.g. 'O Catherine!'
            !(
                lastCharacter === '!' &&
                text.indexOf('!') !== text.length - 1
            )
        ) {
            text = _getDeletedSpecialCharactersText(
                text.slice(0, text.length - 1),
            )
        }

    // Also eliminate special character right before a double quote.
    } else if (
        lastCharacter === `”` &&
        hasSpecialCharacterAtIndex(text, text.length - 2)
    ) {
        text = _getDeletedSpecialCharactersText(text.slice(0, text.length - 2) + text.slice(text.length - 1))
    }

    return text
}

const _getDeletedWrappingCharactersText = text => {
    const
        firstCharacter = text[0],
        lastCharacter = text[text.length - 1]

    // If ends in ellipsis, delete ellipsis.
    if (firstCharacter === '…' || lastCharacter === '…') {
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
    if (firstCharacter === `“` && lastCharacter === `”`) {
        // e.g. '"tetherboy"'
        text = text.slice(1, -1)

    // Delete if there's only a leading double quote.
    } else if (firstCharacter === `“` && text.indexOf(`”`) === -1) {
        text = text.replace(`“`, '')

    // Delete if there's only a trailing double quote.
    } else if (lastCharacter === `”` && text.indexOf(`“`) === -1) {
        text = text.replace(`”`, '')
    }

    return text
}

const _getUncapitalisedText = (text, properNoun) => (
    (
        // Uncapitalise only if not a proper noun or the pronoun I.
        properNoun ||
        text.indexOf(`I `) === 0 ||
        text.indexOf(`I’`) === 0
    ) ?
        text :
        text.charAt(0).toLowerCase() + text.slice(1)
)

export const _getSingleQuotedFromDoubleQuotedText = text => (
    text.replace(/\u201C/g, `‘`).replace(/\u201D/g, `’`).trim()
)

// Parses text in anchor tag into annotation header.
export const getFormattedAnnotationTitle = ({
    anchor,
    properNoun,

}) => {
    let title = _getStringText(anchor)

    title = _getDeletedSpecialCharactersText(title)
    title = _getDeletedWrappingCharactersText(title)
    title = _getUncapitalisedText(title, properNoun)
    title = _getSingleQuotedFromDoubleQuotedText(title)

    return title
}

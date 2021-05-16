import { hasSpecialCharacterAtIndex } from '../../../app/helpers/format'
import { isString } from '../../../app/helpers/general'

const QUOTES_CONFIGS = [
    {
        straightQuote: `'`,
        openingSmartQuote: `‘`,
        closingSmartQuote: `’`,
    },
    {
        straightQuote: `"`,
        openingSmartQuote: `“`,
        closingSmartQuote: `”`,
    },
]

const _getAllIndicesOfCharacter = (string, character) => {
    const indicesOfCharacter = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            indicesOfCharacter.push(i)
        }
    }
    return indicesOfCharacter
}

const _replaceCharacterAtIndex = (string, index, character) => (
    string.substring(0, index) + character + string.substring(index + 1)
)

const _replaceStraightWithSmartQuotes = text => {

    QUOTES_CONFIGS.forEach(({
        straightQuote,
        openingSmartQuote,
        closingSmartQuote,
    }) => {
        const indicesOfCharacter =
            _getAllIndicesOfCharacter(text, straightQuote)

        indicesOfCharacter.forEach(indexOfCharacter => {
            const newCharacter = (
                (
                    // It's an opening quote if it's the first character.
                    indexOfCharacter === 0 &&
                    /**
                     * But the second character isn't an "s." This is just
                     * because of "Bobtail's" in Kyon.
                     */
                    text[indexOfCharacter + 1] !== 's'
                ) ||

                // Or if it's preceded by a space...
                text[indexOfCharacter - 1] === ' ' ||

                // ... or an opening parenthesis.
                text[indexOfCharacter - 1] === '('
            ) ? openingSmartQuote : closingSmartQuote

            text = _replaceCharacterAtIndex(text, indexOfCharacter, newCharacter)
        })
    })

    return text
}

const _getIsLocationPath = key => (
    // Don't format anything that is part of a url path.
    key === 'href' ||
    key === 'wiki'
)

const _recurseForSmartQuoteFormat = textEntity => {
    if (isString(textEntity)) {
        return _replaceStraightWithSmartQuotes(textEntity)

    // Array is an object.
    } else if (Array.isArray(textEntity)) {
        return textEntity.map(text => (
            _recurseForSmartQuoteFormat(text)
        ))

    // Null is also an object.
    } else if (textEntity && typeof textEntity === 'object') {
        const newEntity = {}

        for (const key in textEntity) {
            newEntity[key] = _getIsLocationPath(key) ?
                textEntity[key] :
                _recurseForSmartQuoteFormat(textEntity[key])
            if (key === 'anchor') {
                if (isString(textEntity.anchor) && hasSpecialCharacterAtIndex(textEntity.anchor, textEntity.anchor.length - 1)) {
                    console.error(textEntity.anchor)
                }
            }
        }

        return newEntity

    } else {
        return textEntity
    }
}

export const getSmartQuotedObjectForKeys = ({
    object,
    keys,

}) => (
    keys.reduce((entity, key) => {
        // This mutates the object.
        entity[key] = _recurseForSmartQuoteFormat(entity[key])

        return entity
    }, object)
)

export const getSmartQuotedObjectsForKeys = ({
    objects,
    keys,

}) => (
    objects.map(object => (
        getSmartQuotedObjectForKeys({
            object,
            keys,
        })
    ))
)

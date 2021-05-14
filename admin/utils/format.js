import { isString } from '../../app/helpers/general'

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

const _formatString = text => (
    // TODO: Replace straight with smart quotes.
    _replaceStraightWithSmartQuotes(text)
)

const _getIsUrl = key => (
    // Don't format anything that is part of a url path.
    key === 'href' ||
    key === 'wiki'
)

const _recurseForFormat = textEntity => {
    if (isString(textEntity)) {
        return _formatString(textEntity)

    // Array is an object.
    } else if (Array.isArray(textEntity)) {
        return textEntity.map(text => (
            _recurseForFormat(text)
        ))

    // Null is also an object.
    } else if (textEntity && typeof textEntity === 'object') {
        const newEntity = {}

        for (const key in textEntity) {
            newEntity[key] = _getIsUrl(key) ?
                textEntity[key] :
                _recurseForFormat(textEntity[key])
        }

        return newEntity

    } else {
        return textEntity
    }
}

export const formatKeysOfObjects = ({
    objects,
    keys,

}) => {
    const
        objectsArray = Array.isArray(objects) ? objects : [objects],
        formattedObjects = objectsArray.map(objectEntity => (
            keys.reduce((entity, key) => {
            // This mutates the object.
                entity[key] = _recurseForFormat(entity[key])

                return entity
            }, objectEntity)
        ))

    return Array.isArray(objects) ? formattedObjects : formattedObjects[0]
}

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
                     * And the second character isn't an "s." This is just
                     * because of "Bobtail's" in Kyon.
                     */
                    text[indexOfCharacter + 1] !== 's' &&

                    // And the second character also isn't a colon.
                    text[indexOfCharacter + 1] !== ':' &&

                    // And the second character also isn't a space.
                    text[indexOfCharacter + 1] !== ' '
                ) || (
                    // Or it's not the first character...
                    indexOfCharacter &&

                    // And it's preceded by a space...
                    text[indexOfCharacter - 1] === ' '
                ) ||

                // Or it's the only character. "Monday's Child," among others.
                text.length === 1 ||

                // ... or it's preceded by an opening parenthesis.
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
            // See which anchors still have double quotes.
            // if (key === 'anchor') {
            //     if (
            //         isString(textEntity.anchor) &&
            //         textEntity.anchor.includes('"')
            //     ) {
            //         console.error(textEntity.anchor)
            //     }
            // }

            newEntity[key] = _getIsLocationPath(key) ?
                textEntity[key] :
                _recurseForSmartQuoteFormat(textEntity[key])
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

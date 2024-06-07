import { isString } from '../../../../src/helpers/general'
import { getUnbrokenEmDashText } from '../emDash'

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
        if (typeof text !== 'string') {
            return text
        }

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

                    // And the second character also isn't a colon or em-dash.
                    text[indexOfCharacter + 1] !== ':' &&
                    text[indexOfCharacter + 1] !== '—' &&

                    // And it isn't a parenthesis, in the onesheet.
                    text[indexOfCharacter + 1] !== ')' &&

                    // And the second character also isn't a space.
                    text[indexOfCharacter + 1] !== ' '

                ) || (
                    // Or it's not the first character…
                    indexOfCharacter && (

                        // And it's preceded by a space…
                        text[indexOfCharacter - 1] === ' ' ||

                        // Or a newline.
                        text[indexOfCharacter - 1] === '\n'
                    )
                ) ||

                // Or it's the only character. "Monday's Child," among others.
                text.length === 1 ||

                // Or it's preceded by a double quote. Just "'Rejoice!'…"
                text[indexOfCharacter - 1] === '"' ||

                // … or by an opening parenthesis…
                text[indexOfCharacter - 1] === '(' ||

                // … or by a bracket. (Only here for consistency.)
                text[indexOfCharacter - 1] === '['

            ) && !(
                // And it isn't a contracted decade.
                !isNaN(text[indexOfCharacter + 1]) &&
                text[indexOfCharacter + 2] === '0' &&
                text[indexOfCharacter + 3] === 's'

            ) ? openingSmartQuote : closingSmartQuote

            text = _replaceCharacterAtIndex(text, indexOfCharacter, newCharacter)
        })
    })

    /**
     * Running this util here for convenience. But this really isn't the
     * best place for it.
     */
    return getUnbrokenEmDashText(text)
}

const _getIsLocationPath = key => (
    // Don't format anything that is part of a url path.
    key === 'link' ||
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

export const getSmartQuotedEntity = entity => (
    _recurseForSmartQuoteFormat(entity)
)

export const getSmartQuotedObjectForKeys = ({
    object,
    keys,

}) => (
    keys
        .reduce((entity, key) => {
            // This mutates the object.
            const entry = _recurseForSmartQuoteFormat(entity[key])
            if (entry) {
                entity[key] = entry
            }
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

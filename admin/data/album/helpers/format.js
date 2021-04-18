import albumLyrics from '../lyrics'
import { isString } from '../../../../app/helpers/general'

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

const _replaceStraightWithSmartQuotes = lyric => {

    QUOTES_CONFIGS.forEach(({
        straightQuote,
        openingSmartQuote,
        closingSmartQuote,
    }) => {
        const indicesOfCharacter =
            _getAllIndicesOfCharacter(lyric, straightQuote)

        indicesOfCharacter.forEach(indexOfCharacter => {
            const newCharacter = (
                (
                    // It's an opening quote if it's the first character.
                    indexOfCharacter === 0 &&
                    /**
                     * But the second character isn't an "s." This is just
                     * because of "Bobtail's" in Kyon.
                     */
                    lyric[indexOfCharacter + 1] !== 's'
                ) ||

                // Or else if it's preceded by a space.
                lyric[indexOfCharacter - 1] === ' '
            ) ? openingSmartQuote : closingSmartQuote

            lyric = _replaceCharacterAtIndex(lyric, indexOfCharacter, newCharacter)
        })
    })

    return lyric
}

const _formatLyricString = lyric => (
    // TODO: Replace straight with smart quotes.
    _replaceStraightWithSmartQuotes(lyric)
)

export const _recurseForFormat = lyricEntity => {
    if (isString(lyricEntity)) {
        return _formatLyricString(lyricEntity)

    // Array is an object.
    } else if (Array.isArray(lyricEntity)) {
        return lyricEntity.map(lyric => (
            _recurseForFormat(lyric)
        ))

    // Null is also an object.
    } else if (lyricEntity && typeof lyricEntity === 'object') {
        const newEntity = {}

        for (const key in lyricEntity) {
            // TODO: Be smarter about only formatting certain strings?
            newEntity[key] = key === 'wiki' ?
                lyricEntity[key] :
                _recurseForFormat(lyricEntity[key])
        }

        return newEntity

    } else {
        return lyricEntity
    }
}

// TODO: Include overview, album title, song titles.
export const formatLyricMetadata = songIndex => {
    const {
        title,
        overview,
        lyricUnits,
    } = albumLyrics[songIndex]

    albumLyrics[songIndex].title = _recurseForFormat(title)
    albumLyrics[songIndex].overview = _recurseForFormat(overview)
    albumLyrics[songIndex].lyricUnits = _recurseForFormat(lyricUnits)
}

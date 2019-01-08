import {
    LYRIC,
    ANCHOR,
    WORMHOLE_SEARCH_KEYS,
    IS_VERSE_BEGINNING_SPAN,
    IS_VERSE_ENDING_SPAN
} from 'constants/lyrics'

const _addWormholeFormat = (verseEntity, verseObjectKey) => {

    if (typeof verseEntity === 'object') {
        verseEntity[verseObjectKey] = true
        return verseEntity

    } else {
        return {
            [LYRIC]: verseEntity,
            [verseObjectKey]: true
        }
    }
}

const _registerWormholeFormats = (verseEntity) => {
    /**
     * Helper method to register first and last verse objects, after time key
     * has been found.
     */
    if (Array.isArray(verseEntity)) {
        const endIndex = verseEntity.length - 1

        verseEntity[0] = _addWormholeFormat(
            verseEntity[0],
            IS_VERSE_BEGINNING_SPAN
        )
        verseEntity[endIndex] = _addWormholeFormat(
            verseEntity[endIndex],
            IS_VERSE_ENDING_SPAN
        )

    } else if (typeof verseEntity === 'object') {
        if (typeof verseEntity[ANCHOR] === 'string') {
            verseEntity = _addWormholeFormat(
                verseEntity,
                IS_VERSE_BEGINNING_SPAN
            )
            verseEntity = _addWormholeFormat(
                verseEntity,
                IS_VERSE_ENDING_SPAN
            )
        }
    }
}

export const addDestinationWormholeFormats = (
    verseEntity,
    verseHasWormhole = false
) => {
    /**
     * Let verses with wormholes know their first and last objects, which are
     * formatted differently in the wormhole.
     */

    const { unitMap: { subVerse } = {} } = verseEntity
    if (subVerse) {
        addDestinationWormholeFormats(subVerse, verseHasWormhole)
    }

    if (Array.isArray(verseEntity)) {
        verseEntity.forEach(childEntity => {
            addDestinationWormholeFormats(childEntity, verseHasWormhole)
        })

    } else if (typeof verseEntity === 'object') {

        if (verseEntity.tempVerseHasWormhole) {

            // Keep knowing that verse has wormhole in subsequent recursions.
            verseHasWormhole = true

            // Clean up.
            delete verseEntity.tempVerseHasWormhole
        }

        // Only register verses that have a wormhole.
        if (verseHasWormhole) {

            WORMHOLE_SEARCH_KEYS.forEach(lyricKey => {

                if (typeof verseEntity[lyricKey] === 'object') {
                    console.error('isObject', verseEntity[lyricKey])
                    _registerWormholeFormats(verseEntity[lyricKey])
                }

                if (typeof verseEntity[lyricKey] === 'string') {
                    console.error('isString', verseEntity[lyricKey])

                    verseEntity[lyricKey] = _addWormholeFormat(
                        verseEntity[lyricKey],
                        IS_VERSE_BEGINNING_SPAN
                    )
                    verseEntity[lyricKey] = _addWormholeFormat(
                        verseEntity[lyricKey],
                        IS_VERSE_ENDING_SPAN
                    )
                }
            })
        }
    }
}

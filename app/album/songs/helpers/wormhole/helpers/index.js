import keys from 'lodash.keys'

import {
    LYRIC,
    ANCHOR,
    WIKI,
    WIKI_INDEX,
    WORMHOLE_SEARCH_KEYS,
    IS_VERSE_BEGINNING_SPAN,
    IS_VERSE_ENDING_SPAN
} from 'constants/lyrics'

const _registerWikiLinksForCard = ({
    annotation,
    entity
}) => {

    // Add the wiki index.
    if (!entity || typeof entity !== 'object') {
        return false

    } else if (Array.isArray(entity)) {
        return entity.reduce((keyFound, element) => {
            // Reversing order so that index gets added if needed.
            return _registerWikiLinksForCard({
                annotation,
                entity: element
            }) || keyFound
        }, false)

    } else {
        return keys(entity).reduce((keyFound, currentKey) => {
            const hasWiki = Boolean(entity[WIKI])

            if (!entity[WIKI_INDEX] && typeof entity[WIKI] === 'string') {

                // Let annotation anchor know its annotation.
                entity.wikiAnnotationIndex = annotation.annotationIndex

                if (!annotation.wikiWormholes) {
                    annotation.wikiWormholes = []
                }

                // Popup anchor index is either for wormhole or wiki.
                entity[WIKI_INDEX] = annotation.wikiWormholes.length + 1

                annotation.wikiWormholes.push(entity[WIKI])

                delete entity[WIKI]
            }

            return keyFound || hasWiki || _registerWikiLinksForCard(annotation, entity[currentKey])
        }, false)
    }
}

const _registerWormholeLinksForCard = ({
    songIndex,
    annotation,
    wormholeLinks
}) => {
    wormholeLinks.forEach(link => {

        // Access will loop through this array.
        if (!annotation.wikiWormholes) {
            annotation.wikiWormholes = []
        }

        // Wiki wormhole indices are 1-based.
        const wikiWormholeIndex = annotation.wikiWormholes.length + 1
        annotation.wikiWormholes.push(wikiWormholeIndex)

        // Allow each wormhole to know its source wormhole index.
        if (!annotation.tempSourceWormholeIndices) {
            annotation.tempSourceWormholeIndices = []
        }
        annotation.tempSourceWormholeIndices.push(wikiWormholeIndex)

        // Temporarily, also allow wormhole to know its source annotations.
        if (!link.tempSourceWormholeLinks) {
            link.tempSourceWormholeLinks = []
        }
        link.tempSourceWormholeLinks.push({
            tempSourceSongIndex: songIndex,
            tempSourceAnnotationIndex: annotation.annotationIndex,
            tempSourceWormholeIndex: wikiWormholeIndex
        })
    })
}

export const registerWikiAndWormholeLinksForCard = ({
    songIndex,
    annotation,
    card: {
        description,
        wormholeLinks
    }
}) => {
    if (description) {
        _registerWikiLinksForCard({
            annotation,
            entity: description
        })

    } else if (wormholeLinks) {
        _registerWormholeLinksForCard({
            songIndex,
            annotation,
            wormholeLinks
        })
    }
}

const _addWormholeFormat = (lyricEntity, verseObjectKey) => {

    if (typeof lyricEntity === 'object') {
        lyricEntity[verseObjectKey] = true
        return lyricEntity

    } else {
        return {
            [LYRIC]: lyricEntity,
            [verseObjectKey]: true
        }
    }
}

const _registerWormholeFormats = (lyricEntity) => {
    /**
     * Helper method to register first and last verse objects, after time key
     * has been found.
     */
    if (Array.isArray(lyricEntity)) {
        const endIndex = lyricEntity.length - 1

        lyricEntity[0] = _addWormholeFormat(
            lyricEntity[0],
            IS_VERSE_BEGINNING_SPAN
        )
        lyricEntity[endIndex] = _addWormholeFormat(
            lyricEntity[endIndex],
            IS_VERSE_ENDING_SPAN
        )

    } else if (typeof lyricEntity === 'object') {
        if (typeof lyricEntity[ANCHOR] === 'string') {
            lyricEntity = _addWormholeFormat(
                lyricEntity,
                IS_VERSE_BEGINNING_SPAN
            )
            lyricEntity = _addWormholeFormat(
                lyricEntity,
                IS_VERSE_ENDING_SPAN
            )
        }
    }
}

export const addDestinationWormholeFormats = (
    lyricEntity,
    verseHasWormhole = false
) => {
    /**
     * Let verses with wormholes know their first and last objects, which are
     * formatted differently in the wormhole.
     */

    const { unitMap: { subVerse } = {} } = lyricEntity
    if (subVerse) {
        addDestinationWormholeFormats(subVerse, verseHasWormhole)
    }

    if (Array.isArray(lyricEntity)) {
        lyricEntity.forEach(childEntity => {
            addDestinationWormholeFormats(childEntity, verseHasWormhole)
        })

    } else if (typeof lyricEntity === 'object') {

        if (lyricEntity.tempVerseHasWormhole) {

            // Keep knowing that verse has wormhole in subsequent recursions.
            verseHasWormhole = true

            // Clean up.
            delete lyricEntity.tempVerseHasWormhole
        }

        // Only register verses that have a wormhole.
        if (verseHasWormhole) {

            WORMHOLE_SEARCH_KEYS.forEach(lyricKey => {

                if (typeof lyricEntity[lyricKey] === 'object') {
                    _registerWormholeFormats(lyricEntity[lyricKey])
                }

                if (typeof lyricEntity[lyricKey] === 'string') {
                    lyricEntity[lyricKey] = _addWormholeFormat(
                        lyricEntity[lyricKey],
                        IS_VERSE_BEGINNING_SPAN
                    )
                    lyricEntity[lyricKey] = _addWormholeFormat(
                        lyricEntity[lyricKey],
                        IS_VERSE_ENDING_SPAN
                    )
                }
            })
        }
    }
}

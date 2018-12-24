// Parse annotation data for build.

import keys from 'lodash.keys'

import { getAnnotationObject } from 'helpers/data'

import {
    WORMHOLE,
    REFERENCE
} from 'constants/dots'

import {
    LYRIC,
    ANCHOR,
    WIKI,
    ITALIC,
    WIKI_INDEX,
    WORMHOLE_SEARCH_KEYS,
    IS_VERSE_BEGINNING_SPAN,
    IS_VERSE_ENDING_SPAN
} from 'constants/lyrics'

/***********
 * INITIAL *
 ***********/

export const registerCardsDotKeys = ({
    cards,
    dotKeys

}) => {
    cards.forEach((card) => {

        _addWikiDotKeyToCard(card)

        // This needs to come after adding wiki dot key to card.
        _addCardDotKeysToAnnotation(card, dotKeys)
    })
}

export const registerCardsWormholes = ({
    album,
    song,
    verse,
    annotation,
    cards,
    dotKeys

}) => {
    cards.forEach((card, cardIndex) => {

        if (_addSourceWormholeLink({
            album,
            song,
            annotation,
            card,
            cardIndex,
            dotKeys

        })) {
            verse.tempVerseHasWormhole = true
        }
    })
}

const _addWikiDotKeyToCard = (card) => {
    const { description } = card

    if (description) {
        // This is the wiki key in the song data, *not* the dot key.
        const hasWiki = _getHasWikiAnchor(description)

        // Add wiki anchor index to each anchor with wiki.
        if (hasWiki) {
            /**
             * Cards with only wormholes or references won't initially have an
             * object of dot keys.
             */
            card.dotKeys = card.dotKeys || {}

            // If card has a wiki link, add 'reference' key to dot keys.
            card.dotKeys[REFERENCE] = true
        }
    }
}

const _getHasWikiAnchor = (descriptionEntity) => {
    if (!descriptionEntity || typeof descriptionEntity !== 'object') {
        return false

    } else if (Array.isArray(descriptionEntity)) {
        return descriptionEntity.find(childEntity => (
            _getHasWikiAnchor(childEntity)
        ))

    } else {
        return keys(descriptionEntity).find(currentKey => {
            const hasWiki = Boolean(descriptionEntity[WIKI])
            return hasWiki || _getHasWikiAnchor(descriptionEntity[currentKey])
        })
    }
}

const _addCardDotKeysToAnnotation = (card, dotKeys) => {
    // Add dot keys to both song and annotation card.
    if (card.dotKeys) {
        keys(card.dotKeys).forEach(dotKey => {
            dotKeys[dotKey] = true
        })
    }
}

const _addSourceWormholeLink = ({

    album,
    song,
    annotation,
    card,
    cardIndex = 0,
    dotKeys

}) => {
    // Add wormhole link to annotation card.
    const { wormhole } = card

    if (!wormhole) {
        return false
    }

    /**
     * Wormhole is either object or string. If it's an object, then the string
     * we want is the wormholeKey.
     */
    const wormholeKey = wormhole.wormholeKey || wormhole,
        { wormholePrefix } = wormhole,
        { songIndex } = song,

        /**
         * NOTE: I wrote this code with the assumption that every wormhole would
         * be in a timed verse, and thus have a verse index. Had there been one
         * that wasn't, such as in a side stanza, this wouldn't work for it!
         */
        {
            verseIndex,
            annotationIndex,
            columnIndex
        } = annotation,

        wormholeLink = {
            songIndex,
            annotationIndex,
            cardIndex,
            columnIndex,
            verseIndex,
            wormholePrefix
        }

    // If first wormhole link, initialise array.
    if (!album.tempWormholeLinks[wormholeKey]) {
        album.tempWormholeLinks[wormholeKey] = []
    }

    // Add wormhole link to wormhole links array.
    album.tempWormholeLinks[wormholeKey].push(wormholeLink)

    // Add wormhole to dot keys.
    dotKeys[WORMHOLE] = true

    // Clean up card unit.
    delete card.wormhole

    return true
}

/***********
 * BETWEEN *
 ***********/

export const addDestinationWormholeLinks = (album) => {
    /**
     * For each annotation with a wormhole, add an array of links to all
     * other wormholes.
     */
    for (const linkKey in album.tempWormholeLinks) {
        const links = album.tempWormholeLinks[linkKey]

        links.forEach((destinationLink, index) => {
            const {
                    songIndex,
                    annotationIndex,
                    cardIndex
                } = destinationLink,

                annotation = getAnnotationObject(songIndex, annotationIndex, album.songs),
                card = annotation.cards[cardIndex]

            card.wormholeLinks = links.filter((sourceLink, thisIndex) => {

                // Don't add link to its own wormhole.
                return index !== thisIndex
            })
        })

    }
}

/*********
 * FINAL *
 *********/

export const finalPrepareCard = (song, annotation, card) => {
    const { songIndex } = song,

        {
            description,
            wormholeLinks
        } = card

    if (description) {
        // This is the wiki key in the song data, *not* the dot key.
        _finalParseWiki(annotation, description)
    }

    if (wormholeLinks) {
        wormholeLinks.forEach(link => {
            const { tempWikiWormholeIndex } = annotation

            // Access will loop through this array.
            if (!annotation.wikiWormholes) {
                annotation.wikiWormholes = []
            }
            annotation.wikiWormholes.push(tempWikiWormholeIndex)

            // Allow each wormhole to know its source wormhole index.
            if (!annotation.tempSourceWormholeIndices) {
                annotation.tempSourceWormholeIndices = []
            }
            annotation.tempSourceWormholeIndices.push(tempWikiWormholeIndex)

            // Temporarily, also allow wormhole to know its source annotations.
            if (!link.tempSourceWormholeLinks) {
                link.tempSourceWormholeLinks = []
            }
            link.tempSourceWormholeLinks.push({
                tempSourceSongIndex: songIndex,
                tempSourceAnnotationIndex: annotation.annotationIndex,
                tempSourceWormholeIndex: tempWikiWormholeIndex
            })

            annotation.tempWikiWormholeIndex++
        })
    }
}

const _finalParseWiki = (annotation, entity) => {

    // Add the wiki index.
    if (!entity || typeof entity !== 'object') {
        return false

    } else if (Array.isArray(entity)) {
        return entity.reduce((keyFound, element) => {
            // Reversing order so that index gets added if needed.
            return _finalParseWiki(annotation, element) || keyFound
        }, false)

    } else {
        return keys(entity).reduce((keyFound, currentKey) => {
            const hasWiki = Boolean(entity[WIKI])

            if (!entity[WIKI_INDEX] && typeof entity[WIKI] === 'string') {

                // Let annotation anchor know its annotation.
                entity.wikiAnnotationIndex = annotation.annotationIndex

                // Popup anchor index is either for wormhole or wiki.
                entity[WIKI_INDEX] = annotation.tempWikiWormholeIndex
                annotation.tempWikiWormholeIndex++

                if (!annotation.wikiWormholes) {
                    annotation.wikiWormholes = []
                }
                annotation.wikiWormholes.push(entity[WIKI])

                delete entity[WIKI]
            }

            return keyFound || hasWiki || _finalParseWiki(annotation, entity[currentKey])
        }, false)
    }
}


/**
 * FIXME: This is extremely fragile, as it has to make exceptions for too many
 * special cases, like italics in sub stanzas...
 */
export const addDestinationWormholeFormats = (lyricEntity, verseHasWormhole = false) => {
    /**
     * Let verses with wormholes know their first and last objects, which are
     * formatted differently in the wormhole.
     */

    if (Array.isArray(lyricEntity)) {
        lyricEntity.forEach(childLyric => {
            addDestinationWormholeFormats(childLyric, verseHasWormhole)
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
                    lyricEntity[lyricKey] = _addWormholeFormat(lyricEntity[lyricKey], IS_VERSE_BEGINNING_SPAN)
                    lyricEntity[lyricKey] = _addWormholeFormat(lyricEntity[lyricKey], IS_VERSE_ENDING_SPAN)
                }
            })
        }

        if (lyricEntity.isUnitMap) {
            // This applies to "unsalvaged soul," "tarpid lies," and "trophy blondes."
            addDestinationWormholeFormats(lyricEntity.subCard, verseHasWormhole)
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
        lyricEntity[0] = _addWormholeFormat(lyricEntity[0], IS_VERSE_BEGINNING_SPAN)
        lyricEntity[endIndex] = _addWormholeFormat(lyricEntity[endIndex], IS_VERSE_ENDING_SPAN)

    } else if (typeof lyricEntity === 'object') {
        if (typeof lyricEntity[ANCHOR] === 'string') {
            lyricEntity = _addWormholeFormat(lyricEntity, IS_VERSE_BEGINNING_SPAN)
            lyricEntity = _addWormholeFormat(lyricEntity, IS_VERSE_ENDING_SPAN)
        }

        if (lyricEntity[ITALIC]) {
            /**
             * This applies to "unsalvaged soul," "pompous autumn," "tarpid
             * lies," and "trophy blondes."
             */
            _registerWormholeFormats(lyricEntity[ITALIC])
        }
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

export const addDestinationWormholeIndices = (album) => {
    // Now that each wormhole knows its source index, get destination indices.

    for (const linkKey in album.tempWormholeLinks) {
        const links = album.tempWormholeLinks[linkKey]

        links.forEach((destinationLink, index) => {

            const {
                    songIndex,
                    annotationIndex,
                    cardIndex
                } = destinationLink,

                annotation = getAnnotationObject(songIndex, annotationIndex, album.songs),
                card = annotation.cards[cardIndex]

            card.wormholeLinks = links.filter((sourceLink, thisIndex) => {
                /**
                 * Add destination wormhole indices. This is as complicated as
                 * it is because of the three "shiv" wormholes.
                 */
                destinationLink.tempSourceWormholeLinks.forEach((tempSourceLink) => {
                    const {
                            tempSourceSongIndex,
                            tempSourceAnnotationIndex,
                            tempSourceWormholeIndex
                        } = tempSourceLink,

                        /**
                         * This will happen only once for each source and
                         * destination pair.
                         */
                        linksMatch = sourceLink.songIndex === tempSourceSongIndex &&
                            sourceLink.annotationIndex === tempSourceAnnotationIndex

                    if (linksMatch) {
                        // Exchange knowledge of source and destination indices.
                        sourceLink.destinationWormholeIndex = tempSourceWormholeIndex
                        sourceLink.sourceWormholeIndex = annotation.tempSourceWormholeIndices.shift()
                    }
                })

                // Don't add link to its own wormhole.
                return index !== thisIndex

            }).map(sourceLink => {

                // Give card a *copy* of this link object.
                const newLink = Object.assign({}, sourceLink)

                // Clean up.
                delete newLink.cardIndex
                delete newLink.tempSourceWormholeLinks

                return newLink
            })

            // Clean up.
            delete annotation.tempSourceWormholeIndices
        })
    }

    // Clean up.
    delete album.tempWormholeLinks
}

// Parse annotation data for build.

import keys from 'lodash.keys'

import { getAnnotationObject } from 'helpers/dataHelper'

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
    DESTINATION_WORMHOLE_INDEX,
    SOURCE_WORMHOLE_INDEX,
    IS_VERSE_BEGINNING_SPAN,
    IS_VERSE_ENDING_SPAN
} from 'constants/lyrics'

/***********
 * INITIAL *
 ***********/

export const registerCards = ({

    albumObject,
    songObject,
    verseObject,
    annotationObject,
    cards,
    annotationDotKeys

}) => {

    // For admin purposes, add to count of annotations with plural cards.
    if (cards.length > 1) {
        songObject.adminPluralCardsCount++
    }

    cards.forEach((cardObject, cardIndex) => {

        _initialPrepareCard(cardObject, annotationDotKeys)
        _addAllDotKeysToAnnotation(cardObject, annotationDotKeys)

        if (_addSourceWormholeLink({

            albumObject,
            songObject,
            annotationObject,
            cardObject,
            cardIndex,
            dotKeys: annotationDotKeys

        })) {
            verseObject.tempVerseHasWormhole = true
        }
    })
}

const _initialPrepareCard = (cardObject, dotKeys) => {
    const { description } = cardObject

    if (description) {
        // This is the wiki key in the song data, *not* the dot key.
        const hasWiki = _getHasWiki(description)

        // Add wiki anchor index to each anchor with wiki.
        if (hasWiki) {
            /**
             * Cards with only wormholes or references wont initially have an
             * object of dot keys.
             */
            cardObject.dotKeys = cardObject.dotKeys || {}

            // If card has a wiki link, add 'reference' key to dot keys.
            cardObject.dotKeys[REFERENCE] = true
            dotKeys[REFERENCE] = true
        }
    }
}

const _getHasWiki = (descriptionEntity) => {

    if (!descriptionEntity || typeof descriptionEntity !== 'object') {
        return false

    } else if (Array.isArray(descriptionEntity)) {
        return descriptionEntity.reduce((keyFound, childEntity) => {
            return keyFound || _getHasWiki(childEntity)
        }, false)

    } else {
        return keys(descriptionEntity).reduce((keyFound, currentKey) => {
            const hasWiki = Boolean(descriptionEntity[WIKI])

            return keyFound || hasWiki || _getHasWiki(descriptionEntity[currentKey])
        }, false)
    }
}

const _addAllDotKeysToAnnotation = (cardObject, annotationDotKeys) => {
    // Add dot keys to both song and annotation card.
    if (cardObject.dotKeys) {
        keys(cardObject.dotKeys).forEach(dotKey => {
            annotationDotKeys[dotKey] = true
        })
    }
}

const _addSourceWormholeLink = ({

    albumObject,
    songObject,
    annotationObject,
    cardObject,
    cardIndex = 0,
    dotKeys

}) => {
    // Add wormhole link to annotation card.
    const { wormhole } = cardObject

    if (!wormhole) {
        return false
    }

    /**
     * Wormhole is either object or string. If it's an object, then the string
     * we want is the wormholeKey.
     */
    const wormholeKey = wormhole.wormholeKey || wormhole,
        { wormholePrefix } = wormhole,
        { tempSongIndex } = songObject,

        /**
         * NOTE: I wrote this code with the assumption that every wormhole would
         * be in a timed verse, and thus have a verse index. Had there been one
         * that wasn't, such as in a side stanza, this wouldn't work for it!
         */
        { verseIndex,
            annotationIndex,
            columnIndex } = annotationObject,

        wormholeLink = {
            songIndex: tempSongIndex,
            annotationIndex,
            cardIndex,
            columnIndex,
            verseIndex,
            wormholePrefix
        }

    // If first wormhole link, initialise array.
    if (!albumObject.tempWormholeLinks[wormholeKey]) {
        albumObject.tempWormholeLinks[wormholeKey] = []
    }

    // Add wormhole link to wormhole links array.
    albumObject.tempWormholeLinks[wormholeKey].push(wormholeLink)

    // Add wormhole to dot keys.
    dotKeys[WORMHOLE] = true

    // Clean up card unit.
    delete cardObject.wormhole

    return true
}

/***********
 * BETWEEN *
 ***********/

export const addDestinationWormholeLinks = (albumObject) => {
    /**
     * For each annotation with a wormhole, add an array of links to all
     * other wormholes.
     */
    for (const linkKey in albumObject.tempWormholeLinks) {
        const links = albumObject.tempWormholeLinks[linkKey]

        links.forEach((destinationLink, index) => {
            const { songIndex,
                annotationIndex,
                cardIndex } = destinationLink,

                annotationObject = getAnnotationObject(songIndex, annotationIndex, albumObject.songs),
                cardObject = annotationObject.cards[cardIndex]

            cardObject.wormholeLinks = links.filter((sourceLink, thisIndex) => {

                // Don't add link to its own wormhole.
                return index !== thisIndex
            })
        })

    }
}

/*********
 * FINAL *
 *********/

export const finalPrepareCard = (songObject, annotationObject, cardObject) => {
    const { tempSongIndex } = songObject,

        { description,
            wormholeLinks } = cardObject

    if (description) {
        // This is the wiki key in the song data, *not* the dot key.
        _finalParseWiki(annotationObject, description)
    }

    if (wormholeLinks) {
        wormholeLinks.forEach(link => {
            const { tempAnnotationAnchorIndex } = annotationObject

            // Access will loop through this array.
            if (!annotationObject.annotationAnchors) {
                annotationObject.annotationAnchors = []
            }
            annotationObject.annotationAnchors.push(tempAnnotationAnchorIndex)

            // Allow each wormhole to know its source wormhole index.
            if (!annotationObject.tempSourceWormholeIndices) {
                annotationObject.tempSourceWormholeIndices = []
            }
            annotationObject.tempSourceWormholeIndices.push(tempAnnotationAnchorIndex)

            // Temporarily, also allow wormhole to know its source annotations.
            if (!link.tempSourceWormholeLinks) {
                link.tempSourceWormholeLinks = []
            }
            link.tempSourceWormholeLinks.push({
                tempSourceSongIndex: tempSongIndex,
                tempSourceAnnotationIndex: annotationObject.annotationIndex,
                tempSourceWormholeIndex: tempAnnotationAnchorIndex
            })

            annotationObject.tempAnnotationAnchorIndex++
        })
    }
}

const _finalParseWiki = (annotationObject, entity) => {

    // Add the wiki index.
    if (!entity || typeof entity !== 'object') {
        return false

    } else if (Array.isArray(entity)) {
        return entity.reduce((keyFound, element) => {
            // Reversing order so that index gets added if needed.
            return _finalParseWiki(annotationObject, element) || keyFound
        }, false)

    } else {
        return keys(entity).reduce((keyFound, currentKey) => {
            const hasWiki = Boolean(entity[WIKI])

            if (!entity[WIKI_INDEX] && typeof entity[WIKI] === 'string') {

                // Let annotation anchor know its annotation.
                entity.wikiAnnotationIndex = annotationObject.annotationIndex

                // Popup anchor index is either for wormhole or wiki.
                entity[WIKI_INDEX] = annotationObject.tempAnnotationAnchorIndex
                annotationObject.tempAnnotationAnchorIndex++

                if (!annotationObject.annotationAnchors) {
                    annotationObject.annotationAnchors = []
                }
                annotationObject.annotationAnchors.push(entity[WIKI])

                delete entity[WIKI]
            }

            return keyFound || hasWiki || _finalParseWiki(annotationObject, entity[currentKey])
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

export const addDestinationWormholeIndices = (albumObject) => {
    // Now that each wormhole knows its source index, get destination indices.

    for (const linkKey in albumObject.tempWormholeLinks) {
        const links = albumObject.tempWormholeLinks[linkKey]

        links.forEach((destinationLink, index) => {

            const { songIndex,
                annotationIndex,
                cardIndex } = destinationLink,

                annotationObject = getAnnotationObject(songIndex, annotationIndex, albumObject.songs),
                cardObject = annotationObject.cards[cardIndex]

            cardObject.wormholeLinks = links.filter((sourceLink, thisIndex) => {

                /**
                 * Add destination wormhole indices. This is as complicated as it
                 * is because of the three "shiv" wormholes.
                 */
                destinationLink.tempSourceWormholeLinks.forEach((tempSourceLink) => {
                    const { tempSourceSongIndex,
                        tempSourceAnnotationIndex,
                        tempSourceWormholeIndex } = tempSourceLink,

                        /**
                         * This will happen only once for each source and
                         * destination pair.
                         */
                        linksMatch = sourceLink.songIndex === tempSourceSongIndex &&
                            sourceLink.annotationIndex === tempSourceAnnotationIndex

                    if (linksMatch) {
                        // Exchange knowledge of source and destination indices.
                        sourceLink[DESTINATION_WORMHOLE_INDEX] = tempSourceWormholeIndex
                        sourceLink[SOURCE_WORMHOLE_INDEX] = annotationObject.tempSourceWormholeIndices.shift()
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
            delete annotationObject.tempSourceWormholeIndices
        })
    }

    // Clean up.
    delete albumObject.tempWormholeLinks
}

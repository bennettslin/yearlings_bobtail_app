// Parse annotation data for build.

import { LYRIC, ANCHOR, WIKI, ITALIC, WIKI_INDEX, PORTAL_SEARCH_KEYS, DESTINATION_PORTAL_INDEX, SOURCE_PORTAL_INDEX, IS_VERSE_BEGINNING_SPAN, IS_VERSE_ENDING_SPAN } from '../../constants/lyrics'
import { PORTAL, REFERENCE } from '../../constants/dots'
import { getAnnotationObject } from '../dataHelper'

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

        if (_addSourcePortalLink({

            albumObject,
            songObject,
            annotationObject,
            cardObject,
            cardIndex,
            dotKeys: annotationDotKeys

        })) {
            verseObject.tempVerseHasPortal = true
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
             * Cards with only portals or references wont initially have an
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
        return Object.keys(descriptionEntity).reduce((keyFound, currentKey) => {
            const hasWiki = !!descriptionEntity[WIKI]

            return keyFound || hasWiki || _getHasWiki(descriptionEntity[currentKey])
        }, false)
    }
}

const _addAllDotKeysToAnnotation = (cardObject, annotationDotKeys) => {
    // Add dot keys to both song and annotation card.
    if (cardObject.dotKeys) {
        Object.keys(cardObject.dotKeys).forEach(dotKey => {
            annotationDotKeys[dotKey] = true
        })
    }
}

const _addSourcePortalLink = ({

    albumObject,
    songObject,
    annotationObject,
    cardObject,
    cardIndex = 0,
    dotKeys

}) => {
    // Add portal link to annotation card.
    const { portal } = cardObject

    if (!portal) {
        return false
    }

    /**
     * Portal is either object or string. If it's an object, then the string
     * we want is the portalKey.
     */
    const portalKey = portal.portalKey || portal,
        { portalPrefix } = portal,
        { tempSongIndex } = songObject,

        /**
         * NOTE: I wrote this code with the assumption that every portal would
         * be in a timed verse, and thus have a verse index. Had there been one
         * that wasn't, such as in a side stanza, this wouldn't work for it!
         */
        { verseIndex,
          annotationIndex,
          columnIndex } = annotationObject,

        portalLink = {
            songIndex: tempSongIndex,
            annotationIndex,
            cardIndex,
            columnIndex,
            verseIndex,
            portalPrefix
        }

    // If first portal link, initialise array.
    if (!albumObject.tempPortalLinks[portalKey]) {
        albumObject.tempPortalLinks[portalKey] = []
    }

    // Add portal link to portal links array.
    albumObject.tempPortalLinks[portalKey].push(portalLink)

    // Add portal to dot keys.
    dotKeys[PORTAL] = true

    // Clean up card unit.
    delete cardObject.portal

    return true
}

/***********
 * BETWEEN *
 ***********/

export const addDestinationPortalLinks = (albumObject) => {
    /**
     * For each annotation with a portal, add an array of links to all
     * other portals.
     */
    for (const linkKey in albumObject.tempPortalLinks) {
        const links = albumObject.tempPortalLinks[linkKey]

        links.forEach((destinationLink, index) => {
            const { songIndex,
                    annotationIndex,
                    cardIndex } = destinationLink,

            annotationObject = getAnnotationObject(songIndex, annotationIndex, albumObject.songs),
            cardObject = annotationObject.cards[cardIndex]

            cardObject.portalLinks = links.filter((sourceLink, thisIndex) => {

                // Don't add link to its own portal.
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
          portalLinks } = cardObject

    if (description) {
        // This is the wiki key in the song data, *not* the dot key.
        _finalParseWiki(annotationObject, description)
    }

    if (portalLinks) {
        portalLinks.forEach(link => {
            const { tempAnnotationAnchorIndex } = annotationObject

            // Access will loop through this array.
            if (!annotationObject.annotationAnchors) {
                annotationObject.annotationAnchors = []
            }
            annotationObject.annotationAnchors.push(tempAnnotationAnchorIndex)

            // Allow each portal to know its source portal index.
            if (!annotationObject.tempSourcePortalIndices) {
                annotationObject.tempSourcePortalIndices = []
            }
            annotationObject.tempSourcePortalIndices.push(tempAnnotationAnchorIndex)

            // Temporarily, also allow portal to know its source annotations.
            if (!link.tempSourcePortalLinks) {
                link.tempSourcePortalLinks = []
            }
            link.tempSourcePortalLinks.push({
                tempSourceSongIndex: tempSongIndex,
                tempSourceAnnotationIndex: annotationObject.annotationIndex,
                tempSourcePortalIndex: tempAnnotationAnchorIndex
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
        return Object.keys(entity).reduce((keyFound, currentKey) => {
            const hasWiki = !!entity[WIKI]

            if (!entity[WIKI_INDEX] && typeof entity[WIKI] === 'string') {

                // Popup anchor index is either for portal or wiki.
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
export const addDestinationPortalFormats = (lyricEntity, verseHasPortal = false) => {
    /**
     * Let verses with portals know their first and last objects, which are
     * formatted differently in the portal.
     */

    if (Array.isArray(lyricEntity)) {
        lyricEntity.forEach(childLyric => {
            addDestinationPortalFormats(childLyric, verseHasPortal)
        })

    } else if (typeof lyricEntity === 'object') {

        if (lyricEntity.tempVerseHasPortal) {

            // Keep knowing that verse has portal in subsequent recursions.
            verseHasPortal = true

            // Clean up.
            delete lyricEntity.tempVerseHasPortal
        }

        // Only register verses that have a portal.
        if (verseHasPortal) {

            PORTAL_SEARCH_KEYS.forEach(lyricKey => {

                if (typeof lyricEntity[lyricKey] === 'object') {
                    _registerPortalFormats(lyricEntity[lyricKey])
                }

                if (typeof lyricEntity[lyricKey] === 'string') {
                    lyricEntity[lyricKey] = _addPortalFormat(lyricEntity[lyricKey], IS_VERSE_BEGINNING_SPAN)
                    lyricEntity[lyricKey] = _addPortalFormat(lyricEntity[lyricKey], IS_VERSE_ENDING_SPAN)
                }
            })
        }

        if (lyricEntity.unitMap) {
            // This applies to "unsalvaged soul," "tarpid lies," and "trophy blondes."
            addDestinationPortalFormats(lyricEntity.substanza, verseHasPortal)
        }
    }
}

const _registerPortalFormats = (lyricEntity) => {
    /**
     * Helper method to register first and last verse objects, after time key
     * has been found.
     */
    if (Array.isArray(lyricEntity)) {
        const endIndex = lyricEntity.length - 1
        lyricEntity[0] = _addPortalFormat(lyricEntity[0], IS_VERSE_BEGINNING_SPAN)
        lyricEntity[endIndex] = _addPortalFormat(lyricEntity[endIndex], IS_VERSE_ENDING_SPAN)

    } else if (typeof lyricEntity === 'object') {
        if (typeof lyricEntity[ANCHOR] === 'string') {
            lyricEntity = _addPortalFormat(lyricEntity, IS_VERSE_BEGINNING_SPAN)
            lyricEntity = _addPortalFormat(lyricEntity, IS_VERSE_ENDING_SPAN)
        }

        if (lyricEntity[ITALIC]) {
            /**
             * This applies to "unsalvaged soul," "pompous autumn," "tarpid
             * lies," and "trophy blondes."
             */
            _registerPortalFormats(lyricEntity[ITALIC])
        }
    }
}

const _addPortalFormat = (lyricEntity, verseObjectKey) => {

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

export const addDestinationPortalIndices = (albumObject) => {
    // Now that each portal knows its source index, get destination indices.

    for (const linkKey in albumObject.tempPortalLinks) {
        const links = albumObject.tempPortalLinks[linkKey]

        links.forEach((destinationLink, index) => {

            const { songIndex,
                    annotationIndex,
                    cardIndex } = destinationLink,

            annotationObject = getAnnotationObject(songIndex, annotationIndex, albumObject.songs),
            cardObject = annotationObject.cards[cardIndex]

            cardObject.portalLinks = links.filter((sourceLink, thisIndex) => {

                /**
                 * Add destination portal indices. This is as complicated as it
                 * is because of the three "shiv" portals.
                 */
                destinationLink.tempSourcePortalLinks.forEach((tempSourceLink) => {
                    const { tempSourceSongIndex,
                            tempSourceAnnotationIndex,
                            tempSourcePortalIndex } = tempSourceLink,

                        /**
                         * This will happen only once for each source and
                         * destination pair.
                         */
                        linksMatch = sourceLink.songIndex === tempSourceSongIndex &&
                                     sourceLink.annotationIndex === tempSourceAnnotationIndex

                    if (linksMatch) {
                        // Exchange knowledge of source and destination indices.
                        sourceLink[DESTINATION_PORTAL_INDEX] = tempSourcePortalIndex
                        sourceLink[SOURCE_PORTAL_INDEX] = annotationObject.tempSourcePortalIndices.shift()
                    }
                })

                // Don't add link to its own portal.
                return index !== thisIndex

            }).map(sourceLink => {

                // Give card a *copy* of this link object.
                const newLink = Object.assign({}, sourceLink)

                // Clean up.
                delete newLink.cardIndex
                delete newLink.tempSourcePortalLinks

                return newLink
            })

            // Clean up.
            delete annotationObject.tempSourcePortalIndices
        })
    }

    // Clean up.
    delete albumObject.tempPortalLinks
}

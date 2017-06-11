import { LYRIC, LEFT, RIGHT, CENTRE, ANCHOR, WIKI, ITALIC, WIKI_INDEX, PORTAL_INDEX, IS_VERSE_BEGINNING_SPAN, IS_VERSE_ENDING_SPAN } from '../../constants/lyrics'
import { PORTAL, REFERENCE } from '../../constants/dots'
import { getSongTitle, getAnnotationObject, getVerseObject } from '../data-helper'

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
            // if (verseObject.subStanza && verseObject.subStanza.lyric) {
            //     verseObject.subStanza.lyric.verseHasPortal = true
            //
            // } else {
            // }

            verseObject.verseHasPortal = true

            // if (!verseObject.time) {
            //     console.error('here');
            //     console.error('JSON.stringify(verseObject, null, 2)', JSON.stringify(verseObject, null, 2));
            // }

            if (!window.verseHasPortalCount) {
                window.verseHasPortalCount = 1
            } else {
                window.verseHasPortalCount++
            }
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

    // Portal is either object or string.
    const { portalKey,
            portalPrefix } = portal,

        { songs } = albumObject,
        { tempSongIndex } = songObject,

        { verseIndex,
          annotationIndex,
          columnIndex } = annotationObject,

        portalLink = {
            songIndex: tempSongIndex,
            annotationIndex,
            cardIndex,
            verseIndex,
            columnIndex,
            portalPrefix
        }

    // Add data about portal.
    portalLink.songTitle = getSongTitle({
        songIndex: tempSongIndex,
        songs
    })

    portalLink.verseObject = getVerseObject(tempSongIndex, verseIndex, songs)

    // If first portal link, initialise array.
    if (!albumObject.tempPortalLinks[portalKey || portal]) {
        albumObject.tempPortalLinks[portalKey || portal] = []
    }

    // Add portal link to portal links array.
    albumObject.tempPortalLinks[portalKey || portal].push(portalLink)

    // Add portal key to dot keys.
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

        links.forEach((link, index) => {
            const { songIndex,
                    annotationIndex,
                    cardIndex } = link,

                annotationObject = getAnnotationObject(songIndex, annotationIndex, albumObject.songs),
                cardObject = annotationObject.cards[cardIndex],

                // Don't add link to its own portal.
                portalLinks = links.filter((link, thisIndex) => {
                    return index !== thisIndex

                }).map(link => {

                    // Return a *copy* of the link object.
                    return Object.assign({}, link)
                })

            cardObject.portalLinks = portalLinks
        })
    }
}

/*********
 * FINAL *
 *********/

export const finalPrepareCard = (annotationObject, cardObject) => {
    const { description,
            portalLinks } = cardObject

    if (description) {
        // This is the wiki key in the song data, *not* the dot key.
        _finalParseWiki(annotationObject, description)
    }

    if (portalLinks) {
        portalLinks.forEach(link => {
            delete link.cardIndex
            annotationObject.annotationAnchors.push(Object.assign({}, link))
            link[PORTAL_INDEX] = annotationObject.tempAnnotationAnchorIndex
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
                annotationObject.annotationAnchors.push(entity[WIKI])

                delete entity[WIKI]
            }

            return keyFound || hasWiki || _finalParseWiki(annotationObject, entity[currentKey])
        }, false)
    }
}

export const registerBeginningAndEndingVerseSpans = (lyricEntity, verseHasPortal = false) => {
    /**
     * Let verses with portals know their first and last objects, which are
     * formatted differently in the portal.
     */

    if (Array.isArray(lyricEntity)) {
        lyricEntity.forEach(childLyric => {
            registerBeginningAndEndingVerseSpans(childLyric, verseHasPortal)
        })

    } else if (typeof lyricEntity === 'object') {

        if (lyricEntity.verseHasPortal) {
            verseHasPortal = true

            // Clean up.
            delete lyricEntity.verseHasPortal
        }

        // Only register verses that have a portal.
        if (verseHasPortal) {

            [LYRIC, LEFT, RIGHT, CENTRE].forEach(lyricKey => {

                if (typeof lyricEntity[lyricKey] === 'object') {
                    _registerAfterTimeKeyFound(lyricEntity[lyricKey])
                }

                if (typeof lyricEntity[lyricKey] === 'string') {
                    lyricEntity[lyricKey] = _addVerseObjectKeyToLyric(lyricEntity[lyricKey], IS_VERSE_BEGINNING_SPAN)

                    lyricEntity[lyricKey] = _addVerseObjectKeyToLyric(lyricEntity[lyricKey], IS_VERSE_ENDING_SPAN)
                }
            })
        }

        if (lyricEntity.unitMap) {
            // This applies to "unsalvaged soul," "tarpid lies," and "trophy blondes."
            registerBeginningAndEndingVerseSpans(lyricEntity.subStanza, verseHasPortal)
        }
    }
}

/**
 * FIXME: This is extremely fragile, as it has to make exceptions for too many
 * special cases.
 */
const _registerAfterTimeKeyFound = (lyricEntity) => {
    /**
     * Helper method to register first and last verse objects, after time key
     * has been found.
     */
    if (Array.isArray(lyricEntity)) {
        const lastIndex = lyricEntity.length - 1
        lyricEntity[0] = _addVerseObjectKeyToLyric(lyricEntity[0], IS_VERSE_BEGINNING_SPAN)
        lyricEntity[lastIndex] = _addVerseObjectKeyToLyric(lyricEntity[lastIndex], IS_VERSE_ENDING_SPAN)

    } else if (typeof lyricEntity === 'object') {
        if (typeof lyricEntity[ANCHOR] === 'string') {
            lyricEntity = _addVerseObjectKeyToLyric(lyricEntity, IS_VERSE_BEGINNING_SPAN)
            lyricEntity = _addVerseObjectKeyToLyric(lyricEntity, IS_VERSE_ENDING_SPAN)
        }

        if (lyricEntity[ITALIC]) {
            /**
             * This applies to "unsalvaged soul," "pompous autumn," "tarpid
             * lies," and "trophy blondes."
             */
            _registerAfterTimeKeyFound(lyricEntity[ITALIC])
        }
    }
}

const _addVerseObjectKeyToLyric = (lyricEntity, verseObjectKey) => {

    if (typeof lyricEntity === 'object') {
        lyricEntity[verseObjectKey] = true
        return lyricEntity

    } else {
        return {
            lyric: lyricEntity,
            [verseObjectKey]: true
        }
    }
}

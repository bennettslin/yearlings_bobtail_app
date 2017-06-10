// Parse album data for build.

import { REFERENCE } from '../../constants/dots'
import { LYRIC, LEFT, RIGHT, CENTRE, ANCHOR, ITALIC, COLUMN_INDEX, LEFT_COLUMN, RIGHT_COLUMN, IS_VERSE_BEGINNING_SPAN, IS_VERSE_ENDING_SPAN, PROPER_NOUN } from '../../constants/lyrics'
import { adminGatherDrawings, finaliseDrawings, registerDrawingTasks } from './drawings-helper'
import { recurseToFindAnchors, registerTitle, registerHasSideStanzas, initialRegisterStanzaTypes, registerIsDoublespeaker, registerAdminDotStanzas, finalRegisterStanzaTypes, finalAddPlaceholderStanzas } from './lyrics-helper'
import { getIsLogue, getSongTitle, getVerseObject } from '../data-helper'
import { getFormattedAnnotationTitle } from '../format-helper'

const _tempStore = {
    _wikiIndex: 1,
    _portalLinks: {},
    _finalAnnotationIndex: 0,
}

export const parseAlbumData = (albumObject) => {

    // Allow helpers to access songs directly.
    _tempStore._songs = albumObject.songs

    _initialPrepareAlbum(albumObject)

    _addDestinationPortalLinks(albumObject)

    // Add drawings for admin purposes.
    finaliseDrawings(albumObject)

    _finalPrepareAlbum(albumObject)

    // FIXME: Temporarily add portal links to album for debugging purposes.
    // albumObject.portalLinks = _tempStore._portalLinks

    return albumObject
}

/***********
 * INITIAL *
 ***********/

const _initialPrepareAlbum = (albumObject) => {

    albumObject.songs.forEach((songObject, songIndex) => {

        if (!getIsLogue(songIndex, albumObject.songs)) {

            _tempStore._songIndex = songIndex

            // Add title object to lyrics array.
            registerTitle(songObject)

            /**
             * Let app know that song has side stanzas. Only applies to "On a
             * Golden Cord" and "Uncanny Valley Boy."
             */
            registerHasSideStanzas(songObject)

            /**
             * Associate a type and index for each stanza, like verse, chorus,
             * and so forth.
             */
            initialRegisterStanzaTypes(albumObject, songObject)

            // Parse lyrics.
            _initialPrepareLyrics(songObject)
        }

        adminGatherDrawings(albumObject, songObject.scenes, songIndex)
    })
}

const _initialPrepareLyrics = (songObject) => {

    const { lyrics } = songObject

    // Initialise song.
    songObject.adminDotStanzas = 0
    songObject.adminPluralCardsCount = 0
    songObject.annotations = []
    songObject.verseIndexCounter = 0
    songObject.verseTimes = []

    lyrics.forEach(unitArray => {

        unitArray.forEach(verseObject => {

            // Tell song it is a doublespeaker song.
            registerIsDoublespeaker(songObject, verseObject)

            /**
             * Recurse until each anchor is found. Initially, we will also
             * register each verse with time.
             */
            recurseToFindAnchors({
                registerVerseTimes: true,
                songObject,
                verseObject,
                callbackFunction: _initialRegisterAnnotation
            })

            // Tell song. its dot stanza count, for admin purposes.
            registerAdminDotStanzas(songObject, verseObject)
        })
    })

    // Clean up.
    delete songObject.verseIndexCounter
}

/**************
 * ANNOTATION *
 **************/

const _initialRegisterAnnotation = ({

    inVerseWithTimeIndex = -1,
    songObject,
    verseObject,
    lyricObject,
    textKey

}) => {
    let cards = lyricObject.annotation

    const annotationIndex = songObject.annotations.length + 1,

        // Create new annotation object to be known by song.
        annotationObject = {},
        allCardDotKeys = {}

    // Tell verse object its annotation anchors.
    verseObject.currentAnnotationIndices = verseObject.currentAnnotationIndices || []
    verseObject.currentAnnotationIndices.push(annotationIndex)

    // Tell annotation and anchored lyric the index. 1-based index.
    annotationObject.annotationIndex = annotationIndex
    lyricObject.annotationIndex = annotationIndex

    // If in a verse with time, tell annotation its verse index.
    if (inVerseWithTimeIndex > -1) {
        annotationObject.verseIndex = inVerseWithTimeIndex

    // Otherwise, tell it the most recent verse index. For title, this is 0.
    } else {
        annotationObject.mostRecentVerseIndex = songObject.verseIndexCounter
    }

    // Add formatted title to annotation.
    annotationObject.title = getFormattedAnnotationTitle(lyricObject[ANCHOR], lyricObject[PROPER_NOUN], lyricObject.keepEndCharacter)

    // Let annotation know if it's in a doublespeaker column.
    if (textKey === LEFT || textKey === LEFT_COLUMN) {
        annotationObject[COLUMN_INDEX] = 0

    } else if (textKey === RIGHT || textKey === RIGHT_COLUMN) {
        annotationObject[COLUMN_INDEX] = 1
    }

    _registerCards({
        songObject,
        verseObject,
        annotationObject,
        cards,
        allCardDotKeys
    })

    // Let annotation object know its cards.
    annotationObject.cards = cards

    // Add dot keys to both anchored lyric and annotation.
    annotationObject.dotKeys = allCardDotKeys
    lyricObject.dotKeys = allCardDotKeys

    // Add annotation object to annotations array.
    songObject.annotations.push(annotationObject)

    // Clean up lyric object.
    delete lyricObject[PROPER_NOUN]
}

const _registerCards = ({

    songObject,
    verseObject,
    annotationObject,
    cards,
    allCardDotKeys

}) => {

    /**
     * Cards may be single annotationObject card or array of cards, so temporarily
     * make single card an array of one object.
     */
    if (!Array.isArray(cards)) {
        cards = [cards]

    // For admin purposes, add to count of annotations with plural cards.
    } else {
        songObject.adminPluralCardsCount++
    }

    cards.forEach((card, cardIndex) => {
        _initialPrepareCard(card, allCardDotKeys)
        _getDotKeysInAllCards(card, allCardDotKeys)
        if (_addSourcePortalLink({
            card,
            cardIndex,
            dotKeys: allCardDotKeys,
            annotation: annotationObject
        })) {
            verseObject.verseHasPortal = true
        }
    })

    // Revert array of one object to a single card.
    if (cards.length === 1) {
        cards = cards[0]
    }
}

const _finalRegisterAnnotation = ({

    songObject,
    lyricObject

}) => {
    let cards = lyricObject.annotation

    const annotation = songObject.annotations[_tempStore._finalAnnotationIndex]
    _tempStore._annotationAnchorIndex = 1

    annotation.annotationAnchors = []

    if (Array.isArray(cards)) {
        cards.forEach(card => {
            _finalPrepareCard(annotation, card)
        })
    } else {
        _finalPrepareCard(annotation, cards)
    }

    // Clean up object, now that it's the final pass through.
    delete lyricObject.annotation

    _tempStore._finalAnnotationIndex++
}

const _initialPrepareCard = (card, dotKeys) => {
    const { description } = card

    if (description) {
        // This is the wiki key in the song data, *not* the dot key.
        const hasWiki = _initialParseWiki('wiki', description)

        if (hasWiki) {
            // Add wiki anchor index to each anchor with wiki.
            if (!card.dotKeys) {
                card.dotKeys = {}
            }

            // If card has a wiki link, add 'reference' key to dot keys.
            card.dotKeys[REFERENCE] = true
            dotKeys[REFERENCE] = true
        }
    }
}

const _finalPrepareCard = (annotation, card) => {
    const { description,
            portalLinks } = card

    if (description) {
        // This is the wiki key in the song data, *not* the dot key.
        _finalParseWiki(annotation, 'wiki', description)
    }

    if (portalLinks) {
        portalLinks.forEach(link => {
            delete link.cardIndex
            annotation.annotationAnchors.push(Object.assign({}, link))
            link.portalIndex = _tempStore._annotationAnchorIndex
            _tempStore._annotationAnchorIndex++
        })
    }
}

const _initialParseWiki = (key, entity) => {
    /**
     * This method gets called in two places. The first time is simply to check
     * if there is a wiki key. The second is in the final pass through, to add
     * the wiki index.
     */

    if (!entity || typeof entity !== 'object') {
        return false

    } else if (Array.isArray(entity)) {
        return entity.reduce((keyFound, element) => {
            return keyFound || _initialParseWiki(key, element)
        }, false)

    } else {
        return Object.keys(entity).reduce((keyFound, currentKey) => {
            const hasWiki = !!entity[key]

            return keyFound || hasWiki || _initialParseWiki(key, entity[currentKey])
        }, false)
    }
}

const _finalParseWiki = (annotation, key, entity) => {
    /**
     * This method gets called in two places. The first time is simply to check
     * if there is a wiki key. The second is in the final pass through, to add
     * the wiki index.
     */

    if (!entity || typeof entity !== 'object') {
        return false

    } else if (Array.isArray(entity)) {
        return entity.reduce((keyFound, element) => {
            // Reversing order so that index gets added if needed.
            return _finalParseWiki(annotation, key, element) || keyFound
        }, false)

    } else {
        return Object.keys(entity).reduce((keyFound, currentKey) => {
            const hasWiki = !!entity[key]

            if (!entity.wikiIndex && typeof entity[key] === 'string') {

                // Popup anchor index is either for portal or wiki.
                entity.wikiIndex = _tempStore._annotationAnchorIndex
                _tempStore._annotationAnchorIndex++
                annotation.annotationAnchors.push(entity[key])
                delete entity[key]
            }

            return keyFound || hasWiki || _finalParseWiki(annotation, key, entity[currentKey])
        }, false)
    }
}

const _getDotKeysInAllCards = (card, allCardDotKeys) => {
    // Add dot keys to both song and annotation card.
    if (card.dotKeys) {
        Object.keys(card.dotKeys).forEach(dotKey => {
            allCardDotKeys[dotKey] = true
        })
    }
}

/*********
 * FINAL *
 *********/

/**
 * Add wiki and portal indices. These can only be determined after collecting
 * portal links from the entire album.
 */
const _finalPrepareAlbum = (albumObject) => {

    albumObject.songs.forEach((songObject, songIndex) => {

        if (!getIsLogue(songIndex, albumObject.songs)) {
            _tempStore._finalAnnotationIndex = 0

            finalRegisterStanzaTypes(songObject)

            _finalPrepareLyrics(songObject)

            _registerBeginningAndEndingVerseSpans(songObject.lyrics)
        }

        registerDrawingTasks(songObject)
        finalAddPlaceholderStanzas(albumObject, songObject)
    })

    delete albumObject.largestStanzaTimesLength
}

const _finalPrepareLyrics = (songObject) => {
    const { lyrics } = songObject

    lyrics.forEach(unitArray => {

        unitArray.forEach(verseObject => {

            // Recurse until each anchor is found.
            recurseToFindAnchors({
                songObject,
                verseObject,
                callbackFunction: _finalRegisterAnnotation
            })
        })
    })
}

/**********
 * PORTAL *
 **********/

const _addSourcePortalLink = ({

    card,
    dotKeys,
    annotation,
    cardIndex = 0

}) => {
    // Add portal link to annotation card.
    const { portal } = card,
        { verseIndex,
          annotationIndex,
          columnIndex } = annotation

    if (portal) {
        // Portal is either object or string.
        const { portalKey,
                portalPrefix } = portal,

            { _songs,
              _songIndex } = _tempStore,

            portalLink = {
                songIndex: _songIndex,
                annotationIndex,
                cardIndex,
                verseIndex,
                columnIndex,
                portalPrefix
            }

        // Add data about portal.
        portalLink.songTitle = getSongTitle({
            songIndex: _songIndex,
            songs: _songs
        })
        portalLink.verseObject = getVerseObject(_songIndex, verseIndex, _songs)

        // If first portal link, initialise array.
        if (!_tempStore._portalLinks[portalKey || portal]) {
            _tempStore._portalLinks[portalKey || portal] = []
        }

        // Add portal link to portal links array.
        _tempStore._portalLinks[portalKey || portal].push(portalLink)

        // Add portal key to dot keys.
        dotKeys.portal = true

        // Clean up card unit.
        delete card.portal

        return true

    } else {
        return false
    }
}

const _addDestinationPortalLinks = (albumObject) => {
    /**
     * For each annotation with a portal, add an array of links to all
     * other portals.
     */
    for (const linkKey in _tempStore._portalLinks) {
        const links = _tempStore._portalLinks[linkKey]

        links.forEach((link, index) => {
            const song = albumObject.songs[link.songIndex],
                annotation = song.annotations[link.annotationIndex - 1],
                card = Array.isArray(annotation.cards) ?
                    annotation.cards[link.cardIndex] : annotation.cards,
                portalLinks = links.filter((link, thisIndex) => {
                    return index !== thisIndex
                }).map(link => {

                    // Return a *copy* of the link object.
                    return Object.assign({}, link)
                })

            card.portalLinks = portalLinks
        })
    }
}

const _registerBeginningAndEndingVerseSpans = (lyricEntity) => {
    /**
     * Let verses with portals know their first and last objects, which are
     * formatted differently in the portal.
     */

    if (Array.isArray(lyricEntity)) {
        lyricEntity.forEach(childLyric => {
            _registerBeginningAndEndingVerseSpans(childLyric)
        })

    } else if (typeof lyricEntity === 'object') {

        // Only register verses that have a portal.
        if (!isNaN(lyricEntity.time) && lyricEntity.verseHasPortal) {

            [LYRIC, LEFT, RIGHT, CENTRE].forEach(lyricKey => {
                _registerAfterTimeKeyFound(lyricEntity[lyricKey])

                if (typeof lyricEntity[lyricKey] === 'string') {
                    lyricEntity[lyricKey] = _addVerseObjectKeyToLyric(lyricEntity[lyricKey], IS_VERSE_BEGINNING_SPAN)

                    lyricEntity[lyricKey] = _addVerseObjectKeyToLyric(lyricEntity[lyricKey], IS_VERSE_ENDING_SPAN)
                }
            })
        }

        if (typeof lyricEntity.unitMap !== 'undefined') {
            _registerBeginningAndEndingVerseSpans(lyricEntity.subStanza)
        }
    }
}

const _registerAfterTimeKeyFound = (lyricEntity) => {
    /**
     * Helper method to register first and last verse objects, after time key
     * has been found.
     */
    if (Array.isArray(lyricEntity)) {

        if (lyricEntity[0][ITALIC]) {
            _registerAfterTimeKeyFound(lyricEntity[0])

        } else {
            lyricEntity[0] = _addVerseObjectKeyToLyric(lyricEntity[0], IS_VERSE_BEGINNING_SPAN)
            lyricEntity[lyricEntity.length - 1] = _addVerseObjectKeyToLyric(lyricEntity[lyricEntity.length - 1], IS_VERSE_ENDING_SPAN)
        }

    } else if (typeof lyricEntity === 'object') {
        _registerAfterTimeKeyFound(lyricEntity[ITALIC])

        if (typeof lyricEntity[ANCHOR] === 'string') {
            lyricEntity = _addVerseObjectKeyToLyric(lyricEntity, IS_VERSE_BEGINNING_SPAN)
            lyricEntity = _addVerseObjectKeyToLyric(lyricEntity, IS_VERSE_ENDING_SPAN)
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

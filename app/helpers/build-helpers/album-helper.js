// Parse album data for build.

import { LYRIC, LEFT, RIGHT, CENTRE, ANCHOR, ITALIC, COLUMN_INDEX, LEFT_COLUMN, RIGHT_COLUMN, IS_VERSE_BEGINNING_SPAN, IS_VERSE_ENDING_SPAN, PROPER_NOUN } from '../../constants/lyrics'
import { registerCards, addDestinationPortalLinks } from './annotations-helper'
import { adminGatherDrawings, adminFinaliseDrawings, registerDrawingTasks } from './drawings-helper'
import { recurseToFindAnchors, registerTitle, registerHasSideStanzas, initialRegisterStanzaTypes, registerIsDoublespeaker, registerAdminDotStanzas, finalRegisterStanzaTypes, finalAddPlaceholderStanzas } from './lyrics-helper'
import { getIsLogue } from '../data-helper'
import { getFormattedAnnotationTitle } from '../format-helper'

const _tempStore = {
    _wikiIndex: 1,
}

export const parseAlbumData = (albumObject) => {

    // Initialise album.
    albumObject.tempPortalLinks = {}

    // Initial preparation.
    _initialPrepareAlbum(albumObject)

    // In-between preparation.
    addDestinationPortalLinks(albumObject)
    adminFinaliseDrawings(albumObject)

    // Finap preparation.
    _finalPrepareAlbum(albumObject)

    // Clean up.
    delete albumObject.tempPortalLinks

    return albumObject
}

/***********
 * INITIAL *
 ***********/

const _initialPrepareAlbum = (albumObject) => {

    albumObject.songs.forEach((songObject, songIndex) => {

        if (!getIsLogue(songIndex, albumObject.songs)) {

            // Initialise song.
            songObject.tempSongIndex = songIndex

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
            _initialPrepareLyrics(albumObject, songObject)

            // Clean up.
            delete songObject.tempSongIndex
        }

        adminGatherDrawings(albumObject, songObject.scenes, songIndex)
    })
}

const _initialPrepareLyrics = (albumObject, songObject) => {

    const { lyrics } = songObject

    // Initialise song.
    songObject.adminDotStanzas = 0
    songObject.adminPluralCardsCount = 0
    songObject.annotations = []
    songObject.tempVerseIndexCounter = 0
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
                albumObject,
                songObject,
                verseObject,
                callbackFunction: _initialRegisterAnnotation
            })

            // Tell song. its dot stanza count, for admin purposes.
            registerAdminDotStanzas(songObject, verseObject)
        })
    })

    // Clean up.
    delete songObject.tempVerseIndexCounter
}

const _initialRegisterAnnotation = ({

    inVerseWithTimeIndex = -1,
    albumObject,
    songObject,
    verseObject,
    lyricObject,
    textKey

}) => {
    // If just a single card, make it an array of one.
    const cards = Array.isArray(lyricObject.annotation) ?
            lyricObject.annotation : [lyricObject.annotation],

        annotationIndex = songObject.annotations.length + 1,

        // Create new annotation object to be known by song.
        annotationObject = {},
        annotationDotKeys = {}

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
        annotationObject.mostRecentVerseIndex = songObject.tempVerseIndexCounter
    }

    // Add formatted title to annotation.
    annotationObject.title = getFormattedAnnotationTitle(lyricObject[ANCHOR], lyricObject[PROPER_NOUN], lyricObject.keepEndCharacter)

    // Let annotation know if it's in a doublespeaker column.
    if (textKey === LEFT || textKey === LEFT_COLUMN) {
        annotationObject[COLUMN_INDEX] = 0

    } else if (textKey === RIGHT || textKey === RIGHT_COLUMN) {
        annotationObject[COLUMN_INDEX] = 1
    }

    registerCards({
        albumObject,
        songObject,
        verseObject,
        annotationObject,
        cards,
        annotationDotKeys
    })

    // Let annotation object know its cards.
    annotationObject.cards = cards

    // Add dot keys to both anchored lyric and annotation.
    annotationObject.dotKeys = annotationDotKeys
    lyricObject.dotKeys = annotationDotKeys

    // Add annotation object to annotations array.
    songObject.annotations.push(annotationObject)

    // Clean up lyric object.
    delete lyricObject[PROPER_NOUN]
}

/*********
 * FINAL *
 *********/

const _finalPrepareAlbum = (albumObject) => {

    albumObject.songs.forEach((songObject, songIndex) => {

        if (!getIsLogue(songIndex, albumObject.songs)) {

            // Initialise song.
            songObject.tempFinalAnnotationIndex = 0

            finalRegisterStanzaTypes(songObject)

            /**
             * Add wiki and portal indices. These can only be determined after
             * collecting portal links from the entire album.
             */
            _finalPrepareLyrics(songObject)

            _registerBeginningAndEndingVerseSpans(songObject.lyrics)

            // Clean up.
            delete songObject.tempFinalAnnotationIndex
        }

        registerDrawingTasks(songObject)
        finalAddPlaceholderStanzas(albumObject, songObject)
    })

    delete albumObject.tempLargestStanzaTimesLength
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

const _finalRegisterAnnotation = ({

    songObject,
    lyricObject

}) => {

    // TODO: Get annotation through data helper.
    const annotationObject = songObject.annotations[songObject.tempFinalAnnotationIndex]
    _tempStore._annotationAnchorIndex = 1

    annotationObject.annotationAnchors = []
    let cards = annotationObject.cards

    cards.forEach(cardObject => {
        _finalPrepareCard(annotationObject, cardObject)
    })

    // Clean up object, now that it's the final pass through.
    delete lyricObject.annotation

    songObject.tempFinalAnnotationIndex++
}

const _finalPrepareCard = (annotationObject, cardObject) => {
    const { description,
            portalLinks } = cardObject

    if (description) {
        // This is the wiki key in the song data, *not* the dot key.
        _finalParseWiki(annotationObject, 'wiki', description)
    }

    if (portalLinks) {
        portalLinks.forEach(link => {
            delete link.cardIndex
            annotationObject.annotationAnchors.push(Object.assign({}, link))
            link.portalIndex = _tempStore._annotationAnchorIndex
            _tempStore._annotationAnchorIndex++
        })
    }
}

const _finalParseWiki = (annotationObject, key, entity) => {
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
            return _finalParseWiki(annotationObject, key, element) || keyFound
        }, false)

    } else {
        return Object.keys(entity).reduce((keyFound, currentKey) => {
            const hasWiki = !!entity[key]

            if (!entity.wikiIndex && typeof entity[key] === 'string') {

                // Popup anchor index is either for portal or wiki.
                entity.wikiIndex = _tempStore._annotationAnchorIndex
                _tempStore._annotationAnchorIndex++
                annotationObject.annotationAnchors.push(entity[key])
                delete entity[key]
            }

            return keyFound || hasWiki || _finalParseWiki(annotationObject, key, entity[currentKey])
        }, false)
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
        if (lyricEntity.verseHasPortal) {

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

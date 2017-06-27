// Parse album data for build.

import { LEFT, RIGHT, ANCHOR, COLUMN_INDEX, LEFT_COLUMN, RIGHT_COLUMN, PROPER_NOUN } from '../../constants/lyrics'
import { registerCards, addDestinationPortalLinks, finalPrepareCard, addDestinationPortalIndices, addDestinationPortalFormats } from './annotations-helper'
import { adminGatherDrawings, adminFinaliseDrawings, adminRegisterDrawingTasks } from './drawings-helper'
import { recurseToFindAnchors, registerTitle, registerHasSideStanzas, initialRegisterStanzaTypes, registerIsDoublespeaker, registerAdminDotStanzas, finalRegisterStanzaTypes } from './lyrics-helper'
import { getSongIsLogue } from '../data-helper'
import { getFormattedAnnotationTitle } from '../format-helper'

export const parseAlbumData = (albumObject) => {

    // Initialise album.
    albumObject.tempPortalLinks = {}

    // Combine completed and remaining tasks.
    _mergeAlbumTasks(albumObject)

    // Initial preparation.
    _initialPrepareAlbum(albumObject)

    // In-between preparation.
    addDestinationPortalLinks(albumObject)
    adminFinaliseDrawings(albumObject)

    // Finap preparation.
    _finalPrepareAlbum(albumObject)

    // After preparation.
    addDestinationPortalIndices(albumObject)

    return albumObject
}

const _mergeAlbumTasks = (albumObject) => {
    const { remainingTasks,
            completedTasks } = albumObject

    albumObject.tasks = remainingTasks.concat(completedTasks)

    delete albumObject.remainingTasks
    delete albumObject.completedTasks
}

/***********
 * INITIAL *
 ***********/

const _initialPrepareAlbum = (albumObject) => {

    // Initialise.
    albumObject.maxStanzaTimesCount = 0

    albumObject.songs.forEach((songObject, songIndex) => {

        if (!getSongIsLogue(songIndex, albumObject.songs)) {

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

        // Let unit know all the verse indices that it contains.
        let firstVerseIndex,
            lastVerseIndex

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

            if (!isNaN(verseObject.verseIndex)) {

                // Set first verse index once.
                if (isNaN(firstVerseIndex)) {
                    firstVerseIndex = verseObject.verseIndex
                }

                // Keep setting last verse index.
                lastVerseIndex = verseObject.verseIndex
            }

            // If this is the unit map, add first and last verse indices.
            if (verseObject.unitMap) {
                verseObject.firstVerseIndex = firstVerseIndex;
                verseObject.lastVerseIndex = lastVerseIndex;
            }

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
    delete lyricObject.annotation
}

/*********
 * FINAL *
 *********/

const _finalPrepareAlbum = (albumObject) => {

    albumObject.songs.forEach((songObject, songIndex) => {

        if (!getSongIsLogue(songIndex, albumObject.songs)) {

            // Initialise song.
            songObject.tempFinalAnnotationIndex = 0

            finalRegisterStanzaTypes(songObject)

            /**
             * Add wiki and portal indices. These can only be determined after
             * collecting portal links from the entire album.
             */
            _finalPrepareLyrics(songObject)

            // For each verse in a portal, tell portal how to format it.
            addDestinationPortalFormats(songObject.lyrics)

            // Clean up.
            delete songObject.tempFinalAnnotationIndex
            delete songObject.tempSongIndex
        }

        adminRegisterDrawingTasks(songObject)
    })
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

    songObject

}) => {

    const annotationObject = songObject.annotations[songObject.tempFinalAnnotationIndex]

    annotationObject.tempAnnotationAnchorIndex = 1

    let cards = annotationObject.cards

    cards.forEach(cardObject => {
        finalPrepareCard(songObject, annotationObject, cardObject)
    })

    songObject.tempFinalAnnotationIndex++

    // Clean up.
    delete annotationObject.tempAnnotationAnchorIndex
}

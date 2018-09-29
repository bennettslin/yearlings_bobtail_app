// Parse album data for build.

import {
    registerCards,
    addDestinationWormholeLinks,
    finalPrepareCard,
    addDestinationWormholeIndices,
    addDestinationWormholeFormats
} from './annotationsHelper'

import {
    adminGatherDrawings,
    adminFinaliseDrawings,
    adminRegisterDrawingTasks
} from './drawingsHelper'

import {
    recurseToFindAnchors,
    registerTitle,
    registerHasSideCards,
    initialRegisterStanzaTypes,
    registerIsDoublespeaker,
    registerAdminDotStanzas,
    finalRegisterStanzaTypes
} from './lyricsHelper'

import {
    initialRegisterScenes,
    finalRegisterScenes,
    finalRegisterPresenceYIndices
} from './scenesHelper'

import { getSongIsLogue } from 'helpers/dataHelper'

import { getFormattedAnnotationTitle } from 'helpers/formatHelper'

import {
    LEFT,
    RIGHT,
    ANCHOR,
    COLUMN_INDEX,
    LEFT_COLUMN,
    RIGHT_COLUMN,
    PROPER_NOUN
} from 'constants/lyrics'

export const parseAlbumData = (albumObject) => {
    logger.warn('Begin parse album data.')

    // Initialise album.
    albumObject.tempWormholeLinks = {}
    albumObject.globalAnnotationsCount = 0
    albumObject.globalAnnotationIndices = {}

    // Combine completed and remaining tasks.
    _mergeAlbumTasks(albumObject)

    // Initial preparation.
    _initialPrepareAlbum(albumObject)

    // In-between preparation.
    addDestinationWormholeLinks(albumObject)

    adminFinaliseDrawings(albumObject)

    // Finap preparation.
    _finalPrepareAlbum(albumObject)

    // After preparation.
    addDestinationWormholeIndices(albumObject)

    logger.warn('End parse album data.')

    return albumObject
}

const _mergeAlbumTasks = (albumObject) => {
    const {
        remainingTasks,
        completedTasks
    } = albumObject

    albumObject.tasks = remainingTasks.concat(completedTasks)

    delete albumObject.remainingTasks
    delete albumObject.completedTasks
}

/***********
 * INITIAL *
 ***********/

const _initialPrepareAlbum = (albumObject) => {

    albumObject.songs.forEach((songObject, songIndex) => {

        songObject.songIndex = songIndex

        adminGatherDrawings(albumObject, songIndex)

        // This collects the unit index for each scene.
        initialRegisterScenes(albumObject, songObject, songIndex)

        if (!getSongIsLogue(songIndex, albumObject.songs)) {

            // Initialise song.
            songObject.tempSongIndex = songIndex

            // Add title object to lyrics array.
            registerTitle(songObject)

            /**
             * Let app know that song has side stanzas. Only applies to "On a
             * Golden Cord" and "Uncanny Valley Boy."
             */
            registerHasSideCards(songObject)

            /**
             * Associate a type and index for each stanza, like verse, chorus,
             * and so forth.
             */
            initialRegisterStanzaTypes(albumObject, songObject)

            // Parse lyrics.
            _initialPrepareLyrics(albumObject, songObject)
        }
    })
}

const _initialPrepareLyrics = (albumObject, songObject) => {

    const { lyricUnits } = songObject,
        verseTimesCounter = { counter: 0 }

    // Initialise song.

    // This tells me how many dot stanzas this song has.
    songObject.adminDotStanzasCount = 0

    // This tells me how many annotations have multiple cards.
    songObject.adminPluralCardsCount = 0

    songObject.annotations = []
    songObject.tempVerseIndexCounter = 0

    // Allow easy access to verse metadata, without having to traverse lyrics.
    songObject.songVerseConfigs = []

    lyricUnits.forEach((unitArray, unitIndex) => {

        // Let unit know all the verse indices that it contains.
        let firstVerseIndex

        unitArray.forEach(verseObject => {

            // Tell song it is a doublespeaker song.
            registerIsDoublespeaker(songObject, verseObject)

            /**
             * Recurse until each anchor is found. Initially, we will also
             * register each verse with time.
             */
            recurseToFindAnchors({
                // Tell each stanza the units that it owns.
                unitIndex,

                // Pass this to register each verse time.
                verseTimesCounter,

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
            }

            /**
             * If this is the unit map, add temp first verse index. This is
             * used to register the scene later.
             */
            if (verseObject.isUnitMap) {
                verseObject.tempFirstVerseIndex = firstVerseIndex;
            }

            // Tell song its dot stanza count, for admin purposes.
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
    annotationObject.title = getFormattedAnnotationTitle(
        lyricObject[ANCHOR],
        lyricObject[PROPER_NOUN],
        lyricObject.keepEndCharacter
    )

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

    // Let annotation object know its global index.
    annotationObject.globalIndex = albumObject.globalAnnotationsCount
    albumObject.globalAnnotationIndices[
        albumObject.globalAnnotationsCount
    ] = {
        songIndex: songObject.songIndex,
        annotationIndex
    }
    albumObject.globalAnnotationsCount++

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

    albumObject.tempInstanceCount = 0

    albumObject.songs.forEach((songObject, songIndex) => {

        if (!getSongIsLogue(songIndex, albumObject.songs)) {

            // Initialise song.
            songObject.tempFinalAnnotationIndex = 0

            /**
             * If stanza is the only one of its kind, don't show its index. For
             * example, Bridge instead of Bridge 1.
             */
            finalRegisterStanzaTypes(songObject)

            /**
             * Add wiki and wormhole indices. These can only be determined after
             * collecting wormhole links from the entire album.
             */
            _finalPrepareLyrics(songObject)

            finalRegisterScenes(songObject)

            // For each verse in a wormhole, tell wormhole how to format it.
            addDestinationWormholeFormats(songObject.lyricUnits)

            // Clean up.
            delete songObject.tempFinalAnnotationIndex
            delete songObject.tempSongIndex
        }

        finalRegisterPresenceYIndices(albumObject, songIndex)

        adminRegisterDrawingTasks(songObject)

        // Not needed after song scenes are registered.
        delete songObject.tempSceneRawIndices
    })
}

const _finalPrepareLyrics = (songObject) => {
    const { lyricUnits } = songObject

    lyricUnits.forEach(unitArray => {

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

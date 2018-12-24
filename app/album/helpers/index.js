// Parse album data for build.

import {
    registerCardsDotKeys,
    registerCardsWormholes,
    addDestinationWormholeLinks,
    finalPrepareCard,
    addDestinationWormholeIndices,
    addDestinationWormholeFormats
} from './annotations'

import {
    recurseToFindAnnotations,
    registerAdminDotStanzas
} from './lyrics'

import { getFormattedAnnotationTitle } from 'helpers/format'

import {
    LEFT,
    RIGHT,
    ANCHOR,
    COLUMN_INDEX,
    PROPER_NOUN
} from 'constants/lyrics'

export const parseAlbumData = (album) => {
    logParse('Begin parse album data.')

    // Initialise album.
    album.tempWormholeLinks = {}
    album.globalAnnotationIndices = []

    // Initial preparation.
    _initialPrepareAlbum(album)

    // In-between preparation.
    addDestinationWormholeLinks(album)

    // Final preparation.
    _finalPrepareAnnotations(album)

    // After preparation.
    addDestinationWormholeIndices(album)

    logParse('End parse album data.')

    return album
}

/***********
 * INITIAL *
 ***********/

const _initialPrepareAlbum = (album) => {

    album.songs.forEach((song) => {

        if (!song.logue) {

            // Parse lyrics.
            _addAnnotationsToSongs(album, song)
        }
    })
}

const _addAnnotationsToSongs = (album, song) => {

    const { lyricUnits } = song,
        verseTimesCounter = { counter: 0 }

    // This tells me how many dot stanzas this song has.
    song.adminDotStanzasCount = 0

    // This tells me how many annotations have multiple cards.
    song.adminPluralCardsCount = 0

    song.annotations = []
    song.mostRecentVerseIndex = 0

    lyricUnits.forEach(unit => {
        const {
                unitMap,
                lyricUnit
            } = unit,

            lyricUnitAndUnitMap = [
                ...lyricUnit || [],
                unitMap
            ]

        lyricUnitAndUnitMap.forEach(verse => {
            /**
             * Recurse until each anchor is found. Initially, we will also
             * register each verse with time.
             */
            recurseToFindAnnotations({
                // Pass this to register each verse time.
                verseTimesCounter,

                album,
                song,
                verse,
                callbackFunction: _registerAnnotation
            })

            // Tell song its dot stanza count, for admin purposes.
            registerAdminDotStanzas(song, verse)
        })
    })

    // Clean up.
    delete song.mostRecentVerseIndex
}

const _registerAnnotation = ({
    inVerseWithTimeIndex = -1,
    album,
    song,
    verse,
    rawAnnotation,
    textKey

}) => {
    const
        /**
         * Annotation will either have an array of cards or just a single card.
         */
        cards = rawAnnotation.cards || [rawAnnotation.card],
        annotationIndex = song.annotations.length + 1,

        // Create new annotation object to be known by song.
        annotation = {},
        dotKeys = {}

    // For admin purposes, add to count of annotations with plural cards.
    if (rawAnnotation.cards) {
        song.adminPluralCardsCount++
    }

    // Tell verse object its annotation anchors.
    if (!verse.verseAnnotationIndices) {
        verse.verseAnnotationIndices = []
    }

    verse.verseAnnotationIndices.push(annotationIndex)

    // Tell annotation and anchored lyric the index. 1-based index.
    annotation.annotationIndex = annotationIndex
    rawAnnotation.annotationIndex = annotationIndex

    // If in a verse with time, tell annotation its verse index.
    if (inVerseWithTimeIndex > -1) {
        annotation.verseIndex = inVerseWithTimeIndex

    /**
     * Otherwise, tell it the most recent verse index. For first dot stanza,
     * this is 0.
     */
    } else {
        annotation.mostRecentVerseIndex = song.mostRecentVerseIndex
    }

    // Add formatted title to annotation.
    annotation.title = getFormattedAnnotationTitle(
        rawAnnotation[ANCHOR],
        rawAnnotation[PROPER_NOUN],
        rawAnnotation.keepEndCharacter
    )

    // Let annotation know if it's in a doublespeaker column.
    if (textKey === LEFT) {
        annotation[COLUMN_INDEX] = 0

    } else if (textKey === RIGHT) {
        annotation[COLUMN_INDEX] = 1
    }

    registerCardsDotKeys({
        song,
        cards,
        dotKeys
    })

    registerCardsWormholes({
        album,
        song,
        verse,
        annotation,
        cards,
        dotKeys
    })

    // Let annotation object know its global index.
    annotation.globalIndex = album.globalAnnotationIndices.length
    album.globalAnnotationIndices.push({
        songIndex: song.songIndex,
        annotationIndex
    })

    // Let annotation object know its cards.
    annotation.cards = cards

    // Add dot keys to both anchored lyric and annotation.
    annotation.dotKeys = dotKeys
    rawAnnotation.dotKeys = dotKeys

    // Add annotation object to annotations array.
    song.annotations.push(annotation)

    // Clean up lyric object.
    delete rawAnnotation[PROPER_NOUN]
    delete rawAnnotation.annotation
}

/*********
 * FINAL *
 *********/

const _finalPrepareAnnotations = (album) => {

    album.songs.forEach((song) => {

        if (!song.logue) {

            // Initialise song.
            song.tempFinalAnnotationIndex = 0

            /**
             * Add wiki and wormhole indices. These can only be determined
             * after collecting wormhole links from the entire album.
             */
            song.annotations.forEach(annotation => {
                annotation.tempWikiWormholeIndex = 1

                let cards = annotation.cards

                cards.forEach(cardObject => {
                    finalPrepareCard(song, annotation, cardObject)
                })

                song.tempFinalAnnotationIndex++

                // Clean up.
                delete annotation.tempWikiWormholeIndex
            })

            // For each verse in a wormhole, tell wormhole how to format it.
            addDestinationWormholeFormats(song.lyricUnits)

            // Clean up.
            // delete song.tempFinalAnnotationIndex
        }
    })
}

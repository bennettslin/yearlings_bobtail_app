// Parse album data for build.

import {
    _registerAnnotation,
    _finalPrepareAnnotations
} from './annotations'

import {
    addDestinationWormholeLinks,
    addDestinationWormholeIndices
} from './annotations/helper'

import {
    recurseToFindAnnotations
} from './lyrics'

export const parseAlbumData = (album) => {
    logParse('Begin parse album data.')

    // Initialise album.
    album.tempWormholeLinks = {}
    album.globalAnnotationIndices = []

    // Initial preparation.
    _initialPrepareAnnotations(album)

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

const _initialPrepareAnnotations = (album) => {

    album.songs.forEach((song) => {

        if (!song.logue) {

            // Parse lyrics.
            _addAnnotationsToSongs(album, song)
        }
    })
}

const _addAnnotationsToSongs = (album, song) => {

    const { lyricUnits } = song

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
                album,
                song,
                verse,
                annotationCallback: _registerAnnotation
            })
        })
    })

    // Clean up.
    delete song.mostRecentVerseIndex
}

// Parse album data for build.

import {
    _registerAnnotation,
    _addWikiWormholeIndices
} from './annotations'

import {
    addDestinationWormholeLinks,
    addDestinationWormholeIndices
} from './annotations/helper'

import { recurseToFindAnnotations } from './lyrics'

export const parseAlbumData = (album) => {
    logParse('Begin parse album data.')

    // Initialise album.
    album.tempWormholeLinks = {}

    // Initial preparation.
    _initialPrepareAnnotations(album)

    // In-between preparation.
    addDestinationWormholeLinks(album)

    // Final preparation.
    _addWikiWormholeIndices(album)

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

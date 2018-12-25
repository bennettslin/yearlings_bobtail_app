// Parse album data for build.

import {
    _registerAnnotation
} from './annotations'

import { recurseToFindAnnotations } from './lyrics'

export const parseAlbumData = (album) => {
    logParse('Begin parse album data.')

    // Initial preparation.
    _initialPrepareAnnotations(album)

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
            addAnnotations(song)
        }
    })
}

const addAnnotations = (song) => {

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
                song,
                verse,
                annotationCallback: _registerAnnotation
            })
        })
    })

    // Clean up.
    delete song.mostRecentVerseIndex
}

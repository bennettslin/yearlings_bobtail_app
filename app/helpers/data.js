/**
 * Fetch album data. Should know nothing else. Only the album helper will pass
 * a songs argument, since it is executing before the album object has been
 * created.
 */

import album from 'album'
import albumScenes from 'album/scenes'
import { COLUMN_INDEX } from 'constants/lyrics'

import {
    getSongObject,
    getSongIsLogue
} from 'album/api/songs'

/*********
 * ALBUM *
 *********/

// For logging.
export const getGlobalAnnotationObject = (globalIndex) => {
    const { globalAnnotationIndices } = album
    return globalAnnotationIndices[globalIndex]
}

/*********
 * TIMES *
 *********/

export const getSongTotalTime = (songIndex) => {
    const selectedSong = getSongObject(songIndex)
    return selectedSong.totalTime || Number.MAX_SAFE_INTEGER
}

export const getSongVerseConfigs = (songIndex) => {
    const selectedSong = getSongObject(songIndex)
    return selectedSong.songVerseConfigs || []
}

export const getSongVersesCount = (songIndex) => {
    const selectedSong = getSongObject(songIndex)
    return selectedSong.songVerseConfigs.length || 0
}

export const getTimeForVerseIndex = (songIndex, verseIndex) => {

    // Return 0 if logue.
    if (getSongIsLogue(songIndex)) {
        return 0
    }

    const selectedSong = getSongObject(songIndex),
        { songVerseConfigs } = selectedSong

    return songVerseConfigs[verseIndex].verseStartTime
}

/**********
 * LYRICS *
 **********/

const _parseLyrics = (lyricEntity, verseIndex) => {
    // Recurse until object with verse index is found.

    // Method does not apply to logues.
    if (lyricEntity) {
        if (Array.isArray(lyricEntity)) {
            return lyricEntity.reduce((childSelectedLyric, childLyric) => (
                childSelectedLyric || _parseLyrics(childLyric, verseIndex)
            ), null)

        } else if (lyricEntity.lyricUnit) {
            return (
                _parseLyrics(lyricEntity.lyricUnit, verseIndex) ||
                _parseLyrics(lyricEntity.unitMap, verseIndex)
            )

        } else if (lyricEntity.verseIndex === verseIndex) {
            return lyricEntity

            // Object with verseIndex key not found, so dig into subCard.
        } else if (lyricEntity.subCard) {
            return _parseLyrics(lyricEntity.subCard, verseIndex)
        }
    }
}

export const getVerseObject = (
    songIndex,
    verseIndex,
    songs = album.songs
) => {
    const { lyricUnits } = getSongObject(songIndex, songs)
    return _parseLyrics(lyricUnits, verseIndex)
}

/***************
 * ANNOTATIONS *
 ***************/

export const getAnnotationsCount = (songIndex) => {

    if (songIndex < 0) {
        return 0
    }

    const song = getSongObject(songIndex),
        { annotations } = song

    return annotations ? annotations.length : 0
}

export const getAnnotationObject = (
    songIndex,
    annotationIndex,
    songs
) => {
    const { annotations } = getSongObject(songIndex, songs)
    return annotations ? annotations[annotationIndex - 1] : null
}

export const getVerseIndexForAnnotationIndex = (
    songIndex,
    annotationIndex
) => {
    const annotationObject = getAnnotationObject(
        songIndex,
        annotationIndex
    )

    return annotationObject ? annotationObject.verseIndex : -1
}

export const getAnnotationColumnIndex = (
    songIndex,
    annotationIndex,
    songs
) => {
    const annotation = getAnnotationObject(
        songIndex,
        annotationIndex,
        songs
    )

    // Default to left if it's not explicitly right.
    return annotation ?
        annotation[COLUMN_INDEX] :
        0
}

export const getAnnotationCardObject = ({
    songIndex,
    annotationIndex,
    cardIndex
}) => {
    // Called by annotation card component.
    const annotationObject = getAnnotationObject(
        songIndex,
        annotationIndex
    )

    return annotationObject ? annotationObject.cards[cardIndex] : null
}

/**********
 * STANZA *
 **********/

export const getSongStanzaConfigs = (songIndex) => {
    const songObject = getSongObject(songIndex),
        { songStanzaConfigs } = songObject

    return songStanzaConfigs || []
}

/**********
 * SCENES *
 **********/

export const getSongSceneConfigs = (songIndex) => {
    const songObject = getSongObject(songIndex),
        { songSceneConfigs } = songObject

    return songSceneConfigs || []
}

export const getSceneIndexForVerseIndex = (songIndex, verseIndex) => {

    // Return 0 if logue.
    if (getSongIsLogue(songIndex)) {
        return 0
    }

    const songVerseConfigs = getSongVerseConfigs(songIndex)

    return songVerseConfigs[verseIndex].sceneIndex
}

export const getSceneObject = (
    songIndex,
    sceneIndex = 0,
    scenes = albumScenes
) => {
    const sceneObject = scenes[songIndex]

    return sceneObject[sceneIndex] || null
}

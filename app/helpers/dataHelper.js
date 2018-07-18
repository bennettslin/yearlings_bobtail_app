/**
 * Fetch album data. Should know nothing else. Only the album helper will pass
 * a songs argument, since it is executing before the AlbumData object has been
 * created.
 */

import AlbumData from '../AlbumData'
import { SOURCE_PORTAL_INDEX } from '../constants/lyrics'

/*********
 * ALBUM *
 *********/

export const getMp3s = () => {
    const { mp3s } = AlbumData
    return mp3s
}

export const getStartingIndexForBook = (bookIndex) => {
    const { bookStartingIndices } = AlbumData
    return bookStartingIndices[bookIndex]
}

export const getBookColumnIndex = (songIndex) => {
    const { bookStartingIndices } = AlbumData

    // Assumes two book starting indices.
    return songIndex < bookStartingIndices[1] ? 0 : 1
}

/*********
 * SONGS *
 *********/

export const getSongsAndLoguesCount = (songs = AlbumData.songs) => {
    return songs.length
}

export const getSongsNotLoguesCount = (songs = AlbumData.songs) => {
    return songs.length - 2
}

export const getSongObject = (songIndex, songs = AlbumData.songs) => {
    return songs[songIndex] || null
}

export const getSongIsLogue = (songIndex, songs = AlbumData.songs) => {
    return songIndex === 0 || songIndex === songs.length - 1
}

export const getSongTitle = ({
    songIndex,
    songs = AlbumData.songs,
    showIndex = true
}) => {
    const song = getSongObject(songIndex, songs)

    if (!song) {
        return undefined

    } else {
        const isLogue = getSongIsLogue(songIndex, songs)
        return `${showIndex && !isLogue ? songIndex + '. ' : ''}${song.title}`
    }
}

export const getSongScore = (songIndex) => {
    const { scores } = AlbumData
    return scores[songIndex - 1]
}

export const getSongOverview = (songIndex) => {
    const song = getSongObject(songIndex)
    return song ? song.overview : ''
}

/*********
 * TIMES *
 *********/

export const getSongTotalTime = (songIndex) => {
    const selectedSong = getSongObject(songIndex)
    return selectedSong.totalTime || Number.MAX_SAFE_INTEGER
}

export const getSongVerseObjects = (songIndex) => {
    const selectedSong = getSongObject(songIndex)
    return selectedSong.songVerseObjects || []
}

export const getSongVersesCount = (songIndex) => {
    const selectedSong = getSongObject(songIndex)
    return selectedSong.songVerseObjects.length || 0
}

export const getVerseIndexForTime = (songIndex, time) => {

    const songVerseObjects = getSongVerseObjects(songIndex),
        totalTime = getSongTotalTime(songIndex)

    if (time >= 0 && time <= totalTime) {
        let selectedVerseIndex = 0

        // Select corresponding verse.
        while (
            selectedVerseIndex < songVerseObjects.length - 1 &&
            time >= songVerseObjects[selectedVerseIndex + 1].verseStartTime
        ) {

            selectedVerseIndex++
        }

        return selectedVerseIndex

    } else {
        return null
    }
}

/********
 * TIPS *
 ********/

export const getSongTip = (songIndex) => {

    if (songIndex < 0) {
        return null
    }

    const isLogue = getSongIsLogue(songIndex),
        { tips } = AlbumData

    if (!isLogue) {
        return tips[songIndex].description
    } else {
        return null
    }
}

/**********
 * LYRICS *
 **********/

export const getLyricUnitsCount = (songIndex) => {

    if (songIndex < 0) {
        return 0
    }

    const songs = getSongObject(songIndex)
    return songs.lyrics ? songs.lyrics.length : 0
}

export const getLyricUnitArray = (songIndex, unitIndex) => {
    const songs = getSongObject(songIndex)
    return songs.lyrics ? songs.lyrics[unitIndex] : []
}

export const getVerseObject = (songIndex, verseIndex, songs = AlbumData.songs) => {

    if (songIndex < 0) {
        return null
    }

    const { lyrics } = getSongObject(songIndex, songs)
    return _parseLyrics(lyrics, verseIndex)
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

export const getPortalLink = (annotationObject, annotationAnchorIndex) => {

    const { cards } = annotationObject

    // Loop through cards until we find the portal card.
    return cards.reduce((foundCardObject, cardObject) => {
        const { portalLinks } = cardObject

        if (portalLinks) {
            // Loop through portal links until we find the portal index we want.
            foundCardObject = portalLinks.reduce((foundPortalLink, portalLink) => {
                if (portalLink[SOURCE_PORTAL_INDEX] === annotationAnchorIndex) {
                    foundPortalLink = portalLink
                }

                return foundPortalLink
            }, null)
        }

        return foundCardObject
    }, null)
}

export const getAnnotationDotKeys = (
    songIndex,
    annotationIndex
) => {
    const annotation = getAnnotationObject(
        songIndex,
        annotationIndex
    )

    return annotation ? annotation.dotKeys : null
}

/**********
 * SLIDER *
 **********/

export const getMaxStanzasCount = () => {
    return AlbumData.maxStanzasCount
}

export const getSliderStanzaObjects = (songIndex) => {
    const songObject = getSongObject(songIndex),
        { songStanzaObjects } = songObject

    return songStanzaObjects || []
}

/**********
 * SCENES *
 **********/

export const getVerseIndexForNextScene = (
    songIndex,
    verseIndex,
    direction = 0
) => {

    // Return -1 if logue.
    if (getSongIsLogue(songIndex)) {
        return -1
    }

    const scenesArray = getScenesArray(songIndex),

        renderableSceneIndex = getSceneIndexForVerseIndex(songIndex, verseIndex),

        scenesCount = scenesArray.length,

        nextSceneIndex = (
            renderableSceneIndex
            + direction
            + scenesCount
        ) % scenesCount

    return scenesArray[nextSceneIndex].firstVerseIndex
}

export const getSceneIndexForVerseIndex = (songIndex, verseIndex) => {

    const scenesArray = getScenesArray(songIndex)

    if (scenesArray.length) {

        let counter = 0,
            sceneIndex = 0

        while (counter < scenesArray.length) {
            const currentVerseIndex = scenesArray[counter].firstVerseIndex

            if (verseIndex < currentVerseIndex) {
                break
            }

            sceneIndex = counter
            counter++
        }

        return sceneIndex
    }

    return 0
}

export const getSceneObject = (songIndex, sceneIndex = 0) => {
    const song = getSongObject(songIndex),
        sceneObject = song.scenes

    return sceneObject[sceneIndex] || null
}

export const getScenesArray = (songIndex) => {
    const songObject = getSongObject(songIndex),
        { scenes: scenesArray } = songObject

    return scenesArray || []
}

/*********
 * ADMIN *
 *********/

export const getAllTaskObjects = (songs = AlbumData.songs) => {
    const { tasks } = AlbumData,
        allTaskObjects = songs.map(song => song.tasks)

    allTaskObjects.push(tasks)

    return allTaskObjects
}

export const getSongTasks = (songIndex) => {
    const selectedSong = getSongObject(songIndex)
    return selectedSong.tasks || []
}

export const getDrawings = () => {
    const { drawings } = AlbumData
    return drawings
}

/***********
 * HELPERS *
 ***********/

const _parseLyrics = (lyricEntity, selectedVerseIndex) => {
    // Recurse until object with verse index is found.

    // Method does not apply to logues.
    if (lyricEntity) {
        if (lyricEntity.verseIndex === selectedVerseIndex) {
            return lyricEntity

        } else if (Array.isArray(lyricEntity)) {
            return lyricEntity.reduce((childSelectedLyric, childLyric) => {
                return childSelectedLyric || _parseLyrics(childLyric, selectedVerseIndex)
            }, null)

            // Object with verseIndex key not found, so dig into substanza.
        } else if (lyricEntity.substanza) {
            return _parseLyrics(lyricEntity.substanza, selectedVerseIndex)
        }
    }
}

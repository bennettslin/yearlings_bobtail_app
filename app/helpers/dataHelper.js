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

export const getVerseIndexForTime = (songIndex, time) => {

    const songVerseConfigs = getSongVerseConfigs(songIndex),
        totalTime = getSongTotalTime(songIndex)

    if (time >= 0 && time <= totalTime) {
        let selectedVerseIndex = 0

        // Select corresponding verse.
        while (
            selectedVerseIndex < songVerseConfigs.length - 1 &&
            time >= songVerseConfigs[selectedVerseIndex + 1].verseStartTime
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
    return songs.lyricUnits ? songs.lyricUnits.length : 0
}

export const getLyricUnitArray = (songIndex, unitIndex) => {
    const songs = getSongObject(songIndex)
    return songs.lyricUnits ? songs.lyricUnits[unitIndex] : []
}

export const getVerseObject = (songIndex, verseIndex, songs = AlbumData.songs) => {

    if (songIndex < 0) {
        return null
    }

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
 * STANZA *
 **********/

export const getSongStanzaConfigs = (songIndex) => {
    const songObject = getSongObject(songIndex),
        { songStanzaConfigs } = songObject

    return songStanzaConfigs || []
}

export const getStanzaIndexForVerseIndex = (songIndex, verseIndex) => {

    // Return -1 if logue.
    if (getSongIsLogue(songIndex)) {
        return 0
    }

    const songObject = getSongObject(songIndex),
    { songVerseConfigs } = songObject

    return songVerseConfigs[verseIndex].stanzaIndex
}

export const getVerseDurationForVerseIndex = (songIndex, verseIndex) => {
    const songObject = getSongObject(songIndex),
    { songVerseConfigs } = songObject

    if (songVerseConfigs) {
        const verseConfig = songVerseConfigs[verseIndex]

        if (verseConfig) {
            return songVerseConfigs[verseIndex].verseDuration
        }
    }

    return 0
}

export const getLastUnitDotCardIndex = (songIndex) => {
    /**
     * Return an index if the last unit is a dot card. Otherwise, return -1.
     * Note that this assumes there can only be one last unit that isn't a
     * stanza unit.
     */

    const songObject = getSongObject(songIndex),
    { songStanzaConfigs } = songObject

    if (songStanzaConfigs) {
        // Get unit indices of last stanza.
        const { stanzaUnitIndices } = songStanzaConfigs[
            songStanzaConfigs.length - 1
        ]

        if (stanzaUnitIndices) {
            // Compare index of last unit to total units.
            const lyricUnitsCount = getLyricUnitsCount(songIndex),
                lastStanzaUnitIndex = stanzaUnitIndices[
                    stanzaUnitIndices.length - 1
                ]

            /**
             * Remember that title is technically the first unit. So we're
             * treating this as if it were 1-based.
             */
            if (lastStanzaUnitIndex < lyricUnitsCount - 1) {
                return lyricUnitsCount - 1
            }
        }
    }

    return -1
}

/**********
 * SCENES *
 **********/

export const getSongSceneConfigs = (songIndex) => {
    const songObject = getSongObject(songIndex),
        { songSceneConfigs } = songObject

    return songSceneConfigs || []
}

export const getVerseIndexForNextScene = (
    songIndex,
    verseIndex,
    direction = 0
) => {

    // Return -1 if logue.
    if (getSongIsLogue(songIndex)) {
        return -1
    }

    const songSceneConfigs = getSongSceneConfigs(songIndex),

        currentSceneIndex = getSceneIndexForVerseIndex(
            songIndex,
            verseIndex
        ),

        scenesCount = songSceneConfigs.length,

        nextSceneIndex = (
            currentSceneIndex
            + direction
            + scenesCount
        ) % scenesCount

    return songSceneConfigs[nextSceneIndex].firstVerseIndex
}

export const getSceneIndexForVerseIndex = (songIndex, verseIndex) => {

    // Return 0 if logue.
    if (getSongIsLogue(songIndex)) {
        return 0
    }

    const songVerseConfigs = getSongVerseConfigs(songIndex)

    return songVerseConfigs[verseIndex].sceneIndex
}

export const getSceneObject = (songIndex, sceneIndex = 0) => {
    const song = getSongObject(songIndex),
        sceneObject = song.scenes

    return sceneObject[sceneIndex] || null
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

            // Object with verseIndex key not found, so dig into subCard.
        } else if (lyricEntity.subCard) {
            return _parseLyrics(lyricEntity.subCard, selectedVerseIndex)
        }
    }
}

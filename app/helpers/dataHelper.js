/**
 * Fetch album data. Should know nothing else. Only the album helper will pass
 * a songs argument, since it is executing before the album object has been
 * created.
 */

import album from 'server/album'
import { SOURCE_WORMHOLE_INDEX } from 'constants/lyrics'

/*********
 * ALBUM *
 *********/

export const getNavBookIndex = (songIndex) => {
    const { bookStartingIndices } = album

    // Assumes two book starting indices.
    return songIndex < bookStartingIndices[1] ? 0 : 1
}

// For logging.
export const getGlobalAnnotationObject = (globalIndex) => {
    const { globalAnnotationIndices } = album
    return globalAnnotationIndices[globalIndex]
}

/*********
 * SONGS *
 *********/

export const getSongsAndLoguesCount = (songs = album.songs) => {
    return songs.length
}

export const getSongsNotLoguesCount = (songs = album.songs) => {
    return songs.length - 2
}

export const getSongObject = (songIndex, songs = album.songs) => {
    return songs[songIndex] || null
}

export const getSongIsLogue = (songIndex, songs = album.songs) => {
    return songIndex === 0 || songIndex === songs.length - 1
}

export const getSongTitle = ({
    songIndex,
    songs = album.songs,
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

export const getVerseObject = (
    songIndex,
    verseIndex,
    songs = album.songs
) => {

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

export const getWormholeLink = (
    annotationObject,
    annotationAnchorIndex
) => {

    const { cards } = annotationObject

    // Loop through cards until we find the wormhole card.
    return cards.reduce((foundCardObject, cardObject) => {
        const { wormholeLinks } = cardObject

        if (wormholeLinks) {
            // Loop through wormhole links until we find the wormhole index we want.
            foundCardObject = wormholeLinks.reduce((foundWormholeLink, wormholeLink) => {
                if (wormholeLink[SOURCE_WORMHOLE_INDEX] === annotationAnchorIndex) {
                    foundWormholeLink = wormholeLink
                }

                return foundWormholeLink
            }, null)
        }

        return foundCardObject
    }, null)
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
    scenes = album.scenes
) => {
    const sceneObject = scenes[songIndex]

    return sceneObject[sceneIndex] || null
}

/*********
 * ADMIN *
 *********/

export const getSongTasks = (songIndex) => {
    const selectedSong = getSongObject(songIndex)
    return selectedSong.tasks || []
}

export const getDrawings = () => {
    const { drawings } = album
    return drawings
}

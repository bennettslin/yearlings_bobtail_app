/**
 * Fetch album data. Should know nothing else. Only the album helper will pass
 * a songs argument, since it is executing before the AlbumData object has been
 * created.
 */

import AlbumData from '../album-data'
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

export const getMaxStanzaTimesCount = () => {
    return AlbumData.maxStanzaTimesCount
}

/*********
 * SONGS *
 *********/

export const getSongsCount = (songs = AlbumData.songs) => {
    return songs.length
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
    return scores[songIndex]
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

export const getSongStanzaTimes = (songIndex) => {
    const selectedSong = getSongObject(songIndex)
    return selectedSong.stanzaTimes || []
}

export const getSongVerseTimes = (songIndex) => {
    const selectedSong = getSongObject(songIndex)
    return selectedSong.verseTimes || []
}

export const getStanzaTimeObject = (songIndex, stanzaTimeIndex) => {
    const songObject = getSongObject(songIndex),
        { stanzaTimes: stanzaTimesArray } = songObject

    // Logues do not have this array.
    if (stanzaTimesArray && stanzaTimeIndex < stanzaTimesArray.length) {

        // Return stanza time object.
        return stanzaTimesArray[stanzaTimeIndex]

    } else {

        // Return placeholder object.
        return { type: 'placeholder',
                 time: songObject.totalTime }
    }
}

/**********
 * LYRICS *
 **********/

export const getLyricUnitsCount = (songIndex) => {
    const songs = getSongObject(songIndex)
    return songs.lyrics ? songs.lyrics.length : 0
}

export const getLyricsUnitArray = (songIndex, unitIndex) => {
    const songs = getSongObject(songIndex)
    return songs.lyrics ? songs.lyrics[unitIndex] : []
}

export const getVerseObject = (songIndex, verseIndex, songs = AlbumData.songs) => {
    const { lyrics } = getSongObject(songIndex, songs)
    return _parseLyrics(lyrics, verseIndex)
}

/***************
 * ANNOTATIONS *
 ***************/

export const getAnnotationsCount = (songIndex) => {
    const song = getSongObject(songIndex),
        { annotations } = song

    return annotations ? annotations.length : 0
}

export const getAnnotationObject = (songIndex, annotationIndex, songs) => {
    const { annotations } = getSongObject(songIndex, songs)
    return annotations ? annotations[annotationIndex - 1] : null
}

export const getCarouselOrPopupAnnotationObject = ({
    selectedSongIndex,
    carouselAnnotationIndex,
    popupAnnotationSongIndex,
    popupAnnotationIndex
}) => {
    // All conditional upon whether carousel annotation index exists.
    const annotationSongIndex = carouselAnnotationIndex ?
            selectedSongIndex : popupAnnotationSongIndex,
        annotationIndex = carouselAnnotationIndex ?
            carouselAnnotationIndex : popupAnnotationIndex

    return getAnnotationObject(annotationSongIndex, annotationIndex)
}

export const getCarouselOrPopupCardObject = (props) => {
    // Called by annotation card component.

    const annotationObject = getCarouselOrPopupAnnotationObject(props),
        { cardIndex } = props

    if (annotationObject) {
        return annotationObject.cards[cardIndex]
    }
}

export const getCarouselOrPopupCardPortalLinksArray = (props) => {
    // Called by annotation portals block component.

    const cardObject = getCarouselOrPopupCardObject(props),
        portalLinksArray = cardObject ? cardObject.portalLinks : null

    return portalLinksArray
}

export const getCarouselOrPopupCardPortalObject = (props) => {
    // Called by annotation portal component.

    const portalLinksArray = getCarouselOrPopupCardPortalLinksArray(props),
        { portalLinkIndex } = props

    return portalLinksArray ? portalLinksArray[portalLinkIndex] : null
}

export const getAnnotationDotKeys = (songIndex, annotationIndex) => {
    const annotation = getAnnotationObject(songIndex, annotationIndex)
    return annotation ? annotation.dotKeys : null
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

            // Object with verseIndex key not found, so dig into subStanza.
        } else if (lyricEntity.subStanza) {
            return _parseLyrics(lyricEntity.subStanza, selectedVerseIndex)
        }
    }
}

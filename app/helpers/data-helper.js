// Fetch album data. Should know nothing else.

import AlbumData from '../album-data'

// TODO: Make it so that only one argument is needed.
export const getSongObject = (defaultSongIndex, prioritySongIndex, songs) => {
    const songIndex = isNaN(prioritySongIndex) ? defaultSongIndex : prioritySongIndex

    // Songs argument is only ever passed by build helper.
    songs = songs || AlbumData.songs

    return songs[songIndex]
}

// TODO: Make it so that only two arguments is needed.
export const getAnnotationObject = (songIndex, defaultAnnotationIndex, priorityAnnotationIndex) => {
    const { annotations } = getSongObject(songIndex)

    if (annotations) {
        // Valid annotation index will never be 0.
        const annotationIndex = priorityAnnotationIndex || defaultAnnotationIndex

        // Annotation index is 1-based.
        return annotations[annotationIndex - 1]
    } else {
        return null
    }
}

// TODO: Make it so that only two arguments is needed.
export const getVerseObject = (songIndex, defaultVerseIndex, priorityVerseIndex, songs) => {
    const { lyrics } = getSongObject(songIndex, undefined, songs),
        verseIndex = !isNaN(priorityVerseIndex) && priorityVerseIndex > -1 ?
            priorityVerseIndex : defaultVerseIndex

    return _parseLyrics(lyrics, verseIndex)
}

export const getOverview = (songIndex) => {
    const song = getSongObject(songIndex)
    return song.overview
}

// TODO: Make it so that only one argument is needed.
export const getIsLogue = (defaultSongIndex, prioritySongIndex, songs) => {
    const songIndex = isNaN(prioritySongIndex) ? defaultSongIndex : prioritySongIndex

    songs = songs || AlbumData.songs

    return songIndex === 0 || songIndex === songs.length - 1
}

export const getBookColumnIndex = (songIndex) => {
    const { bookStartingIndices } = AlbumData

    // Assumes two book starting indices.
    return 1 + (songIndex >= bookStartingIndices[1])
}

// TODO: Make it so that only one argument is needed.
export const getSongTimes = (defaultSongIndex, prioritySongIndex) => {
    const selectedSong = getSongObject(defaultSongIndex, prioritySongIndex)
    return selectedSong.times || []
}

export const getSongTitle = (songIndex, songs) => {
    const song = getSongObject(songIndex, undefined, songs),
        isLogue = getIsLogue(songIndex, undefined, songs)

    return `${!isLogue ? songIndex + '. ' : ''}${song.title}`
}

/***********
 * HELPERS *
 ***********/

const _parseLyrics = (lyric, selectedVerseIndex) => {
    // Recurse until object with verse index is found.

    // Method does not apply to logues.
    if (lyric) {
        if (lyric.verseIndex === selectedVerseIndex) {
            return lyric

        } else if (Array.isArray(lyric)) {
            return lyric.reduce((childSelectedLyric, childLyric) => {
                return childSelectedLyric || _parseLyrics(childLyric, selectedVerseIndex)
            }, null)

            // Object with verseIndex key not found, so dig into subStanza.
        } else if (lyric.subStanza) {
            return _parseLyrics(lyric.subStanza, selectedVerseIndex)
        }
    }
}

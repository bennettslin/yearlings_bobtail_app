/**
 * Fetch album data. Should know nothing else. Only the build helper will pass
 * a songs argument, since it is executing before the AlbumData object has been
 * created.
 */
import AlbumData from '../album-data'

export const getSongObject = (songIndex, songs = AlbumData.songs) => {
    return songs[songIndex]
}

export const getAnnotationObject = (songIndex, annotationIndex) => {
    const { annotations } = getSongObject(songIndex)
    return annotations ? annotations[annotationIndex - 1] : null
}

export const getVerseObject = (songIndex, verseIndex, songs = AlbumData.songs) => {
    const { lyrics } = getSongObject(songIndex, songs)
    return _parseLyrics(lyrics, verseIndex)
}

export const getOverview = (songIndex) => {
    const song = getSongObject(songIndex)
    return song.overview
}

export const getIsLogue = (songIndex, songs = AlbumData.songs) => {
    return songIndex === 0 || songIndex === songs.length - 1
}

export const getBookColumnIndex = (songIndex) => {
    const { bookStartingIndices } = AlbumData

    // Assumes two book starting indices.
    return 1 + (songIndex >= bookStartingIndices[1])
}

export const getSongTimes = (songIndex) => {
    const selectedSong = getSongObject(songIndex)
    return selectedSong.times || []
}

export const getSongTitle = (songIndex, songs) => {
    const song = getSongObject(songIndex, songs),
        isLogue = getIsLogue(songIndex, songs)

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

/**
 * Fetch album data. Should know nothing else. Only the build helper will pass
 * a songs argument, since it is executing before the AlbumData object has been
 * created.
 */
import AlbumData from '../album-data'

export const getSongObject = (songIndex, songs = AlbumData.songs) => {
    return songs[songIndex] || null
}

export const getAnnotationsArray = (songIndex) => {
    const songs = getSongObject(songIndex)
    return songs.annotations || []
}

export const getAnnotationObject = (songIndex, annotationIndex) => {
    const { annotations } = getSongObject(songIndex)
    return annotations ? annotations[annotationIndex - 1] : null
}

export const getLyricsArray = (songIndex) => {
    const songs = getSongObject(songIndex)
    return songs.lyrics || []
}

export const getVerseObject = (songIndex, verseIndex, songs = AlbumData.songs) => {
    const { lyrics } = getSongObject(songIndex, songs)
    return _parseLyrics(lyrics, verseIndex)
}

export const getOverview = (songIndex) => {
    const song = getSongObject(songIndex)
    return song ? song.overview : ''
}

export const getIsLogue = (songIndex, songs = AlbumData.songs) => {
    return songIndex === 0 || songIndex === songs.length - 1
}

export const getSongsLength = (songs = AlbumData.songs) => {
    return songs.length
}

export const getAnnotationsLength = (songIndex) => {
    return getAnnotationsArray(songIndex).length
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
        const isLogue = getIsLogue(songIndex, songs)
        return `${showIndex && !isLogue ? songIndex + '. ' : ''}${song.title}`
    }
}

export const getSongAnnotationsDotKeys = (songIndex) => {
    const selectedSong = getSongObject(songIndex)
    return selectedSong.annotationsDotKeys || []
}

export const getSongStanzaTimes = (songIndex) => {
    const selectedSong = getSongObject(songIndex)
    return selectedSong.stanzaTimes || []
}

export const getSongTotalTime = (songIndex) => {
    const selectedSong = getSongObject(songIndex)
    return selectedSong.totalTime || Number.MAX_SAFE_INTEGER
}

export const getSongVerseTimes = (songIndex) => {
    const selectedSong = getSongObject(songIndex)
    return selectedSong.verseTimes || []
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

export const getMp3s = () => {
    const { mp3s } = AlbumData
    return mp3s
}

export const getScoreForIndex = (songIndex) => {
    const { scores } = AlbumData
    return scores[songIndex]
}

/*********
 * ADMIN *
 *********/

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

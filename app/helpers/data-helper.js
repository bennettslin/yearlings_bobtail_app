// Fetch album data. Should know nothing else.

import AlbumData from '../album-data'

// TODO: Make it so that only one argument is needed.
export const getSongObject = (defaultSongIndex, prioritySongIndex) => {
    const { songs } = AlbumData,
        songIndex = isNaN(prioritySongIndex) ? defaultSongIndex : prioritySongIndex

    return songs[songIndex]
}

export const getIsLogue = ({ selectedSongIndex }, nextSongIndex) => {
    const { songs } = AlbumData,
        songIndex = isNaN(nextSongIndex) ? selectedSongIndex : nextSongIndex

    return songIndex === 0 || songIndex === songs.length - 1
}

export const getAnnotationObject = ({
    selectedAnnotationIndex,
    selectedSong,
...other }, annotationIndex) => {

    selectedSong = selectedSong || getSongObject(other.selectedSongIndex)
    return selectedSong.annotations ?
            selectedSong.annotations[(annotationIndex || selectedAnnotationIndex) - 1] : null
}

export const getAnnotationsDotKeys = (props) => {
    const selectedSong = props.selectedSong || getSongObject(props.selectedSongIndex)

    return selectedSong ? selectedSong.annotations.map(annotation => {
        return annotation.dotKeys
    }) : null
}

export const getAnnotationsLength = (props) => {
    const selectedSong = getSongObject(props.selectedSongIndex)
    return selectedSong.annotations ? selectedSong.annotations.length : 0
}

export const getBookColumnIndex = (props, selectedSongIndex) => {
    const { bookStartingIndices } = props,
        songIndex = typeof selectedSongIndex !== 'undefined' ? selectedSongIndex : props.selectedSongIndex

    // Assumes two book starting indices.
    return songIndex < bookStartingIndices[1] ? 1 : 2
}

export const getOverview = (props, nextSongIndex) => {
    const song = getSongObject(props.selectedSongIndex, nextSongIndex)
    return song.overview
}

export const getSongTimes = (props, nextSongIndex) => {
    const selectedSong = getSongObject(props.selectedSongIndex, nextSongIndex)
    return selectedSong.times || []
}

export const getSongTitle = (props, isLogue) => {
    const songIndex = props.songIndex || props.selectedSongIndex,
        song = props.song || props.songs[songIndex]

    return `${!isLogue ? songIndex + '. ' : ''}${song.title}`
}

export const getVerseObject = ({ selectedVerseIndex, ...other }, verseIndex) => {
    const { lyrics } = getSongObject(other.selectedSongIndex)

    return _parseLyrics(lyrics, (!isNaN(verseIndex) && verseIndex > -1) ? verseIndex : selectedVerseIndex)
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

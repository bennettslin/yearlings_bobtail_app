// Fetch album data. Should know nothing else.

export const getSongObject = ({ selectedSongIndex, songs }, nextSongIndex) => {
    return songs[isNaN(nextSongIndex) ? selectedSongIndex : nextSongIndex]
}

export const getIsLogue = ({ selectedSongIndex, songs }, nextSongIndex) => {
    const songIndex = isNaN(nextSongIndex) ? selectedSongIndex : nextSongIndex
    return songIndex === 0 || songIndex === songs.length - 1
}

export const getAnnotationObject = ({
    selectedAnnotationIndex,
    selectedSong,
...other }, annotationIndex) => {

    selectedSong = selectedSong || getSongObject(other)
    return selectedSong.annotations ?
            selectedSong.annotations[(annotationIndex || selectedAnnotationIndex) - 1] : null
}

export const getAnnotationsDotKeys = (props) => {
    const selectedSong = props.selectedSong || getSongObject(props)

    return selectedSong ? selectedSong.annotations.map(annotation => {
        return annotation.dotKeys
    }) : null
}

export const getAnnotationsLength = (props) => {
    const selectedSong = getSongObject(props)
    return selectedSong.annotations ? selectedSong.annotations.length : 0
}

export const getBookColumnIndex = (props, selectedSongIndex) => {
    const { bookStartingIndices } = props,
        songIndex = typeof selectedSongIndex !== 'undefined' ? selectedSongIndex : props.selectedSongIndex

    // Assumes two book starting indices.
    return songIndex < bookStartingIndices[1] ? 1 : 2
}

export const getOverview = (props, nextSongIndex) => {
    const song = getSongObject(props, nextSongIndex)
    return song.overview
}

export const getSongTimes = (props, nextSongIndex) => {
    const selectedSong = getSongObject(props, nextSongIndex)
    return selectedSong.times || []
}

export const getSongTitle = (props, isLogue) => {
    const songIndex = props.songIndex || props.selectedSongIndex,
        song = props.song || props.songs[songIndex]

    return `${!isLogue ? songIndex + '. ' : ''}${song.title}`
}

export const getVerseObject = ({ selectedVerseIndex, ...other }, verseIndex) => {
    const { lyrics } = getSongObject(other)

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

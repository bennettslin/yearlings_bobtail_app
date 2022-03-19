import {
    getSong,
    getSongIsLogue,
} from './songs'
import { getArrayOfLength } from '../../helpers/general'

export const getVerseIndices = songIndex => (
    getSongIsLogue(songIndex) ?
        [] :
        getArrayOfLength(
            // Which verse array we use is arbitrary.
            getSong(songIndex)?.verseDurations.length,
        )
)

export const getIsVerseValid = (songIndex, verseIndex) => {
    const verseIndicesArray = getVerseIndices(songIndex)
    return verseIndicesArray.some(index => index === verseIndex)
}

export const getValidVerseIndex = (songIndex, verseIndex) => (
    getIsVerseValid(songIndex, verseIndex) ? verseIndex : 0
)

export const getVerse = (songIndex, verseIndex) => {
    const { verseLyrics } = getSong(songIndex)
    return verseLyrics ? verseLyrics[verseIndex] : null
}

export const getVerseCountForSong = songIndex => (
    getVerseIndices(songIndex).length
)

export const getSceneIndexForVerse = (songIndex, verseIndex) => {
    // During song change, verse cursor index is -1.
    if (verseIndex === -1) {
        return -1
    }

    const { verseSceneIndices } = getSong(songIndex)
    return verseSceneIndices ? verseSceneIndices[verseIndex] : 0
}

export const getStanzaIndexForVerse = (songIndex, verseIndex) => {
    // During song change, verse cursor index is -1.
    if (verseIndex === -1) {
        return -1
    }

    const { verseStanzaIndices = [] } = getSong(songIndex)
    return verseStanzaIndices[verseIndex]
}

export const getLastAnnotationIndexForVerse = (songIndex, verseIndex) => {
    const { verseLastAnnotationIndices } = getSong(songIndex)
    return verseLastAnnotationIndices[verseIndex]
}

export const getAnnotationIndicesForVerse = (songIndex, verseIndex) => {
    const { verseAnnotationIndicesList } = getSong(songIndex)
    return verseAnnotationIndicesList[verseIndex]
}

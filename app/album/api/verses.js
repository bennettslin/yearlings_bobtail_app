import {
    getFinalSong,
    getSongIsLogue
} from './songs'
import { getArrayOfLength } from '../../helpers/general'

export const getVerseIndices = (songIndex) => (
    getSongIsLogue(songIndex) ?
        [] :
        getArrayOfLength(
            // Which verse array we use is arbitrary.
            getFinalSong(songIndex).verseDurations.length
        )
)

export const getIsVerseValid = (songIndex, verseIndex) => {
    const verseIndicesArray = getVerseIndices(songIndex)
    return verseIndicesArray.some(index => index === verseIndex)
}

export const getVerse = (songIndex, verseIndex) => {
    const { indexedVerses } = getFinalSong(songIndex)
    return indexedVerses ? indexedVerses[verseIndex] : null
}

export const getVerseCountForSong = (songIndex) => (
    getVerseIndices(songIndex).length
)

export const getSceneIndexForVerse = (songIndex, verseIndex) => {
    const { verseSceneIndices } = getFinalSong(songIndex)
    return verseSceneIndices ? verseSceneIndices[verseIndex] : 0
}

export const getStanzaIndexForVerse = (songIndex, verseIndex) => {
    const { verseStanzaIndices } = getFinalSong(songIndex)
    return verseStanzaIndices[verseIndex]
}


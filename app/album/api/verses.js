import {
    getSong,
    getSongIsLogue
} from './songs'
import { getArrayOfLength } from '../../helpers/general'

export const getVerseIndices = songIndex => (
    getSongIsLogue(songIndex) ?
        [] :
        getArrayOfLength(
            // Which verse array we use is arbitrary.
            getSong(songIndex).verseDurations.length
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
    const { indexedVerses } = getSong(songIndex)
    return indexedVerses ? indexedVerses[verseIndex] : null
}

export const getVerseCountForSong = songIndex => (
    getVerseIndices(songIndex).length
)

export const getSceneIndexForVerse = (songIndex, verseIndex) => {
    const { verseSceneIndices } = getSong(songIndex)
    return verseSceneIndices ? verseSceneIndices[verseIndex] : 0
}

export const getStanzaIndexForVerse = (songIndex, verseIndex) => {
    const { verseStanzaIndices } = getSong(songIndex)
    return verseStanzaIndices[verseIndex]
}


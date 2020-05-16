import {
    getSong,
    getFinalSong,
    getFinalSongIsLogue
} from './songs'
import { getArrayOfLength } from '../../helpers/general'

export const getVerse = (
    songIndex,
    verseIndex
) => {
    const { indexedVerses } = getSong(songIndex)
    return indexedVerses ?
        indexedVerses[verseIndex] :
        null
}

export const isValidVerse = (songIndex, verseIndex) => {
    return Boolean(getVerse(songIndex, verseIndex))
}

export const getVerseIndicesArray = (songIndex) => (
    getFinalSongIsLogue(songIndex) ?
        [] :
        getArrayOfLength(
            // Which verse array we use is arbitrary.
            getFinalSong(songIndex).verseDurations.length
        )
)

export const getVerseCountForSong = (songIndex) => (
    getVerseIndicesArray(songIndex).length
)

const getSongVerseConfigs = (songIndex) => {
    const { verseConfigs } = getSong(songIndex)
    return verseConfigs || []
}

export const getSceneIndexForVerse = (songIndex, verseIndex) => {
    const verseConfigs = getSongVerseConfigs(songIndex)
    return verseConfigs.length ?
        verseConfigs[verseIndex].sceneIndex :
        0
}

export const getStanzaIndexForVerse = (songIndex, verseIndex) => {
    const { verseStanzaIndicesList } = getFinalSong(songIndex)
    return verseStanzaIndicesList[verseIndex]
}


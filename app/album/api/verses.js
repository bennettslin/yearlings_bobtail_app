import { getSong, getFinalSong } from './songs'

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

export const getSongVerseConfigs = (songIndex) => {
    const { verseConfigs } = getSong(songIndex)
    return verseConfigs || []
}

export const getSongVersesCount = (songIndex) => {
    return getSongVerseConfigs(songIndex).length
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

export const getDurationForVerse = (songIndex, verseIndex) => {
    const { verseDurations } = getFinalSong(songIndex)
    return verseDurations[verseIndex]
}


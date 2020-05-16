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

export const getSceneIndexForVerseIndex = (songIndex, verseIndex) => {
    const verseConfigs = getSongVerseConfigs(songIndex)
    return verseConfigs.length ?
        verseConfigs[verseIndex].sceneIndex :
        0
}

export const getStanzaIndexForVerseIndex = (songIndex, stanzaIndex) => {
    const { verseStanzaIndicesList } = getFinalSong(songIndex)
    return verseStanzaIndicesList[stanzaIndex]
}

export const getVerseDurationForVerseIndex = (songIndex, verseIndex) => {
    const verseConfigs = getSongVerseConfigs(songIndex)
    return verseConfigs.length ?
        verseConfigs[verseIndex].verseDuration :
        0
}

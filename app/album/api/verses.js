import { getSong } from './songs'

export const getIndexedVersesForUnit = (unit) => {
    /**
     * Only main verses and sub verses are indexed. Side cards and unit dots
     * are not indexed.
     */
    const {
        mainVerses,
        unitMap: { subVerse }
    } = unit

    return [
        ...mainVerses || [],
        ...subVerse || []
    ]
}

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

export const getStanzaIndexForVerseIndex = (songIndex, verseIndex) => {
    const verseConfigs = getSongVerseConfigs(songIndex)
    return verseConfigs.length ?
        verseConfigs[verseIndex].stanzaIndex :
        0
}

export const getVerseDurationForVerseIndex = (songIndex, verseIndex) => {
    const verseConfigs = getSongVerseConfigs(songIndex)
    return verseConfigs.length ?
        verseConfigs[verseIndex].verseDuration :
        0
}

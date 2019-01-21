import { getSong } from 'album/api/songs'

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

export const getSongVerseConfigs = (songIndex) => {
    const { songVerseConfigs } = getSong(songIndex)
    return songVerseConfigs || []
}

export const getSongVersesCount = (songIndex) => {
    return getSongVerseConfigs(songIndex).length
}

export const getSceneIndexForVerseIndex = (
    songIndex,
    verseIndex

) => {
    if (verseIndex === -1) {
        return -1
    }

    const songVerseConfigs = getSongVerseConfigs(songIndex)
    return songVerseConfigs.length ?
        songVerseConfigs[verseIndex].sceneIndex :
        0
}

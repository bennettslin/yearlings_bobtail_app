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
    const { songVerseConfigs } = getSong(songIndex)
    return songVerseConfigs ?
        songVerseConfigs.length :
        0
}

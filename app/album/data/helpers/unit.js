import albumLyrics from '../lyrics'

export const _getIndexedVersesForUnit = (unit) => {
    /**
     * Only main verses and sub verses are indexed. Side cards and unit dots
     * are not indexed.
     */
    const {
        unitMap: { subVerse },
        mainVerses
    } = unit

    return [
        ...mainVerses || [],
        ...subVerse || []
    ]
}

export const addUnitAndVerseMetadata = (songIndex, finalSong) => {
    const { lyricUnits } = albumLyrics[songIndex]

    const
        unitVerseIndicesList = [],
        indexedVerses = [],
        verseStartTimes = []
    let verseIndex = 0

    lyricUnits.forEach(unit => {
        const verseIndices = []

        _getIndexedVersesForUnit(unit).forEach(verse => {
            verseIndices.push(verseIndex)

            // Also tell verse its index.
            verse.verseIndex = verseIndex
            indexedVerses.push(verse)

            verseStartTimes.push(verse.time)
            verseIndex++
        })

        unitVerseIndicesList.push(verseIndices)
    })

    finalSong.unitVerseIndicesList = unitVerseIndicesList
    finalSong.indexedVerses = indexedVerses
    finalSong.verseStartTimes = verseStartTimes

    return {
        unitVerseIndicesList,
        verseStartTimes
    }
}

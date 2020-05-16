export const _getIndexedVersesForUnit = (unit) => {
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

export const addUnitVerseIndices = (song, finalSong) => {
    const { lyricUnits } = song

    const unitVerseIndicesList = []
    let verseIndex = 0

    lyricUnits.forEach(unit => {
        const verseIndices = []

        _getIndexedVersesForUnit(unit).forEach(() => {
            verseIndices.push(verseIndex)
            verseIndex++
        })

        unitVerseIndicesList.push(verseIndices)
    })

    finalSong.unitVerseIndicesList = unitVerseIndicesList
    return unitVerseIndicesList
}

export const addIndexedVerses = (song, finalSong) => {
    const { lyricUnits } = song

    const
        indexedVerses = [],
        verseStartTimes = []
    let verseIndex = 0

    lyricUnits.forEach(unit => {

        _getIndexedVersesForUnit(unit).forEach(verse => {
            // Also tell verse its index.
            verse.verseIndex = verseIndex
            indexedVerses.push(verse)

            verseStartTimes.push(verse.time)
            verseIndex++
        })
    })

    finalSong.indexedVerses = indexedVerses
    finalSong.verseStartTimes = verseStartTimes

    return {
        indexedVerses,
        verseStartTimes
    }
}

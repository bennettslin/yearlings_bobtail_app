import albumLyrics from '../lyrics'

import { addVerseDurations } from './verse'

const _getIndexedVersesForUnit = (unit) => {
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

const _addUnitVerseIndices = (songIndex, finalSong) => {
    const { lyricUnits } = albumLyrics[songIndex]

    const
        unitVerseIndicesList = [],
        indexedVerses = [],
        verseStartTimes = []
    let verseIndex = 0

    lyricUnits.forEach(unit => {
        const unitVerseIndices = []

        _getIndexedVersesForUnit(unit).forEach(verse => {
            unitVerseIndices.push(verseIndex)

            // Also tell verse its index.
            verse.verseIndex = verseIndex
            indexedVerses.push(verse)

            verseStartTimes.push(verse.time)
            verseIndex++
        })

        unitVerseIndicesList.push(unitVerseIndices)
    })

    finalSong.unitVerseIndicesList = unitVerseIndicesList
    finalSong.indexedVerses = indexedVerses
    finalSong.verseStartTimes = verseStartTimes

    return {
        unitVerseIndicesList,
        verseStartTimes
    }
}

export const addUnitAndVerseMetadata = ({
    songIndex,
    songDuration,
    finalSong
}) => {
    const {
        unitVerseIndicesList,
        verseStartTimes
    } = _addUnitVerseIndices(songIndex, finalSong)

    addVerseDurations({
        songDuration,
        verseStartTimes,
        finalSong
    })

    return {
        unitVerseIndicesList,
        verseStartTimes
    }
}

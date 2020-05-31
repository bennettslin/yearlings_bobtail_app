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

const _addUnitVerseLists = (songIndex, song) => {
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

    song.unitVerseIndicesList = unitVerseIndicesList
    song.indexedVerses = indexedVerses
    song.verseStartTimes = verseStartTimes

    // TODO: Eventually get rid of this.
    song.lyricUnits = lyricUnits

    return {
        unitVerseIndicesList,
        verseStartTimes
    }
}

export const addUnitAndVerseMetadata = ({
    songIndex,
    songDuration,
    song
}) => {
    const {
        unitVerseIndicesList,
        verseStartTimes
    } = _addUnitVerseLists(songIndex, song)

    addVerseDurations({
        songDuration,
        verseStartTimes,
        song
    })

    return {
        unitVerseIndicesList,
        verseStartTimes
    }
}

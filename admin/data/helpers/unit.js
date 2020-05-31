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
        verseStartTimes = [],
        verses = []
    let verseIndex = 0

    lyricUnits.forEach(unit => {
        const unitVerseIndices = []

        _getIndexedVersesForUnit(unit).forEach(verse => {
            unitVerseIndices.push(verseIndex)
            verses.push(verse)

            // Also tell verse its index.
            verse.verseIndex = verseIndex
            verseStartTimes.push(verse.time)
            verseIndex++
        })

        unitVerseIndicesList.push(unitVerseIndices)
    })

    song.unitVerseIndicesList = unitVerseIndicesList
    song.verseStartTimes = verseStartTimes

    // TODO: Eventually get rid of this.
    song.lyricUnits = lyricUnits

    return {
        unitVerseIndicesList,
        verseStartTimes,
        verses
    }
}

export const addUnitAndVerseMetadata = ({
    songIndex,
    songDuration,
    song
}) => {
    const {
        unitVerseIndicesList,
        verseStartTimes,
        verses
    } = _addUnitVerseLists(songIndex, song)

    addVerseDurations({
        songDuration,
        verseStartTimes,
        song
    })

    return {
        unitVerseIndicesList,
        verseStartTimes,
        verses
    }
}

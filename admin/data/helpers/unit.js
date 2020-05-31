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

export const addLastUnitDotIndex = (songIndex, song) => {
    /**
     * Return an index if the last unit is a dot card. Otherwise, return -1.
     * Note that this assumes there can only be one last unit that isn't a
     * stanza unit.
     */
    const
        { lyricUnits } = albumLyrics[songIndex],
        lastUnitIndex = lyricUnits.length - 1,
        {
            unitMap: { unitDot },
            mainVerses
        } = lyricUnits[lastUnitIndex]

    let lastUnitDotIndex = -1

    if (unitDot && !mainVerses) {
        lastUnitDotIndex = lyricUnits.length - 1
    }

    song.lastUnitDotIndex = lastUnitDotIndex
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

    addLastUnitDotIndex(songIndex, song)

    return {
        unitVerseIndicesList,
        verseStartTimes,
        verses
    }
}

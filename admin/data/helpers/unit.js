import albumLyrics from '../lyrics'

import { addVerseDurations } from './verse'

const _getIndexedVersesForUnit = (unit) => {
    /**
     * Only main verses and sub verses are indexed. Side cards and unit dots
     * are not indexed.
     */
    const {
        unitMap: { subCard },
        mainVerses
    } = unit

    return [
        ...mainVerses || [],
        ...subCard || []
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

    return {
        unitVerseIndicesList,
        verseStartTimes,
        verses
    }
}

const _addUnitLists = (songIndex, song) => {
    const { lyricUnits } = albumLyrics[songIndex]

    const
        unitMainVerses = [],
        unitSubsequents = [],
        withUnitDots = {}
    let withUnitBottomSideCard,
        withUnitSubCards,
        withUnitSideCards,
        withUnitSideSubCards,
        withUnitSubCardTypes,
        withUnitSideCardTypes,
        withUnitSideSubCardTypes

    lyricUnits.forEach((unit, unitIndex) => {
        unitMainVerses.push(unit.mainVerses || null)
        unitSubsequents.push(unit.unitMap.subsequent || false)

        const {
            unitMap: {
                unitDot,
                subCard,
                sideCard,
                sideSubCard,
                isBottomSideCard,
                subCardType,
                sideCardType,
                sideSubCardType
            }
        } = unit

        if (unitDot) {
            withUnitDots[unitIndex] = unitDot
        }
        if (subCard) {
            withUnitSubCards = withUnitSubCards || {}
            withUnitSubCards[unitIndex] = subCard
        }
        if (sideCard) {
            withUnitSideCards = withUnitSideCards || {}
            withUnitSideCards[unitIndex] = sideCard
        }
        if (sideSubCard) {
            withUnitSideSubCards = withUnitSideSubCards || {}
            withUnitSideSubCards[unitIndex] = sideSubCard
        }
        if (subCardType) {
            withUnitSubCardTypes = withUnitSubCardTypes || {}
            withUnitSubCardTypes[unitIndex] = subCardType
        }
        if (sideCardType) {
            withUnitSideCardTypes = withUnitSideCardTypes || {}
            withUnitSideCardTypes[unitIndex] = sideCardType
        }
        if (sideSubCardType) {
            withUnitSideSubCardTypes = withUnitSideSubCardTypes || {}
            withUnitSideSubCardTypes[unitIndex] = sideSubCardType
        }
        if (isBottomSideCard) {
            withUnitBottomSideCard = withUnitBottomSideCard || {}
            withUnitBottomSideCard[unitIndex] = true
        }
    })

    // TODO: Eventually get rid of this.
    song.unitMainVerses = unitMainVerses

    song.unitSubsequents = unitSubsequents
    song.withUnitDots = withUnitDots

    if (withUnitSubCards) {
        song.withUnitSubCards = withUnitSubCards
    }
    if (withUnitSideCards) {
        song.withUnitSideCards = withUnitSideCards
    }
    if (withUnitSideSubCards) {
        song.withUnitSideSubCards = withUnitSideSubCards
    }
    if (withUnitSubCardTypes) {
        song.withUnitSubCardTypes = withUnitSubCardTypes
    }
    if (withUnitSideCardTypes) {
        song.withUnitSideCardTypes = withUnitSideCardTypes
    }
    if (withUnitSideSubCardTypes) {
        song.withUnitSideSubCardTypes = withUnitSideSubCardTypes
    }
    if (withUnitBottomSideCard) {
        song.withUnitBottomSideCard = withUnitBottomSideCard
    }
}

const _addLastUnitDotIndex = (songIndex, song) => {
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

    _addUnitLists(songIndex, song)
    _addLastUnitDotIndex(songIndex, song)

    return {
        unitVerseIndicesList,
        verseStartTimes,
        verses
    }
}

import { getSongObject } from 'album/api/songs'

export const getAllTimedVerses = (unit) => {
    const {
        lyricUnit,
        unitMap: { subCard }
    } = unit

    return [
        ...lyricUnit || [],
        ...subCard || []
    ]
}

export const getVerseObject = (
    songIndex,
    verseIndex
) => {
    const { lyricUnits } = getSongObject(songIndex)

    return lyricUnits.reduce((foundVerse, unit) => (
        foundVerse || getAllTimedVerses(unit).find(verse => (
            verse.verseIndex === verseIndex
        ))
    ), false)
}

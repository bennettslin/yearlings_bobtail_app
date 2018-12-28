import { getSongObject } from 'album/api/songs'

export const getAllSelectableVerses = (unit) => {
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

    if (lyricUnits) {
        return lyricUnits.reduce((foundVerse, unit) => (
            foundVerse || getAllSelectableVerses(unit).find(verse => (
                verse.verseIndex === verseIndex
            ))
        ), false)

    } else {
        return null
    }
}

export const getSongVerseConfigs = (songIndex) => {
    const { songVerseConfigs } = getSongObject(songIndex)
    return songVerseConfigs || []
}

export const getSongVersesCount = (songIndex) => {
    const { songVerseConfigs } = getSongObject(songIndex)
    return songVerseConfigs.length || 0
}

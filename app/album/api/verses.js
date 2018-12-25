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
    const selectedSong = getSongObject(songIndex)
    return selectedSong.songVerseConfigs || []
}

export const getSongVersesCount = (songIndex) => {
    const selectedSong = getSongObject(songIndex)
    return selectedSong.songVerseConfigs.length || 0
}

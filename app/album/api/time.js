import {
    getSongObject,
    getSongIsLogue
} from 'album/api/songs'

export const getSongTotalTime = (songIndex) => {
    const selectedSong = getSongObject(songIndex)
    return selectedSong.totalTime || Number.MAX_SAFE_INTEGER
}

export const getTimeForVerseIndex = (songIndex, verseIndex) => {

    // Return 0 if logue.
    if (getSongIsLogue(songIndex)) {
        return 0
    }

    const selectedSong = getSongObject(songIndex),
        { songVerseConfigs } = selectedSong

    return songVerseConfigs[verseIndex].verseStartTime
}

import { getSong } from './songs'
import { getSongVerseConfigs } from './verses'

export const getSongTotalTime = (songIndex) => {
    const { totalTime } = getSong(songIndex)
    return totalTime || Number.MAX_SAFE_INTEGER
}

export const getStartTimeForVerseIndex = (songIndex, verseIndex) => {
    if (verseIndex === -1) {
        return 0
    }

    const songVerseConfigs = getSongVerseConfigs(songIndex)
    return songVerseConfigs.length ?
        songVerseConfigs[verseIndex].verseStartTime :
        0
}

export const getEndTimeForVerseIndex = (songIndex, verseIndex) => {
    const songVerseConfigs = getSongVerseConfigs(songIndex)

    if (songVerseConfigs.length) {
        /**
         * If it's the last verse, the end time is the song's total time.
         * Otherwise, it's the start time of the next verse.
         */
        return verseIndex < songVerseConfigs.length - 1 ?
            getStartTimeForVerseIndex(songIndex, verseIndex + 1) :
            getSongTotalTime(songIndex)

    } else {
        return 0
    }
}

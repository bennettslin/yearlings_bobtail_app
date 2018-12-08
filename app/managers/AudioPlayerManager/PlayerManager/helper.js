import album from 'server/album'

import {
    getSongVersesCount,
    getSongVerseConfigs,
    getSongTotalTime
} from 'helpers/data'

export const getMp3s = () => {
    const { mp3s } = album
    return mp3s
}

export const getNextVerseIndex = (
    songIndex,
    verseIndex
) => {
    const songVersesCount = getSongVersesCount(songIndex)

    /**
     * If it's not the last verse, return the next verse. Otherwise, return
     * null.
     */
    return verseIndex < songVersesCount - 1 ?
        verseIndex + 1 :
        null
}

export const getTimeRelativeToVerseIndex = (
    songIndex,
    verseIndex,
    time
) => {
    /**
     * Note that when time is valid, this method returns -1 if time is before
     * verse, 1 if time is after it, and 0 if time is in it.
     */

    const songVerseConfigs = getSongVerseConfigs(songIndex),

        // Verse config already knows its own start time.
        { verseStartTime } = songVerseConfigs[verseIndex],

        /**
         * If it's the last verse, the end time is the song's total time.
         * Otherwise, it's the start time of the next verse.
         */
        verseEndTime =
            verseIndex < getSongVersesCount(songIndex) - 1 ?
                songVerseConfigs[verseIndex + 1].verseStartTime :
                getSongTotalTime(songIndex)

    if (time < verseStartTime) {
        return -1

    } else if (time >= verseEndTime) {
        return 1

    } else {
        return 0
    }
}

import album from 'server/album'

import {
    getSongVersesCount,
    getSongsNotLoguesCount,
    getSongVerseConfigs,
    getSongTotalTime
} from 'helpers/data'
import { convertBitNumberToTrueFalseKeys } from 'helpers/bit'

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

export const getNextPlayerSongIndexToRender = (
    selectedSongIndex,
    isSelectedLogue,
    canPlayThroughsObject
) => {
    /**
     * Given an array of players that have passed canPlayThrough, return
     * the next player in the queue to be rendered, starting with the
     * selected song.
     */

    const songsCount = getSongsNotLoguesCount()

    /**
     * If logue, set to first song. Song indices are 1-based.
     */
    let currentSongIndex = isSelectedLogue ? 1 : selectedSongIndex,
        nextPlayerSongIndex,
        counter = 0

    do {
        // Counter song can play through, so increment.
        if (canPlayThroughsObject[currentSongIndex]) {
            currentSongIndex = (currentSongIndex % songsCount) + 1

        /**
         * This is the first song that hasn't passed canPlayThrough
         * that is either the selected song or coming after it.
         */
        } else {
            nextPlayerSongIndex = currentSongIndex
        }

        counter++

    } while (!nextPlayerSongIndex && counter < songsCount)

    /**
     * Return next song in the queue, or else -1 if all are now rendered.
     */
    nextPlayerSongIndex = nextPlayerSongIndex || -1

    return nextPlayerSongIndex
}

export const getCanPlayThroughsObject = (canPlayThroughs) => {

    return convertBitNumberToTrueFalseKeys({
        keysCount: getSongsNotLoguesCount(),
        bitNumber: canPlayThroughs
    })
}

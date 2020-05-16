import mp3s from '../../../../assets/mp3s'

import { getSongVersesCount } from '../../../album/api/verses'
import {
    getStartTimeForVerse,
    getEndTimeForVerse
} from '../../../album/api/time'

export const getMp3s = () => (
    mp3s
)

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
    const
        verseStartTime = getStartTimeForVerse(songIndex, verseIndex),
        verseEndTime = getEndTimeForVerse(songIndex, verseIndex)

    if (time < verseStartTime) {
        return -1

    } else if (time >= verseEndTime) {
        return 1

    } else {
        return 0
    }
}

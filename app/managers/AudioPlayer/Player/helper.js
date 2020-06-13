import { getVerseCountForSong } from '../../../api/album/verses'
import {
    getStartTimeForVerse,
    getEndTimeForVerse
} from '../../../api/album/time'

const getNextVerseIndex = (
    songIndex,
    verseIndex
) => {
    const songVersesCount = getVerseCountForSong(songIndex)

    /**
     * If it's not the last verse, return the next verse. Otherwise, return
     * null.
     */
    return verseIndex < songVersesCount - 1 ?
        verseIndex + 1 :
        null
}

const getTimeRelativeToVerseIndex = (
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

export const getTimeInVerseStatus = ({
    currentTime,
    currentSongIndex,
    selectedSongIndex,
    selectedVerseIndex,
    selectedTime

}) => {
    if (
        currentTime === selectedTime ||
        currentSongIndex !== selectedSongIndex
    ) {
        return
    }

    const
        timeRelativeToSelectedVerse = getTimeRelativeToVerseIndex(
            selectedSongIndex,
            selectedVerseIndex,
            currentTime
        ),

        isTimeInSelectedVerse = timeRelativeToSelectedVerse === 0

    let nextVerseIndex,
        isTimeInNextVerse = false

    /**
     * This value will be 1 if time is after selected verse. In which case,
     * we will check if it's in the next verse.
     */
    if (timeRelativeToSelectedVerse === 1) {

        nextVerseIndex = getNextVerseIndex(
            selectedSongIndex,
            selectedVerseIndex
        )

        isTimeInNextVerse = nextVerseIndex && getTimeRelativeToVerseIndex(
            selectedSongIndex,
            nextVerseIndex,
            currentTime
        ) === 0
    }

    return {
        isTimeInSelectedVerse,
        isTimeInNextVerse,
        nextVerseIndex,
        isEndOfSong: timeRelativeToSelectedVerse === 1 && !nextVerseIndex
    }
}

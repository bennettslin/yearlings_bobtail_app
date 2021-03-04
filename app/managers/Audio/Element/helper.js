import {
    getAudioTimeFromCurrentTime,
    getEndTimeForVerse,
    getStartTimeForVerse,
} from '../../../api/album/time'
import { getVerseCountForSong } from '../../../api/album/verses'
import { getFormattedTime } from '../../../helpers/format'
import { getTimeDifference } from '../../../utils/logger/helpers/time'

export const getVerseForTimeFromListen = ({
    songIndex,
    currentVerseIndex,
    currentTime,
}) => {
    const
        audioTime = getAudioTimeFromCurrentTime(songIndex, currentTime),
        verseStartTime = getStartTimeForVerse(songIndex, currentVerseIndex),
        verseEndTime = getEndTimeForVerse(songIndex, currentVerseIndex)

    // Time is in a previous verse. But this should never happen from listen!
    if (audioTime < verseStartTime) {
        logError(
            `Out of sync! Time ${getFormattedTime(audioTime)} is before verse ${currentVerseIndex}!`,
            {
                action: 'playListen',
                label: `song: ${songIndex}, verse: ${currentVerseIndex}, time: ${audioTime}`,
            },
        )
        return null

    // Time is still in the current verse.
    } else if (audioTime < verseEndTime) {
        return currentVerseIndex

    // Time is in the next verse, or the current verse is the last verse.
    } else {
        return (
            currentVerseIndex < getVerseCountForSong(songIndex) - 1 ?
                // Return the next verse.
                currentVerseIndex + 1 :
                // Return the same verse, and let the player end itself.
                currentVerseIndex
        )
    }
}

export const logLoaded = ({
    songIndex,
    loadStartTime,
}) => {
    const timeDifference = getTimeDifference(loadStartTime)
    logSuccess(
        `Player ${songIndex} loaded after ${timeDifference}s.`,
        {
            action: 'playLoad',
            label: songIndex,
            value: timeDifference * 1000,
        },
    )
}

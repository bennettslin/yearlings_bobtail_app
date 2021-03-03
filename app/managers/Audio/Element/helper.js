import {
    getEndTimeForVerse,
    getStartTimeForVerse,
} from '../../../api/album/time'
import { getVerseCountForSong } from '../../../api/album/verses'
import { getFormattedTime } from '../../../helpers/format'

export const getVerseForTimeFromListen = ({
    currentTime,
    songIndex,
    verseIndex,
}) => {
    const
        verseStartTime = getStartTimeForVerse(songIndex, verseIndex),
        verseEndTime = getEndTimeForVerse(songIndex, verseIndex)

    // Time is in a previous verse. But this should never happen from listen!
    if (currentTime < verseStartTime) {
        logError(
            `Out of sync! Time ${getFormattedTime(currentTime)} is before verse ${verseIndex}!`,
            {
                action: 'playListen',
                label: `song: ${songIndex}, verse: ${verseIndex}, time: ${currentTime}`,
            },
        )
        return null

    // Time is still in the current verse.
    } else if (currentTime < verseEndTime) {
        return verseIndex

    // Time is in the next verse, or the current verse is the last verse.
    } else {
        return (
            verseIndex < getVerseCountForSong(songIndex) - 1 ?
                // Return the next verse.
                verseIndex + 1 :
                // Return the same verse, and let the player end itself.
                verseIndex
        )
    }
}

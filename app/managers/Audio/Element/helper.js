import {
    getAudioTimeForSong,
    getEndTimeForVerse,
    getStartTimeForVerse,
} from '../../../api/album/time'
import { getVerseCountForSong } from '../../../api/album/verses'
import { getFormattedTime } from '../../../helpers/format'
import { getTimeDifference } from '../../../utils/logger/helpers/time'
// import { AUDIO_OPTIONS, CONTINUE } from '../../../constants/options'

export const getCurrentIndicesForTime = ({
    songIndex,
    verseIndex,
    time,
    // audioOptionIndex,
}) => {
    const
        audioTime = getAudioTimeForSong(songIndex, time),
        verseStartTime = getStartTimeForVerse(songIndex, verseIndex),
        verseEndTime = getEndTimeForVerse(songIndex, verseIndex)
        // isContinueOption = AUDIO_OPTIONS[audioOptionIndex] === CONTINUE

    // Time is in a previous verse. But this should never happen from listen!
    if (audioTime < verseStartTime) {
        logError(
            `Out of sync! Time ${getFormattedTime(audioTime)} is before verse ${verseIndex}!`,
            {
                action: 'playListen',
                label: `song: ${songIndex}, verse: ${verseIndex}, time: ${audioTime}`,
            },
        )
        return null

    // Time is still in the current verse.
    } else if (audioTime < verseEndTime) {
        return {
            currentSongIndex: songIndex,
            currentVerseIndex: verseIndex,
        }

    /**
     * Time is in the next verse, the next song, or the last verse in the last
     * song.
     */
    } else {
        return {
            currentSongIndex: songIndex,
            currentVerseIndex: verseIndex < getVerseCountForSong(songIndex) - 1 ?
                // Return the next verse.
                verseIndex + 1 :
                // Return the same verse, and let the player end itself.
                verseIndex,
        }
    }
}

export const logLoaded = loadStartTime => {
    const timeDifference = getTimeDifference(loadStartTime)
    logSuccess(
        `Player loaded after ${timeDifference}s.`,
        {
            action: 'player',
            label: 'load',
            value: timeDifference * 1000,
        },
    )
}

import { getSongsNotLoguesCount } from '../../../api/album/songs'
import {
    getAudioTimeForCurrentTime,
    getEndTimeForVerse,
} from '../../../api/album/time'
import { getVerseCountForSong } from '../../../api/album/verses'
import { getTimeDifference } from '../../../utils/logger/helpers/time'
import { AUDIO_OPTIONS, CONTINUE } from '../../../constants/options'

export const getCurrentIndicesForTime = ({
    songIndex,
    verseIndex,
    time,
    isSongRepeatOn,

}) => {
    const
        audioTime = getAudioTimeForCurrentTime(songIndex, time),
        verseEndTime = getEndTimeForVerse(songIndex, verseIndex),
        isContinueOption = AUDIO_OPTIONS[isSongRepeatOn] === CONTINUE,
        isLastSong = songIndex === getSongsNotLoguesCount(),
        isLastVerse = verseIndex === getVerseCountForSong(songIndex) - 1

    // If the verse is a second away from ending...
    if (audioTime + 1 > verseEndTime) {

        // If this is the last verse, and we will continue to the next song...
        if (!isLastSong && isLastVerse && isContinueOption) {
            return {
                currentSongIndex: songIndex + 1,
                currentVerseIndex: 0,
            }
        }
    }

    // If the verse has ended...
    if (audioTime > verseEndTime) {

        // If this is not the last verse...
        if (!isLastVerse) {
            // Advance to the next one.
            return {
                currentSongIndex: songIndex,
                currentVerseIndex: verseIndex + 1,
            }

        // This is the last verse. If we will repeat the song...
        } else if (!isContinueOption) {
            // Reset the verse and update the current time.
            return {
                currentSongIndex: songIndex,
                currentVerseIndex: 0,
                shouldUpdateCurrentTime: true,
            }
        }
    }

    /**
     * Either time is still in the current verse, or we are in the last verse
     * of the last song and will continue on to the epilogue by letting the
     * player end itself.
     */
    return {
        currentSongIndex: songIndex,
        currentVerseIndex: verseIndex,
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

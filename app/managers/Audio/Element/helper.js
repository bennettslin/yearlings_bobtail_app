import { getSongsNotLoguesCount } from '../../../api/album/songs'
import {
    getAudioTimeForCurrentTime,
    getEndTimeForVerse,
} from '../../../api/album/time'
import { getVerseCountForSong } from '../../../api/album/verses'
import { getTimeDifference } from '../../../utils/logger/helpers/time'

const SONG_CONTINUE_BUFFER_TIME = 1
const SONG_REPEAT_BUFFER_TIME = 0.75

export const getCurrentIndicesForTime = ({
    songIndex,
    verseIndex,
    time,
    isSongRepeatOn,

}) => {
    const
        audioTime = getAudioTimeForCurrentTime(songIndex, time),
        verseEndTime = getEndTimeForVerse(songIndex, verseIndex),
        isLastSong = songIndex === getSongsNotLoguesCount(),
        isLastVerse = verseIndex === getVerseCountForSong(songIndex) - 1

    // If the last verse has ended and we are continuing to the next song...
    if (
        isLastVerse &&
        !isLastSong &&
        !isSongRepeatOn &&
        audioTime + SONG_CONTINUE_BUFFER_TIME > verseEndTime
    ) {
        return {
            currentSongIndex: songIndex + 1,
            currentVerseIndex: 0,
        }
    }

    // If the last verse has ended and we are repeating the song...
    if (
        isLastVerse &&
        isSongRepeatOn &&
        audioTime + SONG_REPEAT_BUFFER_TIME > verseEndTime
    ) {
        // Reset the verse and update the current time.
        return {
            currentSongIndex: songIndex,
            currentVerseIndex: 0,
            shouldUpdateCurrentTime: true,
        }
    }

    // If a verse in the middle of the song has ended...
    if (
        !isLastVerse &&
        audioTime > verseEndTime
    ) {
        // Advance to the next one.
        return {
            currentSongIndex: songIndex,
            currentVerseIndex: verseIndex + 1,
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

import {
    getAudioTimeForCurrentTime,
    getEndTimeForVerse,
    getStartTimeForVerse,
} from '../../../api/album/time'
import { getVerseCountForSong } from '../../../api/album/verses'
import { getFormattedTime } from '../../../helpers/format'
import { getTimeDifference } from '../../../utils/logger/helpers/time'
import { AUDIO_OPTIONS, REPEAT } from '../../../constants/options'
import { getSongsAndLoguesCount } from '../../../api/album/songs'

export const getCurrentIndicesForTime = ({
    songIndex,
    verseIndex,
    time,
    audioOptionIndex,
}) => {
    const
        audioTime = getAudioTimeForCurrentTime(songIndex, time),
        verseStartTime = getStartTimeForVerse(songIndex, verseIndex),
        verseEndTime = getEndTimeForVerse(songIndex, verseIndex),
        isRepeatOption = AUDIO_OPTIONS[audioOptionIndex] === REPEAT

    /**
     * Time is before the current verse. But this should never happen from
     * listen, so log an error!
     */
    if (audioTime < verseStartTime) {
        logError(
            `Out of sync! Time ${getFormattedTime(audioTime)} is before verse ${verseIndex}!`,
            {
                action: 'playListen',
                label: `song: ${songIndex}, verse: ${verseIndex}, time: ${audioTime}`,
            },
        )
        return null

    /**
     * Time is after the current verse. This means it's in the next verse, in
     * the next song, or in the last verse of the last song.
     */
    } else if (audioTime > verseEndTime) {

        // There is a next verse. We're still in the same song.
        if (verseIndex < getVerseCountForSong(songIndex) - 1) {
            return {
                currentSongIndex: songIndex,
                currentVerseIndex: verseIndex + 1,
            }

        // We will repeat this song. Also need to update current time.
        } else if (isRepeatOption) {
            return {
                currentSongIndex: songIndex,
                currentVerseIndex: 0,
                shouldUpdateCurrentTime: true,
            }

        // There is a next song, and we will continue on to it.
        } else if (songIndex < getSongsAndLoguesCount() - 1) {
            return {
                currentSongIndex: songIndex + 1,
                currentVerseIndex: 0,
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

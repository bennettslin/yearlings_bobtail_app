import {
    getAudioTimeForCurrentTime,
    getEndTimeForVerse,
} from '../../../api/album/time'
import { getVerseCountForSong } from '../../../api/album/verses'
import { getTimeDifference } from '../../../utils/logger/helpers/time'
import { AUDIO_OPTIONS, REPEAT } from '../../../constants/options'
import { getSongsNotLoguesCount } from '../../../api/album/songs'

export const getCurrentIndicesForTime = ({
    songIndex,
    verseIndex,
    time,
    audioOptionIndex,

}) => {
    const
        audioTime = getAudioTimeForCurrentTime(songIndex, time),
        verseEndTime = getEndTimeForVerse(songIndex, verseIndex),
        isRepeatOption = AUDIO_OPTIONS[audioOptionIndex] === REPEAT

    /**
     * Time is after the current verse. This means it's in the next verse, in
     * the next song, or in the last verse of the last song.
     */
    if (audioTime > verseEndTime) {

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
        } else if (songIndex < getSongsNotLoguesCount()) {
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

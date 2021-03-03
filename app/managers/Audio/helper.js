import { getVerseCountForSong } from '../../api/album/verses'
import {
    CONTINUE,
    AUDIO_OPTIONS,
} from '../../constants/options'

export const getNextSongIndex = (songIndex, audioOptionIndex) => {
    /**
     * When selecting next song through audio player, reset annotation and
     * verse, and scroll element into view, but do not access nav section.
     */
    const audioOption = AUDIO_OPTIONS[audioOptionIndex]

    /**
     * If option is to continue, advance to next song. Otherwise, stay on
     * same song, and start at beginning. (True evaluates to 1, false 0.)
     */
    return songIndex + (audioOption === CONTINUE)
}

const getNextVerseIndex = (
    songIndex,
    verseIndex,
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

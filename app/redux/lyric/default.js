import { getSongIsLogue } from '../../api/album/songs'
import {
    INITIAL_SONG_INDEX,
    INITIAL_VERSE_INDEX,
    INITIAL_ANNOTATION_INDEX
} from '../selected/default'

export const LYRIC_DEFAULTS = {
    isSongSelectComplete: false,
    lyricSongIndex: INITIAL_SONG_INDEX,
    lyricVerseIndex: INITIAL_VERSE_INDEX,
    lyricAnnotationIndex: INITIAL_ANNOTATION_INDEX,
    isLyricLogue: getSongIsLogue(INITIAL_SONG_INDEX)
}

import { getSongIsLogue } from '../../api/album/songs'
import { getInitialIndicesFromRoutingOrStorage } from '../../helpers/storage'
import {
    INITIAL_SONG_INDEX,
    INITIAL_VERSE_INDEX,
    INITIAL_ANNOTATION_INDEX
} from '../selected/default'

export const LYRIC_DEFAULTS = {
    lyricSongIndex: INITIAL_SONG_INDEX,
    lyricVerseIndex: INITIAL_VERSE_INDEX,
    lyricAnnotationIndex: INITIAL_ANNOTATION_INDEX,
    isLyricLogue: getSongIsLogue(INITIAL_SONG_INDEX)
}

/** */

export const getLyricDefaults = songIndex => {
    const {
        initialSongIndex,
        initialVerseIndex,
        initialAnnotationIndex
    } = getInitialIndicesFromRoutingOrStorage(songIndex)

    return {
        lyricSongIndex: initialSongIndex,
        lyricVerseIndex: initialVerseIndex,
        lyricAnnotationIndex: initialAnnotationIndex,
        isLyricLogue: getSongIsLogue(initialSongIndex)
    }
}

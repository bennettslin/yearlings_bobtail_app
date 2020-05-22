import {
    INITIAL_SONG_INDEX,
    INITIAL_VERSE_INDEX,
    INITIAL_ANNOTATION_INDEX,
    IS_INITIAL_LOGUE
} from '../../constants/storage'

const LYRIC_TRANSITION_DEFAULTS = {
    didCarouselExit: true,
    didLyricExit: true,
    didCurtainExit: true,

    canLyricCarouselUpdate: false,
    didLyricUpdate: false,
    didCarouselUpdate: false,

    canLyricCarouselEnter: false,
    didLyricEnter: false,
    didCarouselEnter: false,
    didCurtainEnter: false
}

export const LYRIC_DEFAULTS = {
    ...LYRIC_TRANSITION_DEFAULTS,
    lyricSongIndex: INITIAL_SONG_INDEX,
    lyricVerseIndex: INITIAL_VERSE_INDEX,
    lyricAnnotationIndex: INITIAL_ANNOTATION_INDEX,
    isLyricLogue: IS_INITIAL_LOGUE
}

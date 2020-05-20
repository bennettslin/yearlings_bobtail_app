import {
    STORED_SONG_INDEX,
    STORED_VERSE_INDEX,
    STORED_ANNOTATION_INDEX,
    IS_STORED_LOGUE
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
    lyricSongIndex: STORED_SONG_INDEX,
    lyricVerseIndex: STORED_VERSE_INDEX,
    lyricAnnotationIndex: STORED_ANNOTATION_INDEX,
    isLyricLogue: IS_STORED_LOGUE
}

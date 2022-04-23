import { getSongIsLogue } from '../../endpoint/album/songs'
export const UPDATE_LYRIC_SONG = 'updateLyricSong'

export const getLyricDefaults = ({
    initialSongIndex,
    initialVerseIndex,
    initialAnnotationIndex,
}) => ({
    lyricSongIndex: initialSongIndex,
    lyricVerseIndex: initialVerseIndex,
    lyricAnnotationIndex: initialAnnotationIndex,
    isLyricLogue: getSongIsLogue(initialSongIndex),
})

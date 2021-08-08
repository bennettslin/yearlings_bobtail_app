import { getSongIsLogue } from '../../endpoint/album/songs'

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

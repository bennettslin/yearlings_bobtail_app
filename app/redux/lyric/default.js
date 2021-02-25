import { getSongIsLogue } from '../../api/album/songs'

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

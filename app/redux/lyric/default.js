import { getSongIsLogue } from '../../api/album/songs'
import { getInitialIndicesFromRoutingOrStorage } from '../../utils/routing/routing'

export const getLyricDefaults = songIndex => {
    const {
        initialSongIndex,
        initialVerseIndex,
        initialAnnotationIndex,
    } = getInitialIndicesFromRoutingOrStorage(songIndex)

    return {
        lyricSongIndex: initialSongIndex,
        lyricVerseIndex: initialVerseIndex,
        lyricAnnotationIndex: initialAnnotationIndex,
        isLyricLogue: getSongIsLogue(initialSongIndex),
    }
}

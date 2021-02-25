import { getSongIsLogue } from '../../api/album/songs'

export const getSelectedDefaults = ({
    initialSongIndex,
    initialVerseIndex,
    initialAnnotationIndex,
}) => ({
    selectedSongIndex: initialSongIndex,
    selectedVerseIndex: initialVerseIndex,
    selectedAnnotationIndex: initialAnnotationIndex,
    isSelectedLogue: getSongIsLogue(initialSongIndex),
})

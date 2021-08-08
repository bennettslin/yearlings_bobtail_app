import { getSongIsLogue } from '../../api/album/songs'

export const getSelectedDefaults = ({
    initialSongIndex,
    initialVerseIndex,
    initialAnnotationIndex,
    isPromoPage,
}) => ({
    ...!isPromoPage && {
        selectedSongIndex: initialSongIndex,
        selectedVerseIndex: initialVerseIndex,
        selectedAnnotationIndex: initialAnnotationIndex,
        isSelectedLogue: getSongIsLogue(initialSongIndex),
    },
})

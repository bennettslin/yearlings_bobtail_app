import { getSongIsLogue } from '../../endpoint/album/songs'

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
        doBrowserBypassNavigation: false,
    },
})

import { getSongIsLogue } from '../../endpoint/album/songs'

export const SELECTED_WIKI_DEFAULTS = {
    selectedWikiIndex: 0,
    wikiAnnotationIndex: 0,
}

export const getSelectedDefaults = ({
    initialSongIndex,
    initialVerseIndex,
    initialAnnotationIndex,
    isPromoPage,
}) => ({
    ...!isPromoPage && {
        ...SELECTED_WIKI_DEFAULTS,
        selectedSongIndex: initialSongIndex,
        selectedVerseIndex: initialVerseIndex,
        selectedAnnotationIndex: initialAnnotationIndex,
        isSelectedLogue: getSongIsLogue(initialSongIndex),
        doBrowserBypassNavigation: false,
    },
})

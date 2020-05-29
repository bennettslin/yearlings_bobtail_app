import { createSelector } from 'reselect'
import { getWikiUrl } from '../../helpers/wiki'
import { IS_MOBILE_WIKI_SELECTOR } from '../responsive/selectors'
import {
    SELECTED_SONG_INDEX_SELECTOR,
    SELECTED_ANNOTATION_INDEX_SELECTOR
} from '../selected/selectors'

export const SELECTED_WIKI_INDEX_SELECTOR = (
    { sessionStore: { selectedWikiIndex } }
) => selectedWikiIndex

export const CAROUSEL_ANNOTATION_INDEX_SELECTOR = (
    { sessionStore: { carouselAnnotationIndex } }
) => carouselAnnotationIndex

export const SELECTED_WIKI_URL_SELECTOR = createSelector(
    SELECTED_WIKI_INDEX_SELECTOR,
    CAROUSEL_ANNOTATION_INDEX_SELECTOR,
    SELECTED_SONG_INDEX_SELECTOR,
    SELECTED_ANNOTATION_INDEX_SELECTOR,
    IS_MOBILE_WIKI_SELECTOR,
    (
        selectedWikiIndex,
        carouselAnnotationIndex,
        selectedSongIndex,
        selectedAnnotationIndex,
        isMobileWiki
    ) => getWikiUrl({
        selectedWikiIndex,
        carouselAnnotationIndex,
        selectedSongIndex,
        selectedAnnotationIndex,
        isMobileWiki
    })
)

export const SHOWN_NAV_BOOK_INDEX_SELECTOR = (
    { sessionStore: { shownNavBookIndex } }
) => shownNavBookIndex

export const AUDIO_OPTION_INDEX_SELECTOR = (
    { sessionStore: { audioOptionIndex } }
) => audioOptionIndex

// import {
//     LYRIC_SONG_INDEX_SELECTOR,
//     LYRIC_VERSE_INDEX_SELECTOR,
//     LYRIC_ANNOTATION_INDEX_SELECTOR,
//     IS_LYRIC_LOGUE_SELECTOR
// } from '../../../redux/session/selectors'

// lyricSongIndex = LYRIC_SONG_INDEX_SELECTOR(state),
// lyricVerseIndex = LYRIC_VERSE_INDEX_SELECTOR(state),
// lyricAnnotationIndex = LYRIC_ANNOTATION_INDEX_SELECTOR(state),
// isLyricLogue = IS_LYRIC_LOGUE_SELECTOR(state)

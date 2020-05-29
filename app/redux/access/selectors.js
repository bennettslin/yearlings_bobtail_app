import { createSelector } from 'reselect'
import { getIsAccessedIndexedAnchorShown } from '../../helpers/access'
import { IS_ACTIVATED_SELECTOR } from '../activated/selectors'
import { LYRIC_ANNOTATION_INDEX_SELECTOR } from '../lyric/selectors'
import {
    IS_DOTS_SLIDE_SHOWN_SELECTOR,
    IS_NAV_SHOWN_SELECTOR,
    IS_LYRIC_EXPANDED_SELECTOR
} from '../toggle/selectors'

export const IS_ACCESS_ON_SELECTOR = (
    { accessStore: { isAccessOn } }
) => isAccessOn

export const ACCESSED_DOT_INDEX_SELECTOR = (
    { accessStore: { accessedDotIndex } }
) => accessedDotIndex

export const ACCESSED_NAV_INDEX_SELECTOR = (
    { accessStore: { accessedNavIndex } }
) => accessedNavIndex

export const ACCESSED_KEY_SELECTOR = (
    { accessStore: { accessedKey } }
) => accessedKey

export const ACCESSED_ANNOTATION_INDEX_SELECTOR = (
    { accessStore: { accessedAnnotationIndex } }
) => accessedAnnotationIndex

export const ACCESSED_WIKI_WORMHOLE_INDEX_SELECTOR = (
    { accessStore: { accessedWikiWormholeIndex } }
) => accessedWikiWormholeIndex

export const IS_ACCESSED_INDEXED_ANCHOR_SHOWN_SELECTOR = createSelector(
    IS_ACCESS_ON_SELECTOR,
    IS_DOTS_SLIDE_SHOWN_SELECTOR,
    IS_NAV_SHOWN_SELECTOR,
    IS_LYRIC_EXPANDED_SELECTOR,
    LYRIC_ANNOTATION_INDEX_SELECTOR,
    IS_ACTIVATED_SELECTOR,
    (
        isAccessOn,
        isDotsSlideShown,
        isNavShown,
        isLyricExpanded,
        lyricAnnotationIndex,
        isActivated
    ) => getIsAccessedIndexedAnchorShown({
        isAccessOn,
        isDotsSlideShown,
        isNavShown,
        isLyricExpanded,
        lyricAnnotationIndex,
        isActivated
    })
)

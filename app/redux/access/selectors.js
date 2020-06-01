import { createSelector } from 'reselect'
import { getIsAccessedIndexedAnchorShown } from '../../helpers/access'
import { mapIsActivated } from '../activated/selectors'
import { mapLyricAnnotationIndex } from '../lyric/selectors'
import {
    IS_DOTS_SLIDE_SHOWN_SELECTOR,
    IS_NAV_SHOWN_SELECTOR,
    IS_LYRIC_EXPANDED_SELECTOR
} from '../toggle/selectors'

export const mapIsAccessOn = (
    { accessStore: { isAccessOn } }
) => isAccessOn

export const mapAccessedDotIndex = (
    { accessStore: { accessedDotIndex } }
) => accessedDotIndex

export const mapAccessedNavIndex = (
    { accessStore: { accessedNavIndex } }
) => accessedNavIndex

export const mapAccessedKey = (
    { accessStore: { accessedKey } }
) => accessedKey

export const mapAccessedAnnotationIndex = (
    { accessStore: { accessedAnnotationIndex } }
) => accessedAnnotationIndex

export const mapAccessedWikiWormholeIndex = (
    { accessStore: { accessedWikiWormholeIndex } }
) => accessedWikiWormholeIndex

export const mapIsAccessedIndexedAnchorShown = createSelector(
    mapIsAccessOn,
    IS_DOTS_SLIDE_SHOWN_SELECTOR,
    IS_NAV_SHOWN_SELECTOR,
    IS_LYRIC_EXPANDED_SELECTOR,
    mapLyricAnnotationIndex,
    mapIsActivated,
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

export const mapIsAccessedAnnotation = annotationIndex => createSelector(
    mapIsAccessedIndexedAnchorShown,
    mapAccessedAnnotationIndex,
    (
        isAccessedIndexedAnchorShown,
        accessedAnnotationIndex
    ) => (
        isAccessedIndexedAnchorShown &&
        annotationIndex === accessedAnnotationIndex
    )
)

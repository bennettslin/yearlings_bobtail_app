import { createSelector } from 'reselect'
import { getIsAccessedIndexedAnchorShown } from '../../helpers/access'
import { mapIsActivated } from '../activated/selector'
import { mapLyricAnnotationIndex } from '../lyric/selector'
import {
    mapIsDotsSlideShown,
    mapIsNavExpanded,
    mapIsLyricExpanded,
} from '../toggle/selector'
import { ACCESS_STORE } from '../../constants/store'

export const mapIsAccessOn = (
    { [ACCESS_STORE]: { isAccessOn } },
) => isAccessOn

export const mapAccessedDotIndex = (
    { [ACCESS_STORE]: { accessedDotIndex } },
) => accessedDotIndex

export const mapAccessedNavIndex = (
    { [ACCESS_STORE]: { accessedNavIndex } },
) => accessedNavIndex

export const mapAccessedKey = (
    { [ACCESS_STORE]: { accessedKey } },
) => accessedKey

export const mapAccessedAnnotationIndex = (
    { [ACCESS_STORE]: { accessedAnnotationIndex } },
) => accessedAnnotationIndex

export const mapAccessedWikiWormholeIndex = (
    { [ACCESS_STORE]: { accessedWikiWormholeIndex } },
) => accessedWikiWormholeIndex

export const mapIsAccessedIndexedAnchorShown = createSelector(
    mapIsAccessOn,
    mapIsDotsSlideShown,
    mapIsNavExpanded,
    mapIsLyricExpanded,
    mapLyricAnnotationIndex,
    mapIsActivated,
    (
        isAccessOn,
        isDotsSlideShown,
        isNavExpanded,
        isLyricExpanded,
        lyricAnnotationIndex,
        isActivated,
    ) => getIsAccessedIndexedAnchorShown({
        isAccessOn,
        isDotsSlideShown,
        isNavExpanded,
        isLyricExpanded,
        lyricAnnotationIndex,
        isActivated,
    }),
)

export const getMapIsAnnotationAccessed = annotationIndex => createSelector(
    mapIsAccessedIndexedAnchorShown,
    mapAccessedAnnotationIndex,
    (
        isAccessedIndexedAnchorShown,
        accessedAnnotationIndex,
    ) => (
        isAccessedIndexedAnchorShown &&
        annotationIndex === accessedAnnotationIndex
    ),
)

export const getMapIsLyricAnchorAccessed = ({
    annotationIndex,
    wikiAnnotationIndex,
    wikiIndex,
}) => createSelector(
    mapIsAccessedIndexedAnchorShown,
    mapLyricAnnotationIndex,
    mapAccessedAnnotationIndex,
    mapAccessedWikiWormholeIndex,
    (
        isAccessedIndexedAnchorShown,
        lyricAnnotationIndex,
        accessedAnnotationIndex,
        accessedWikiWormholeIndex,
    ) => (
        isAccessedIndexedAnchorShown && (
            lyricAnnotationIndex ? (
                // Check that we're in the annotation that's selected.
                lyricAnnotationIndex === wikiAnnotationIndex &&
                accessedWikiWormholeIndex === wikiIndex
            ) : accessedAnnotationIndex === annotationIndex
        )
    ),
)

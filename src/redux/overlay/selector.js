import { createSelector } from 'reselect'
import { getIsOverlayShown } from '../../helpers/main'
import { mapLyricAnnotationIndex } from '../lyric/selector'
import {
    mapIsScoreShown,
    mapIsAboutShown,
    mapIsPromoShown,
} from '../toggle/selector'
import { mapIsOverlayingAnnotation } from '../annotationPopup/selector'
import { mapIsWikiShown } from '../wiki/selector'

export const mapIsOverlayShown = createSelector(
    mapIsOverlayingAnnotation,
    mapLyricAnnotationIndex,
    mapIsScoreShown,
    mapIsAboutShown,
    mapIsPromoShown,
    mapIsWikiShown,
    (
        isOverlayingAnnotation,
        lyricAnnotationIndex,
        isScoreShown,
        isAboutShown,
        isPromoShown,
        isWikiShown,
    ) => getIsOverlayShown({
        isOverlayingAnnotation,
        lyricAnnotationIndex,
        isScoreShown,
        isAboutShown,
        isPromoShown,
        isWikiShown,
    }),
)

import { createSelector } from 'reselect'
import { getIsOverlayShown } from '../../helpers/main'
import { mapLyricAnnotationIndex } from '../lyric/selector'
import {
    mapIsScoreShown,
    mapIsAboutShown
} from '../toggle/selector'
import { mapIsOverlayingAnnotation } from '../annotationPopup/selector'
import { mapIsWikiShown } from '../wiki/selector'

export const mapIsOverlayShown = createSelector(
    mapIsOverlayingAnnotation,
    mapLyricAnnotationIndex,
    mapIsScoreShown,
    mapIsAboutShown,
    mapIsWikiShown,
    (
        isOverlayingAnnotation,
        lyricAnnotationIndex,
        isScoreShown,
        isAboutShown,
        isWikiShown
    ) => getIsOverlayShown({
        isOverlayingAnnotation,
        lyricAnnotationIndex,
        isScoreShown,
        isAboutShown,
        isWikiShown
    })
)

import { createSelector } from 'reselect'
import { getIsOverlayShown } from '../../helpers/main'
import { mapLyricAnnotationIndex } from '../lyric/selectors'
import { mapIsWikiShown } from '../session/selectors'
import {
    mapIsScoreShown,
    mapIsAboutShown
} from '../toggle/selectors'
import { mapIsOverlayingAnnotation } from '../annotationPopup/selectors'

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

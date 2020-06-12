import { createSelector } from 'reselect'
import { getIsOverlayingAnnotation } from '../../helpers/main'
import { getIsPopupAnnotationShown } from '../../helpers/popupAnnotation'
import { mapIsPhoneWidth } from '../device/selectors'
import { mapCanLyricCarouselEnter } from '../entrance/selectors'
import { mapLyricAnnotationIndex } from '../lyric/selectors'
import {
    mapIsLyricExpanded,
    mapIsScoreShown,
    mapIsAboutShown,
    mapIsCarouselShown
} from '../toggle/selectors'
import { mapCanCarouselMount } from '../viewport/selectors'
import { mapIsWikiShown } from '../wiki/selectors'

export const mapIsOverlayingAnnotation = createSelector(
    mapIsPhoneWidth,
    mapIsLyricExpanded,
    (
        isPhoneWidth,
        isLyricExpanded
    ) => getIsOverlayingAnnotation({
        isPhoneWidth,
        isLyricExpanded
    })
)

export const getMapIsPopupAnnotationShown = inMain => createSelector(
    mapCanLyricCarouselEnter,
    mapLyricAnnotationIndex,
    mapIsAboutShown,
    mapIsScoreShown,
    mapIsCarouselShown,
    mapCanCarouselMount,
    mapIsOverlayingAnnotation,
    mapIsWikiShown,
    (
        canLyricCarouselEnter,
        lyricAnnotationIndex,
        isAboutShown,
        isScoreShown,
        isCarouselShown,
        canCarouselMount,
        isOverlayingAnnotation,
        isWikiShown
    ) => getIsPopupAnnotationShown({
        inMain,
        canLyricCarouselEnter,
        lyricAnnotationIndex,
        isAboutShown,
        isScoreShown,
        isCarouselShown,
        canCarouselMount,
        isOverlayingAnnotation,
        isWikiShown
    })
)

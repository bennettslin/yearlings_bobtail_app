import { createSelector } from 'reselect'
import { getIsOverlayingAnnotation } from '../../helpers/main'
import { getIsPopupAnnotationShown } from '../../helpers/popupAnnotation'
import { mapIsPhoneWidth } from '../device/selector'
import {
    mapIsSongSelectComplete,
    mapLyricAnnotationIndex
} from '../lyric/selector'
import {
    mapIsLyricExpanded,
    mapIsScoreShown,
    mapIsAboutShown,
    mapIsCarouselShown
} from '../toggle/selector'
import { mapCanCarouselMount } from '../viewport/selector'
import { mapIsWikiShown } from '../wiki/selector'

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
    mapIsSongSelectComplete,
    mapLyricAnnotationIndex,
    mapIsAboutShown,
    mapIsScoreShown,
    mapIsCarouselShown,
    mapCanCarouselMount,
    mapIsOverlayingAnnotation,
    mapIsWikiShown,
    (
        isSongSelectComplete,
        lyricAnnotationIndex,
        isAboutShown,
        isScoreShown,
        isCarouselShown,
        canCarouselMount,
        isOverlayingAnnotation,
        isWikiShown
    ) => getIsPopupAnnotationShown({
        inMain,
        isSongSelectComplete,
        lyricAnnotationIndex,
        isAboutShown,
        isScoreShown,
        isCarouselShown,
        canCarouselMount,
        isOverlayingAnnotation,
        isWikiShown
    })
)

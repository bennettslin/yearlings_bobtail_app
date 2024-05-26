import { createSelector } from 'reselect'
import { getIsOverlayingAnnotation } from '../../helpers/main'
import { getIsPopupAnnotationShown } from '../../helpers/popupAnnotation'
import { mapIsActivated } from '../activated/selector'
import { mapIsPhoneWidth } from '../device/selector'
import { mapIsSongChangeDone } from '../entrance/selector'
import { mapLyricAnnotationIndex } from '../lyric/selector'
import {
    mapIsLyricExpanded,
    mapIsScoreShown,
    mapIsAboutShown,
    mapIsPromoShown,
    mapIsCarouselShown,
} from '../toggle/selector'
import { mapCanCarouselNavMount } from '../viewport/selector'
import { mapIsWikiShown } from '../wiki/selector'
import { mapIsSliderTouched } from '../slider/selector'

export const mapIsOverlayingAnnotation = createSelector(
    mapIsPhoneWidth,
    mapIsLyricExpanded,
    (
        isPhoneWidth,
        isLyricExpanded,
    ) => getIsOverlayingAnnotation({
        isPhoneWidth,
        isLyricExpanded,
    }),
)

export const getMapIsPopupAnnotationShown = inMain => createSelector(
    mapIsSongChangeDone,
    mapLyricAnnotationIndex,
    mapIsAboutShown,
    mapIsScoreShown,
    mapIsPromoShown,
    mapIsCarouselShown,
    mapCanCarouselNavMount,
    mapIsOverlayingAnnotation,
    mapIsWikiShown,
    mapIsActivated,
    mapIsSliderTouched,
    (
        isSongChangeDone,
        lyricAnnotationIndex,
        isAboutShown,
        isPromoShown,
        isScoreShown,
        isCarouselShown,
        canCarouselNavMount,
        isOverlayingAnnotation,
        isWikiShown,
        isActivated,
        isSliderTouched,
    ) => getIsPopupAnnotationShown({
        inMain,
        isSongChangeDone,
        lyricAnnotationIndex,
        isAboutShown,
        isPromoShown,
        isScoreShown,
        isCarouselShown,
        canCarouselNavMount,
        isOverlayingAnnotation,
        isWikiShown,
        isActivated,
        isSliderTouched,
    }),
)

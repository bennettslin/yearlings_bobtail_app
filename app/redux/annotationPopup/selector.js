import { createSelector } from 'reselect'
import { getIsOverlayingAnnotation } from '../../helpers/main'
import { getIsPopupAnnotationShown } from '../../helpers/popupAnnotation'
import { mapIsPhoneWidth } from '../device/selector'
import { mapIsSongChangeDone } from '../entrance/selector'
import { mapLyricAnnotationIndex } from '../lyric/selector'
import {
    mapIsLyricExpanded,
    mapIsScoreShown,
    mapIsAboutShown,
    mapIsCarouselShown
} from '../toggle/selector'
import { mapCanCarouselNavMount } from '../viewport/selector'
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
    mapIsSongChangeDone,
    mapLyricAnnotationIndex,
    mapIsAboutShown,
    mapIsScoreShown,
    mapIsCarouselShown,
    mapCanCarouselNavMount,
    mapIsOverlayingAnnotation,
    mapIsWikiShown,
    (
        isSongChangeDone,
        lyricAnnotationIndex,
        isAboutShown,
        isScoreShown,
        isCarouselShown,
        canCarouselNavMount,
        isOverlayingAnnotation,
        isWikiShown
    ) => getIsPopupAnnotationShown({
        inMain,
        isSongChangeDone,
        lyricAnnotationIndex,
        isAboutShown,
        isScoreShown,
        isCarouselShown,
        canCarouselNavMount,
        isOverlayingAnnotation,
        isWikiShown
    })
)

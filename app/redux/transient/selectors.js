import { createSelector } from 'reselect'
import { getIsDoublespeakerShown } from '../../helpers/doublespeaker'
import {
    getIsOverlayingAnnotation,
    getIsOverlayShown,
    getIsShelfLeftShown,
    getIsCarouselNavShowable
} from '../../helpers/main'
import {
    getToggleShowsOverviewImmediately,
    getToggleShowsTipsImmediately
} from '../../helpers/options'
import { getShowTipForDevice } from '../../album/api/tips'
import { mapIsActivated } from '../activated/selectors'
import { CAN_LYRIC_CAROUSEL_ENTER_SELECTOR } from '../entrance/selectors'
import {
    mapLyricSongIndex,
    mapLyricAnnotationIndex,
    mapIsLyricLogue
} from '../lyric/selectors'
import {
    mapIsLogueOverviewShown,
    mapIsOverviewShown,
    mapIsTipsShown
} from '../option/selectors'
import { mapSelectedWikiIndex } from '../session/selectors'
import {
    mapIsDotsSlideShown,
    mapIsLyricExpanded,
    mapIsScoreShown,
    mapIsAboutShown
} from '../toggle/selectors'
import {
    mapDeviceWidthIndex,
    mapIsPhoneWidth,
    mapIsTabletWidth,
    mapIsDesktopWidth
} from '../viewport/selectors'

export const mapIsPopupAnnotationVisible = (
    { transientStore: { isPopupAnnotationVisible } }
) => isPopupAnnotationVisible

export const mapPopupAnnotationIndex = (
    { transientStore: { popupAnnotationIndex } }
) => popupAnnotationIndex

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

export const mapIsEarShown = createSelector(
    mapLyricSongIndex,
    mapDeviceWidthIndex,
    (
        lyricSongIndex,
        deviceWidthIndex
    ) => getIsDoublespeakerShown({
        songIndex: lyricSongIndex,
        deviceWidthIndex
    })
)

export const mapIsTipsShowable = createSelector(
    mapLyricSongIndex,
    mapIsPhoneWidth,
    mapIsTabletWidth,
    mapIsDesktopWidth,
    (
        lyricSongIndex,
        isPhoneWidth,
        isTabletWidth,
        isDesktopWidth
    ) => getShowTipForDevice({
        songIndex: lyricSongIndex,
        isPhoneWidth,
        isTabletWidth,
        isDesktopWidth
    })
)

export const mapIsOverlayShown = createSelector(
    mapIsOverlayingAnnotation,
    mapLyricAnnotationIndex,
    mapIsScoreShown,
    mapIsAboutShown,
    mapSelectedWikiIndex,
    (
        isOverlayingAnnotation,
        lyricAnnotationIndex,
        isScoreShown,
        isAboutShown,
        selectedWikiIndex
    ) => getIsOverlayShown({
        isOverlayingAnnotation,
        lyricAnnotationIndex,
        isScoreShown,
        isAboutShown,
        selectedWikiIndex
    })
)

export const mapIsCarouselNavShowable = createSelector(
    mapIsOverlayShown,
    mapIsOverviewShown,
    mapIsTipsShown,
    mapIsLyricLogue,
    mapIsLyricExpanded,
    mapIsActivated,
    (
        isOverlayShown,
        overviewShown,
        tipsShown,
        isLyricLogue,
        isLyricExpanded,
        isActivated
    ) => getIsCarouselNavShowable({
        isOverlayShown,
        overviewShown,
        tipsShown,
        isLyricLogue,
        isLyricExpanded,
        isActivated
    })
)

export const mapIsShelfLeftShown = createSelector(
    mapIsPhoneWidth,
    mapIsDotsSlideShown,
    mapIsLyricExpanded,
    mapIsActivated,
    mapIsOverlayShown,
    CAN_LYRIC_CAROUSEL_ENTER_SELECTOR,
    mapLyricAnnotationIndex,
    mapIsLyricLogue,
    mapIsLogueOverviewShown,
    mapIsOverviewShown,
    mapIsTipsShown,
    (
        isPhoneWidth,
        isDotsSlideShown,
        isLyricExpanded,
        isActivated,
        isOverlayShown,
        canLyricCarouselEnter,
        lyricAnnotationIndex,
        isLyricLogue,
        isLogueOverviewShown,
        overviewShown,
        tipsShown
    ) => getIsShelfLeftShown({
        isPhoneWidth,
        isDotsSlideShown,
        isLyricExpanded,
        isActivated,
        isOverlayShown,
        canLyricCarouselEnter,
        lyricAnnotationIndex,
        isLyricLogue,
        isLogueOverviewShown,
        overviewShown,
        tipsShown
    })
)

export const mapToggleShowsOverviewImmediately = createSelector(
    mapIsTipsShown,
    mapLyricAnnotationIndex,
    mapIsDotsSlideShown,
    mapIsOverlayShown,
    mapIsLyricExpanded,
    mapIsActivated,
    (
        tipsShown,
        lyricAnnotationIndex,
        isDotsSlideShown,
        isOverlayShown,
        isLyricExpanded,
        isActivated
    ) => getToggleShowsOverviewImmediately({
        tipsShown,
        lyricAnnotationIndex,
        isDotsSlideShown,
        isOverlayShown,
        isLyricExpanded,
        isActivated
    })
)

export const mapToggleShowsTipsImmediately = createSelector(
    mapIsOverviewShown,
    mapIsTipsShown,
    mapLyricAnnotationIndex,
    mapIsDotsSlideShown,
    mapIsOverlayShown,
    mapIsLyricExpanded,
    mapIsActivated,
    (
        overviewShown,
        tipsShown,
        lyricAnnotationIndex,
        isDotsSlideShown,
        isOverlayShown,
        isLyricExpanded,
        isActivated
    ) => getToggleShowsTipsImmediately({
        overviewShown,
        tipsShown,
        lyricAnnotationIndex,
        isDotsSlideShown,
        isOverlayShown,
        isLyricExpanded,
        isActivated
    })
)

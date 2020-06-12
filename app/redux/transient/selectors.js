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
import { getIsPopupAnnotationShown } from '../../helpers/popupAnnotation'
import { getShowTipForDevice } from '../../api/album/tips'
import { mapIsActivated } from '../activated/selectors'
import {
    mapIsPhoneWidth,
    mapIsTabletWidth,
    mapIsDesktopWidth
} from '../device/selectors'
import { mapCanLyricCarouselEnter } from '../entrance/selectors'
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
import { mapIsWikiShown } from '../session/selectors'
import {
    mapIsDotsSlideShown,
    mapIsLyricExpanded,
    mapIsScoreShown,
    mapIsAboutShown,
    mapIsCarouselShown
} from '../toggle/selectors'
import {
    mapDeviceWidthIndex,
    mapCanCarouselMount
} from '../viewport/selectors'

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

export const mapIsCarouselNavShowable = createSelector(
    mapIsOverlayShown,
    mapIsOverviewShown,
    mapIsTipsShown,
    mapIsLyricLogue,
    mapIsLyricExpanded,
    mapIsActivated,
    (
        isOverlayShown,
        isOverviewShown,
        isTipsShown,
        isLyricLogue,
        isLyricExpanded,
        isActivated
    ) => getIsCarouselNavShowable({
        isOverlayShown,
        isOverviewShown,
        isTipsShown,
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
    mapCanLyricCarouselEnter,
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
        isOverviewShown,
        isTipsShown
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
        isOverviewShown,
        isTipsShown
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
        isTipsShown,
        lyricAnnotationIndex,
        isDotsSlideShown,
        isOverlayShown,
        isLyricExpanded,
        isActivated
    ) => getToggleShowsOverviewImmediately({
        isTipsShown,
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
        isOverviewShown,
        isTipsShown,
        lyricAnnotationIndex,
        isDotsSlideShown,
        isOverlayShown,
        isLyricExpanded,
        isActivated
    ) => getToggleShowsTipsImmediately({
        isOverviewShown,
        isTipsShown,
        lyricAnnotationIndex,
        isDotsSlideShown,
        isOverlayShown,
        isLyricExpanded,
        isActivated
    })
)

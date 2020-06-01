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
    IS_LOGUE_OVERVIEW_SHOWN_SELECTOR,
    OVERVIEW_SHOWN_SELECTOR,
    TIPS_SHOWN_SELECTOR
} from '../option/selectors'
import { SELECTED_WIKI_INDEX_SELECTOR } from '../session/selectors'
import {
    IS_DOTS_SLIDE_SHOWN_SELECTOR,
    IS_LYRIC_EXPANDED_SELECTOR,
    IS_SCORE_SHOWN_SELECTOR,
    IS_ABOUT_SHOWN_SELECTOR
} from '../toggle/selectors'
import {
    DEVICE_WIDTH_INDEX_SELECTOR,
    IS_PHONE_WIDTH_SELECTOR,
    IS_TABLET_WIDTH_SELECTOR,
    IS_DESKTOP_WIDTH_SELECTOR
} from '../viewport/selectors'

export const IS_POPUP_ANNOTATION_VISIBLE_SELECTOR = (
    { transientStore: { isPopupAnnotationVisible } }
) => isPopupAnnotationVisible

export const POPUP_ANNOTATION_INDEX_SELECTOR = (
    { transientStore: { popupAnnotationIndex } }
) => popupAnnotationIndex

export const IS_OVERLAYING_ANNOTATION_SELECTOR = createSelector(
    IS_PHONE_WIDTH_SELECTOR,
    IS_LYRIC_EXPANDED_SELECTOR,
    (
        isPhoneWidth,
        isLyricExpanded
    ) => getIsOverlayingAnnotation({
        isPhoneWidth,
        isLyricExpanded
    })
)

export const IS_EAR_SHOWN_SELECTOR = createSelector(
    mapLyricSongIndex,
    DEVICE_WIDTH_INDEX_SELECTOR,
    (
        lyricSongIndex,
        deviceWidthIndex
    ) => getIsDoublespeakerShown({
        songIndex: lyricSongIndex,
        deviceWidthIndex
    })
)

export const IS_TIPS_SHOWABLE_SELECTOR = createSelector(
    mapLyricSongIndex,
    IS_PHONE_WIDTH_SELECTOR,
    IS_TABLET_WIDTH_SELECTOR,
    IS_DESKTOP_WIDTH_SELECTOR,
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

export const IS_OVERLAY_SHOWN_SELECTOR = createSelector(
    IS_OVERLAYING_ANNOTATION_SELECTOR,
    mapLyricAnnotationIndex,
    IS_SCORE_SHOWN_SELECTOR,
    IS_ABOUT_SHOWN_SELECTOR,
    SELECTED_WIKI_INDEX_SELECTOR,
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

export const IS_CAROUSEL_NAV_SHOWABLE_SELECTOR = createSelector(
    IS_OVERLAY_SHOWN_SELECTOR,
    OVERVIEW_SHOWN_SELECTOR,
    TIPS_SHOWN_SELECTOR,
    mapIsLyricLogue,
    IS_LYRIC_EXPANDED_SELECTOR,
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

export const IS_SHELF_LEFT_SHOWN_SELECTOR = createSelector(
    IS_PHONE_WIDTH_SELECTOR,
    IS_DOTS_SLIDE_SHOWN_SELECTOR,
    IS_LYRIC_EXPANDED_SELECTOR,
    mapIsActivated,
    IS_OVERLAY_SHOWN_SELECTOR,
    CAN_LYRIC_CAROUSEL_ENTER_SELECTOR,
    mapLyricAnnotationIndex,
    mapIsLyricLogue,
    IS_LOGUE_OVERVIEW_SHOWN_SELECTOR,
    OVERVIEW_SHOWN_SELECTOR,
    TIPS_SHOWN_SELECTOR,
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

export const TOGGLE_SHOWS_OVERVIEW_IMMEDIATELY_SELECTOR = createSelector(
    TIPS_SHOWN_SELECTOR,
    mapLyricAnnotationIndex,
    IS_DOTS_SLIDE_SHOWN_SELECTOR,
    IS_OVERLAY_SHOWN_SELECTOR,
    IS_LYRIC_EXPANDED_SELECTOR,
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

export const TOGGLE_SHOWS_TIPS_IMMEDIATELY_SELECTOR = createSelector(
    OVERVIEW_SHOWN_SELECTOR,
    TIPS_SHOWN_SELECTOR,
    mapLyricAnnotationIndex,
    IS_DOTS_SLIDE_SHOWN_SELECTOR,
    IS_OVERLAY_SHOWN_SELECTOR,
    IS_LYRIC_EXPANDED_SELECTOR,
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

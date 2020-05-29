import { createSelector } from 'reselect'
import { getIsDoublespeakerShown } from '../../helpers/doublespeaker'
import {
    getIsShelfLeftShown,
    getIsCarouselNavShowable
} from '../../helpers/main'
import {
    getToggleShowsOverviewImmediately,
    getToggleShowsTipsImmediately
} from '../../helpers/options'
import { getShowTipForDevice } from '../../album/api/tips'
import { IS_ACTIVATED_SELECTOR } from '../activated/selectors'
import { CAN_LYRIC_CAROUSEL_ENTER_SELECTOR } from '../entrance/selectors'
import {
    LYRIC_SONG_INDEX_SELECTOR,
    LYRIC_ANNOTATION_INDEX_SELECTOR,
    IS_LYRIC_LOGUE_SELECTOR
} from '../lyric/selectors'
import {
    IS_LOGUE_OVERVIEW_SHOWN_SELECTOR,
    OVERVIEW_SHOWN_SELECTOR,
    TIPS_SHOWN_SELECTOR
} from '../option/selectors'
import {
    IS_DOTS_SLIDE_SHOWN_SELECTOR,
    IS_LYRIC_EXPANDED_SELECTOR
} from '../toggle/selectors'
import {
    DEVICE_WIDTH_INDEX_SELECTOR,
    IS_PHONE_WIDTH_SELECTOR,
    IS_TABLET_WIDTH_SELECTOR,
    IS_DESKTOP_WIDTH_SELECTOR
} from '../viewport/selectors'

export const IS_OVERLAYING_ANNOTATION_SELECTOR = (
    { transientStore: { isOverlayingAnnotation } }
) => isOverlayingAnnotation

export const IS_OVERLAY_SHOWN_SELECTOR = (
    { transientStore: { isOverlayShown } }
) => isOverlayShown

export const IS_POPUP_ANNOTATION_VISIBLE_SELECTOR = (
    { transientStore: { isPopupAnnotationVisible } }
) => isPopupAnnotationVisible

export const POPUP_ANNOTATION_INDEX_SELECTOR = (
    { transientStore: { popupAnnotationIndex } }
) => popupAnnotationIndex

export const IS_EAR_SHOWN_SELECTOR = createSelector(
    LYRIC_SONG_INDEX_SELECTOR,
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
    LYRIC_SONG_INDEX_SELECTOR,
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

export const IS_CAROUSEL_NAV_SHOWABLE_SELECTOR = createSelector(
    IS_OVERLAY_SHOWN_SELECTOR,
    OVERVIEW_SHOWN_SELECTOR,
    TIPS_SHOWN_SELECTOR,
    IS_LYRIC_LOGUE_SELECTOR,
    IS_LYRIC_EXPANDED_SELECTOR,
    IS_ACTIVATED_SELECTOR,
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
    IS_ACTIVATED_SELECTOR,
    IS_OVERLAY_SHOWN_SELECTOR,
    CAN_LYRIC_CAROUSEL_ENTER_SELECTOR,
    LYRIC_ANNOTATION_INDEX_SELECTOR,
    IS_LYRIC_LOGUE_SELECTOR,
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
    LYRIC_ANNOTATION_INDEX_SELECTOR,
    IS_DOTS_SLIDE_SHOWN_SELECTOR,
    IS_OVERLAY_SHOWN_SELECTOR,
    IS_LYRIC_EXPANDED_SELECTOR,
    IS_ACTIVATED_SELECTOR,
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
    LYRIC_ANNOTATION_INDEX_SELECTOR,
    IS_DOTS_SLIDE_SHOWN_SELECTOR,
    IS_OVERLAY_SHOWN_SELECTOR,
    IS_LYRIC_EXPANDED_SELECTOR,
    IS_ACTIVATED_SELECTOR,
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

// import {
//     LYRIC_SONG_INDEX_SELECTOR,
//     LYRIC_VERSE_INDEX_SELECTOR,
//     LYRIC_ANNOTATION_INDEX_SELECTOR,
//     IS_LYRIC_LOGUE_SELECTOR
// } from '../../../redux/players/selectors'

// lyricSongIndex = LYRIC_SONG_INDEX_SELECTOR(state),
// lyricVerseIndex = LYRIC_VERSE_INDEX_SELECTOR(state),
// lyricAnnotationIndex = LYRIC_ANNOTATION_INDEX_SELECTOR(state),
// isLyricLogue = IS_LYRIC_LOGUE_SELECTOR(state)

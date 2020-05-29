import { createSelector } from 'reselect'
import { getIsDoublespeakerShown } from '../../helpers/doublespeaker'
import {
    getToggleShowsOverviewImmediately,
    getToggleShowsTipsImmediately
} from '../../helpers/options'
import { getShowTipForDevice } from '../../album/api/tips'
import { IS_ACTIVATED_SELECTOR } from '../activated/selectors'
import {
    LYRIC_SONG_INDEX_SELECTOR,
    LYRIC_ANNOTATION_INDEX_SELECTOR
} from '../lyric/selectors'
import {
    SELECTED_TIPS_OPTION_SELECTOR,
    SELECTED_OVERVIEW_OPTION_SELECTOR
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
import { SHOWN } from '../../constants/options'

export const IS_SHELF_LEFT_SHOWN_SELECTOR = (
    { transientStore: { isShelfLeftShown } }
) => isShelfLeftShown

export const IS_CAROUSEL_NAV_SHOWABLE_SELECTOR = (
    { transientStore: { isCarouselNavShowable } }
) => isCarouselNavShowable

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

export const TOGGLE_SHOWS_OVERVIEW_IMMEDIATELY_SELECTOR = createSelector(
    SELECTED_TIPS_OPTION_SELECTOR,
    LYRIC_ANNOTATION_INDEX_SELECTOR,
    IS_DOTS_SLIDE_SHOWN_SELECTOR,
    IS_OVERLAY_SHOWN_SELECTOR,
    IS_LYRIC_EXPANDED_SELECTOR,
    IS_ACTIVATED_SELECTOR,
    (
        selectedTipsOption,
        lyricAnnotationIndex,
        isDotsSlideShown,
        isOverlayShown,
        isLyricExpanded,
        isActivated
    ) => {
        const tipsShown = selectedTipsOption === SHOWN

        return getToggleShowsOverviewImmediately({
            tipsShown,
            lyricAnnotationIndex,
            isDotsSlideShown,
            isOverlayShown,
            isLyricExpanded,
            isActivated
        })
    }
)

export const TOGGLE_SHOWS_TIPS_IMMEDIATELY_SELECTOR = createSelector(
    SELECTED_OVERVIEW_OPTION_SELECTOR,
    SELECTED_TIPS_OPTION_SELECTOR,
    LYRIC_ANNOTATION_INDEX_SELECTOR,
    IS_DOTS_SLIDE_SHOWN_SELECTOR,
    IS_OVERLAY_SHOWN_SELECTOR,
    IS_LYRIC_EXPANDED_SELECTOR,
    IS_ACTIVATED_SELECTOR,
    (
        selectedOverviewOption,
        selectedTipsOption,
        lyricAnnotationIndex,
        isDotsSlideShown,
        isOverlayShown,
        isLyricExpanded,
        isActivated
    ) => {
        const
            overviewShown = selectedOverviewOption === SHOWN,
            tipsShown = selectedTipsOption === SHOWN

        return getToggleShowsTipsImmediately({
            overviewShown,
            tipsShown,
            lyricAnnotationIndex,
            isDotsSlideShown,
            isOverlayShown,
            isLyricExpanded,
            isActivated
        })
    }
)

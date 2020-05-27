import { createSelector } from 'reselect'
import { getIsDoublespeakerShown } from '../../helpers/doublespeaker'
import { LYRIC_SONG_INDEX_SELECTOR } from '../lyric/selectors'
import { DEVICE_WIDTH_INDEX_SELECTOR } from '../viewport/selectors'

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

export const IS_TIPS_SHOWABLE_SELECTOR = (
    { transientStore: { isTipsShowable } }
) => isTipsShowable

export const IS_POPUP_ANNOTATION_VISIBLE_SELECTOR = (
    { transientStore: { isPopupAnnotationVisible } }
) => isPopupAnnotationVisible

export const POPUP_ANNOTATION_INDEX_SELECTOR = (
    { transientStore: { popupAnnotationIndex } }
) => popupAnnotationIndex

export const TOGGLE_SHOWS_OVERVIEW_IMMEDIATELY_SELECTOR = (
    { transientStore: { toggleShowsOverviewImmediately } }
) => toggleShowsOverviewImmediately

export const TOGGLE_SHOWS_TIPS_IMMEDIATELY_SELECTOR = (
    { transientStore: { toggleShowsTipsImmediately } }
) => toggleShowsTipsImmediately

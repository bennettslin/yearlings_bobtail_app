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

export const IS_EAR_SHOWN_SELECTOR = (
    { transientStore: { isEarShown } }
) => isEarShown

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

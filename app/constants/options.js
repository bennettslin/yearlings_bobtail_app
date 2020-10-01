export const CONTINUE = 'continue'
export const REPEAT = 'repeat'
export const SHOWN = 'shown'
export const HIDDEN = 'hidden'
export const DISABLED = 'disabled'

export const AUDIO_OPTIONS = [
    CONTINUE,
    REPEAT
]

export const GENERAL_OPTIONS = [
    SHOWN,
    HIDDEN,
    DISABLED
]

export const CLOSE_NAV_NEXT = 'closeNavNext'
export const SHOW_NAV_NEXT = 'showNavNext'
export const SHOW_CAROUSEL_FROM_NAV = 'showCarouselFromNav'
export const SHOW_CAROUSEL_NAV_NEXT = 'showCarouselNavNext'

export const getCarouselNavIdentifier = ({
    isCarouselNotShowable,
    isCarouselShown,
    isNavExpanded

}) => {
    if (isCarouselShown) {
        return SHOW_NAV_NEXT

    } else if (isNavExpanded) {
        return isCarouselNotShowable ?
            CLOSE_NAV_NEXT :
            SHOW_CAROUSEL_FROM_NAV

    } else {
        return isCarouselNotShowable ?
            SHOW_NAV_NEXT :
            SHOW_CAROUSEL_NAV_NEXT
    }
}

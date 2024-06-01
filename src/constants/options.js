export const SHOWN = 'shown'
export const HIDDEN = 'hidden'
export const DISABLED = 'disabled'

export const GENERAL_OPTIONS = [
    SHOWN,
    HIDDEN,
    DISABLED,
]

export const CLOSE_NAV_NEXT = 'closeNavNext'
export const SHOW_NAV_NEXT = 'showNavNext'
export const SHOW_CAROUSEL_FROM_NAV = 'showCarouselFromNav'
export const SHOW_CAROUSEL_NAV_NEXT = 'showCarouselNavNext'

export const VOLUME_MIN = 0
export const VOLUME_DEFAULT = 10
export const VOLUME_MAX = 20

export const getCarouselNavIdentifier = ({
    isCarouselNotPossible,
    isCarouselShown,
    isNavExpanded,

}) => {
    if (isCarouselShown) {
        return SHOW_NAV_NEXT

    } else if (isNavExpanded) {
        return isCarouselNotPossible ?
            CLOSE_NAV_NEXT :
            SHOW_CAROUSEL_FROM_NAV

    } else {
        return isCarouselNotPossible ?
            SHOW_NAV_NEXT :
            SHOW_CAROUSEL_NAV_NEXT
    }
}

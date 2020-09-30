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

export const IS_CAROUSEL_EXPANDED = 'isCarouselExpanded'
export const IS_NAV_EXPANDED = 'isNavExpanded'
export const IS_CAROUSEL_NAV_COLLAPSED = 'isCarouselNavCollapsed'

export const getCarouselNavIdentifier = ({
    isCarouselExpanded,
    isNavExpanded

}) => {
    if (isCarouselExpanded) {
        return IS_CAROUSEL_EXPANDED

    } else if (isNavExpanded) {
        return IS_NAV_EXPANDED

    } else {
        return IS_CAROUSEL_NAV_COLLAPSED
    }
}

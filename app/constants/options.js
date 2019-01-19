export const CONTINUE = 'continue'
export const REPEAT = 'repeat'
export const PAUSE_AT_END = 'pauseAtEnd'
export const SHOWN = 'shown'
export const HIDDEN = 'hidden'
export const DISABLED = 'disabled'
export const OVERVIEW_BUBBLE = 'overviewBubble'

export const AUDIO_OPTIONS = [
    CONTINUE,
    REPEAT,
    PAUSE_AT_END
]

export const IS_CAROUSEL_SHOWN = 'isCarouselShown'
export const IS_NAV_SHOWN = 'isNavShown'
export const IS_NEITHER_SHOWN = 'isCarouselNavHidden'

export const getCarouselNavIdentifier = ({
    isCarouselShown,
    isNavShown

}) => {
    if (isCarouselShown) {
        return IS_CAROUSEL_SHOWN

    } else if (isNavShown) {
        return IS_NAV_SHOWN

    } else {
        return IS_NEITHER_SHOWN
    }
}

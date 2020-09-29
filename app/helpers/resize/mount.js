import {
    getIsPhoneWidth,
    getIsMiniWidth,
    getIsDesktopWidth
} from '../responsive'
import { MIN_HEIGHT_WINDOW_FOR_CAROUSEL_NAV } from '../../constants/responsive'
import { IS_USER_AGENT_DESKTOP } from '../../constants/device'

export const getCanCarouselNavMount = ({
    deviceWidthIndex,
    windowHeight,
    isHeightlessLyric

}) => {

    // Carousel can mount if higher processor...
    return IS_USER_AGENT_DESKTOP &&

        // and not heightless lyric...
        !isHeightlessLyric &&

        // and not phone or mini width...
        !(
            getIsPhoneWidth(deviceWidthIndex) ||
            getIsMiniWidth(deviceWidthIndex)
        ) &&

        // and if window height is above minimum.
        windowHeight >= MIN_HEIGHT_WINDOW_FOR_CAROUSEL_NAV
}

export const getCanScoreMount = deviceWidthIndex => (
    // Score can mount if higher processor and not phone width.
    IS_USER_AGENT_DESKTOP && !getIsPhoneWidth(deviceWidthIndex)
)

export const getCanSliderMount = deviceWidthIndex => (
    // Slider can mount if higher processor and desktop width.
    IS_USER_AGENT_DESKTOP && getIsDesktopWidth(deviceWidthIndex)
)

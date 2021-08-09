import {
    getIsPhoneWidth,
    getIsMiniWidth,
    getIsDesktopWidth,
} from '../responsive'
import { MIN_HEIGHT_WINDOW_FOR_CAROUSEL_NAV } from '../../constants/responsive'
import { IS_USER_AGENT_DESKTOP } from '../../constants/device'
import {
    LENGTH_ICON,
    LENGTH_ICON_LARGE,
    LENGTH_ICON_LARGE_MINI,
} from '../../scss/exports/style.module'
import { getJsFromSass } from '../format'

export const getCanCarouselNavMount = ({
    deviceWidthIndex,
    windowHeight,
    isHeightlessLyric,

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

export const getPopupMaxHeight = ({
    windowHeight,
    menuHeight,
    deviceWidthIndex,

}) => {
    /**
     * This styling duplicates the CSS for the PopupView__canBeFullHeight class
     * name. This is because Safari is incapable of letting the height of the
     * parent be no taller than the content of its child, while also allowing
     * the max height of the child be determined by the height of its parent.
     * As such, we will calculate this max height in JavaScript.
     */
    let marginHeight = getJsFromSass(LENGTH_ICON_LARGE) * 1.25

    if (getIsPhoneWidth(deviceWidthIndex)) {
        marginHeight = getJsFromSass(LENGTH_ICON)
    } else if (getIsMiniWidth(deviceWidthIndex)) {
        marginHeight = getJsFromSass(LENGTH_ICON_LARGE_MINI)
    }

    return windowHeight - menuHeight - marginHeight
}

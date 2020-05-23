import {
    CSS_HEIGHT_MENU,
    HEIGHT_TWO_ROW_MENU
} from '../../constants/responsive'
import {
    BANNER_SMALL_TEXT_WIDTH,
    CSS_WIDTH_MENU_BREAKPOINT,
    CSS_WIDTH_UNCANNY_VALLEY,
    CSS_WIDTH_GOLDEN_CORD
} from '../../constants/responsive/deviceWidth'
import {
    getIsDesktopWidth,
    getIsMonitorWidth,
    getIsLaptopWidth
} from '../responsive'

export const getIsLyricExpandable = (deviceWidthIndex) => {
    return !getIsDesktopWidth(deviceWidthIndex)
}

export const getIsTwoRowMenu = ({
    deviceWidthIndex,
    windowWidth

}) => {
    let lyricColumnExtraWidth = 0

    if (getIsMonitorWidth(deviceWidthIndex)) {
        lyricColumnExtraWidth = CSS_WIDTH_GOLDEN_CORD

    } else if (getIsLaptopWidth(deviceWidthIndex)) {
        lyricColumnExtraWidth = CSS_WIDTH_UNCANNY_VALLEY
    }

    return windowWidth <
        CSS_WIDTH_MENU_BREAKPOINT
        + lyricColumnExtraWidth
}

export const getMenuHeight = ({
    isTwoRowMenu

}) => {
    const menuHeight =
        isTwoRowMenu ?
            HEIGHT_TWO_ROW_MENU :
            CSS_HEIGHT_MENU

    return menuHeight
}

export const getIsSmallBannerText = (windowWidth) => {
    return windowWidth < BANNER_SMALL_TEXT_WIDTH
}

import {
    LS_HEIGHT_MENU,
    LS_HEIGHT_TWO_ROW_MENU
} from '../../../../constants/responsive'
import {
    LS_WIDTH_MENU_BREAKPOINT,
    LS_WIDTH_UNCANNY_VALLEY,
    LS_WIDTH_GOLDEN_CORD
} from '../../../../constants/responsive/deviceWidth'

import {
    getIsDesktopWidth,
    getIsMonitorWidth,
    getIsLaptopWidth
} from '../../../../helpers/responsive'

export const getIsLyricExpandable = (deviceWidthIndex) => {
    return !getIsDesktopWidth(deviceWidthIndex)
}

export const getIsTwoRowMenu = ({
    deviceWidthIndex,
    windowWidth

}) => {
    let lyricColumnExtraWidth = 0

    if (getIsMonitorWidth(deviceWidthIndex)) {
        lyricColumnExtraWidth = LS_WIDTH_GOLDEN_CORD

    } else if (getIsLaptopWidth(deviceWidthIndex)) {
        lyricColumnExtraWidth = LS_WIDTH_UNCANNY_VALLEY
    }

    return windowWidth <
        LS_WIDTH_MENU_BREAKPOINT
        + lyricColumnExtraWidth
}

export const getMenuHeight = ({
    isTwoRowMenu

}) => {
    const menuHeight =
        isTwoRowMenu ?
            LS_HEIGHT_TWO_ROW_MENU :
            LS_HEIGHT_MENU

    return menuHeight
}

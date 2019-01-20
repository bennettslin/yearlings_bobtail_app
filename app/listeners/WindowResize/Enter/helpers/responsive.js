import {
    LS_HEIGHT_MENU,
    LS_HEIGHT_TWO_ROW_MENU
} from '../../../../constants/responsive'

import {
    getIsDesktopWidth,
    getIsPhoneWidth
} from '../../../../helpers/responsive'

export const getIsLyricExpandable = (deviceWidthIndex) => {
    return !getIsDesktopWidth(deviceWidthIndex)
}

export const getIsTwoRowMenu = (deviceWidthIndex) => {
    return getIsPhoneWidth(deviceWidthIndex)
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

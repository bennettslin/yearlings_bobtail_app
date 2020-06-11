import {
    getWindowDimensions,
    getDeviceWidthIndex
} from '../../helpers/resize/device'
import { getIsHeightlessLyric } from '../../helpers/resize/hidden'
import {
    getIsTwoRowMenu,
    getMenuHeight
} from '../../helpers/resize/responsive'
import {
    getIsDesktopWidth,
    getIsTabletWidth,
    getIsPhoneWidth
} from '../../helpers/responsive'

export const {
    windowWidth: INITIAL_WINDOW_WIDTH,
    windowHeight: INITIAL_WINDOW_HEIGHT
} = getWindowDimensions()

export const INITIAL_DEVICE_WIDTH_INDEX =
    getDeviceWidthIndex(INITIAL_WINDOW_WIDTH)

export const IS_INITIAL_HEIGHTLESS_LYRIC = getIsHeightlessLyric({
    windowWidth: INITIAL_WINDOW_WIDTH,
    windowHeight: INITIAL_WINDOW_HEIGHT,
    deviceWidthIndex: INITIAL_DEVICE_WIDTH_INDEX
})

export const IS_INITIAL_TWO_ROW_MENU = getIsTwoRowMenu({
    windowWidth: INITIAL_WINDOW_WIDTH,
    deviceWidthIndex: INITIAL_DEVICE_WIDTH_INDEX
})

export const INITIAL_MENU_HEIGHT = getMenuHeight({
    isTwoRowMenu: IS_INITIAL_TWO_ROW_MENU
})

export const RESPONSIVE_DEFAULTS = {
    isHeightlessLyric: IS_INITIAL_HEIGHTLESS_LYRIC,
    isTwoRowMenu: IS_INITIAL_TWO_ROW_MENU,
    menuHeight: INITIAL_MENU_HEIGHT
}

export const VIEWPORT_DEFAULTS = {
    windowWidth: INITIAL_WINDOW_WIDTH,
    windowHeight: INITIAL_WINDOW_HEIGHT,
    deviceWidthIndex: INITIAL_DEVICE_WIDTH_INDEX,
    isPhoneWidth: getIsPhoneWidth(INITIAL_DEVICE_WIDTH_INDEX),
    isTabletWidth: getIsTabletWidth(INITIAL_DEVICE_WIDTH_INDEX),
    isDesktopWidth: getIsDesktopWidth(INITIAL_DEVICE_WIDTH_INDEX),
    isHeightlessLyric: IS_INITIAL_HEIGHTLESS_LYRIC,
    isTwoRowMenu: IS_INITIAL_TWO_ROW_MENU,
    menuHeight: INITIAL_MENU_HEIGHT
}

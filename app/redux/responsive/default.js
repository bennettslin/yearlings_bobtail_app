import { getIsHeightlessLyric } from '../../helpers/resize/hidden'
import {
    getIsTwoRowMenu,
    getMenuHeight,
    getIsLyricExpandable,
    getIsSmallBannerText
} from '../../helpers/resize/responsive'
import {
    getShowShrunkNavIcon,
    getShowSingleNavBook
} from '../../helpers/resize/nav'
import {
    INITIAL_WINDOW_WIDTH,
    INITIAL_WINDOW_HEIGHT,
    INITIAL_DEVICE_WIDTH_INDEX
} from '../viewport/default'

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
    menuHeight: INITIAL_MENU_HEIGHT,
    showShrunkNavIcon: getShowShrunkNavIcon({
        deviceWidthIndex: INITIAL_DEVICE_WIDTH_INDEX,
        windowWidth: INITIAL_WINDOW_WIDTH
    }),
    showSingleNavBook: getShowSingleNavBook({
        deviceWidthIndex: INITIAL_DEVICE_WIDTH_INDEX,
        windowWidth: INITIAL_WINDOW_WIDTH
    }),
    isLyricExpandable: getIsLyricExpandable(INITIAL_DEVICE_WIDTH_INDEX),
    isSmallBannerText: getIsSmallBannerText(INITIAL_WINDOW_WIDTH)
}

import { createSelector } from 'reselect'
import {
    getIsLyricExpandable,
    getIsSmallBannerText
} from '../../helpers/resize/responsive'
import { getIsMobileWiki } from '../../helpers/resize/wiki'
import {
    getShowShrunkNavIcon,
    getShowSingleNavBook
} from '../../helpers/resize/nav'
import {
    DEVICE_WIDTH_INDEX_SELECTOR,
    WINDOW_WIDTH_SELECTOR
} from '../viewport/selectors'

export const IS_HEIGHTLESS_LYRIC_SELECTOR = (
    { responsiveStore: { isHeightlessLyric } }
) => isHeightlessLyric

export const IS_TWO_ROW_MENU_SELECTOR = (
    { responsiveStore: { isTwoRowMenu } }
) => isTwoRowMenu

export const MENU_HEIGHT_SELECTOR = (
    { responsiveStore: { menuHeight } }
) => menuHeight

export const IS_MOBILE_WIKI_SELECTOR = createSelector(
    DEVICE_WIDTH_INDEX_SELECTOR,
    WINDOW_WIDTH_SELECTOR,
    (
        deviceWidthIndex,
        windowWidth
    ) => getIsMobileWiki({
        deviceWidthIndex,
        windowWidth
    })
)

export const IS_LYRIC_EXPANDABLE_SELECTOR = createSelector(
    DEVICE_WIDTH_INDEX_SELECTOR,
    (
        deviceWidthIndex
    ) => getIsLyricExpandable(deviceWidthIndex)
)

export const IS_SMALL_BANNER_TEXT_SELECTOR = createSelector(
    WINDOW_WIDTH_SELECTOR,
    (
        windowWidth
    ) => getIsSmallBannerText(windowWidth)
)

export const SHOW_SHRUNK_NAV_ICON_SELECTOR = createSelector(
    DEVICE_WIDTH_INDEX_SELECTOR,
    WINDOW_WIDTH_SELECTOR,
    (
        deviceWidthIndex,
        windowWidth
    ) => getShowShrunkNavIcon({
        deviceWidthIndex,
        windowWidth
    })
)

export const SHOW_SINGLE_NAV_BOOK_SELECTOR = createSelector(
    DEVICE_WIDTH_INDEX_SELECTOR,
    WINDOW_WIDTH_SELECTOR,
    (
        deviceWidthIndex,
        windowWidth
    ) => getShowSingleNavBook({
        deviceWidthIndex,
        windowWidth
    })
)

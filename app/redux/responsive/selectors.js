import {
    getIsLyricExpandable,
    getIsSmallBannerText
} from '../../helpers/resize/responsive'
import { getIsMobileWiki } from '../../helpers/resize/wiki'

export const MENU_HEIGHT_SELECTOR =
    ({ responsiveStore: { menuHeight } }) => menuHeight

export const IS_MOBILE_WIKI_SELECTOR = ({
    viewportStore: {
        deviceWidthIndex,
        windowWidth
    }
}) => getIsMobileWiki({
    deviceWidthIndex,
    windowWidth
})

export const IS_LYRIC_EXPANDABLE_SELECTOR = ({
    viewportStore: { deviceWidthIndex }
}) => getIsLyricExpandable(deviceWidthIndex)

export const IS_SMALL_BANNER_TEXT_SELECTOR = ({
    viewportStore: { windowWidth }
}) => getIsSmallBannerText(windowWidth)

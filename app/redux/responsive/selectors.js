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

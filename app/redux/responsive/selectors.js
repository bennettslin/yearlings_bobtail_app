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
    mapDeviceWidthIndex,
    mapWindowWidth
} from '../viewport/selectors'

export const mapIsHeightlessLyric = (
    { responsiveStore: { isHeightlessLyric } }
) => isHeightlessLyric

export const mapIsTwoRowMenu = (
    { responsiveStore: { isTwoRowMenu } }
) => isTwoRowMenu

export const mapMenuHeight = (
    { responsiveStore: { menuHeight } }
) => menuHeight

export const mapIsMobileWiki = createSelector(
    mapDeviceWidthIndex,
    mapWindowWidth,
    (
        deviceWidthIndex,
        windowWidth
    ) => getIsMobileWiki({
        deviceWidthIndex,
        windowWidth
    })
)

export const mapIsLyricExpandable = createSelector(
    mapDeviceWidthIndex,
    deviceWidthIndex => getIsLyricExpandable(deviceWidthIndex)
)

export const mapIsSmallBannerText = createSelector(
    mapWindowWidth,
    windowWidth => getIsSmallBannerText(windowWidth)
)

export const mapShowShrunkNavIcon = createSelector(
    mapDeviceWidthIndex,
    mapWindowWidth,
    (
        deviceWidthIndex,
        windowWidth
    ) => getShowShrunkNavIcon({
        deviceWidthIndex,
        windowWidth
    })
)

export const mapShowSingleNavBook = createSelector(
    mapDeviceWidthIndex,
    mapWindowWidth,
    (
        deviceWidthIndex,
        windowWidth
    ) => getShowSingleNavBook({
        deviceWidthIndex,
        windowWidth
    })
)

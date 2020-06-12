import { createSelector } from 'reselect'
import { getIsToggleInOverview } from '../../helpers/overview'
import { getIsLyricExpandable } from '../../helpers/resize/responsive'
import { getIsMobileWiki } from '../../helpers/resize/wiki'
import { mapIsLyricLogue } from '../lyric/selectors'
import {
    getShowShrunkNavIcon,
    getShowSingleNavBook
} from '../../helpers/resize/nav'
import {
    mapDeviceWidthIndex,
    mapWindowWidth,
    mapIsPhoneWidth,
    mapIsHeightlessLyric
} from '../viewport/selectors'

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

export const mapIsToggleInOverview = createSelector(
    mapIsPhoneWidth,
    mapIsHeightlessLyric,
    mapIsLyricLogue,
    (
        isPhoneWidth,
        isHeightlessLyric,
        isLyricLogue
    ) => getIsToggleInOverview({
        isPhoneWidth,
        isHeightlessLyric,
        isLyricLogue
    })
)

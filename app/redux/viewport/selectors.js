import { createSelector } from 'reselect'
import {
    getCanScoreMount,
    getCanSliderMount
} from '../../helpers/resize/mount'
import {
    getIsPhoneWidth,
    getIsTabletWidth,
    getIsDesktopWidth
} from '../../helpers/responsive'

export const mapWindowWidth = (
    { viewportStore: { windowWidth } }
) => windowWidth

export const mapWindowHeight = (
    { viewportStore: { windowHeight } }
) => windowHeight

export const mapDeviceWidthIndex = (
    { viewportStore: { deviceWidthIndex } }
) => deviceWidthIndex

export const mapIsHeightlessLyric = (
    { viewportStore: { isHeightlessLyric } }
) => isHeightlessLyric

export const mapIsTwoRowMenu = (
    { viewportStore: { isTwoRowMenu } }
) => isTwoRowMenu

export const mapMenuHeight = (
    { viewportStore: { menuHeight } }
) => menuHeight

export const mapCanCarouselMount = (
    { viewportStore: { canCarouselMount } }
) => canCarouselMount

export const mapCanScoreMount = createSelector(
    mapDeviceWidthIndex,
    deviceWidthIndex => getCanScoreMount(deviceWidthIndex)
)

export const mapCanSliderMount = createSelector(
    mapDeviceWidthIndex,
    deviceWidthIndex => getCanSliderMount(deviceWidthIndex)
)

export const mapIsPhoneWidth = createSelector(
    mapDeviceWidthIndex,
    deviceWidthIndex => getIsPhoneWidth(deviceWidthIndex)
)

export const mapIsTabletWidth = createSelector(
    mapDeviceWidthIndex,
    deviceWidthIndex => getIsTabletWidth(deviceWidthIndex)
)

export const mapIsDesktopWidth = createSelector(
    mapDeviceWidthIndex,
    deviceWidthIndex => getIsDesktopWidth(deviceWidthIndex)
)

export const mapIsPhoneOrMiniWidth = createSelector(
    mapIsTabletWidth,
    mapIsDesktopWidth,
    (
        isTabletWidth,
        isDesktopWidth
    ) => (
        !isDesktopWidth && !isTabletWidth
    )
)

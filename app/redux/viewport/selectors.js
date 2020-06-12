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
import { VIEWPORT_STORE } from '../../constants/store'

export const mapWindowWidth = (
    { [VIEWPORT_STORE]: { windowWidth } }
) => windowWidth

export const mapWindowHeight = (
    { [VIEWPORT_STORE]: { windowHeight } }
) => windowHeight

export const mapDeviceWidthIndex = (
    { [VIEWPORT_STORE]: { deviceWidthIndex } }
) => deviceWidthIndex

export const mapIsHeightlessLyric = (
    { [VIEWPORT_STORE]: { isHeightlessLyric } }
) => isHeightlessLyric

export const mapIsTwoRowMenu = (
    { [VIEWPORT_STORE]: { isTwoRowMenu } }
) => isTwoRowMenu

export const mapMenuHeight = (
    { [VIEWPORT_STORE]: { menuHeight } }
) => menuHeight

export const mapCanCarouselMount = (
    { [VIEWPORT_STORE]: { canCarouselMount } }
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

export const mapStageDimensionCoordinates = (
    { [VIEWPORT_STORE]: { stageDimensionCoordinates } }
) => stageDimensionCoordinates

export const mapProsceniumDimensionCoordinates = (
    { [VIEWPORT_STORE]: { prosceniumDimensionCoordinates } }
) => prosceniumDimensionCoordinates

export const mapCeilingHeight = (
    { [VIEWPORT_STORE]: { ceilingHeight } }
) => ceilingHeight

export const mapFloorHeight = (
    { [VIEWPORT_STORE]: { floorHeight } }
) => floorHeight

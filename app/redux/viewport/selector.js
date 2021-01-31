import { createSelector } from 'reselect'
import {
    getCanScoreMount,
    getCanSliderMount,
    getPopupMaxHeight,
} from '../../helpers/resize/mount'
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

export const mapCanCarouselNavMount = (
    { [VIEWPORT_STORE]: { canCarouselNavMount } }
) => canCarouselNavMount

export const mapCanScoreMount = createSelector(
    mapDeviceWidthIndex,
    deviceWidthIndex => getCanScoreMount(deviceWidthIndex)
)

export const mapCanSliderMount = createSelector(
    mapDeviceWidthIndex,
    deviceWidthIndex => getCanSliderMount(deviceWidthIndex)
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

export const mapPopupMaxHeight = createSelector(
    mapWindowHeight,
    mapMenuHeight,
    mapDeviceWidthIndex,
    (
        windowHeight,
        menuHeight,
        deviceWidthIndex
    ) => getPopupMaxHeight({
        windowHeight,
        menuHeight,
        deviceWidthIndex,
    })
)

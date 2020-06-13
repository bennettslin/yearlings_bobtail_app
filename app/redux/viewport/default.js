import {
    getWindowDimensions,
    getDeviceWidthIndex
} from '../../helpers/resize/device'
import { getIsHeightlessLyric } from '../../helpers/resize/hidden'
import { getCanCarouselMount } from '../../helpers/resize/mount'
import {
    getIsTwoRowMenu,
    getMenuHeight
} from '../../helpers/resize/responsive'
import { getStageDimensionCoordinates } from '../../helpers/resize/stage'
import { getProsceniumDimensionCoordinates } from '../../helpers/resize/proscenium'
import { getCeilingFloorHeight } from '../../helpers/resize/theatre'

const
    {
        windowWidth,
        windowHeight
    } = getWindowDimensions(),
    deviceWidthIndex = getDeviceWidthIndex(windowWidth),
    isHeightlessLyric = getIsHeightlessLyric({
        windowWidth,
        windowHeight,
        deviceWidthIndex
    }),
    isTwoRowMenu = getIsTwoRowMenu({
        windowWidth,
        deviceWidthIndex
    }),
    menuHeight = getMenuHeight({
        isTwoRowMenu
    }),
    canCarouselMount = getCanCarouselMount({
        deviceWidthIndex,
        windowHeight,
        isHeightlessLyric
    }),
    stageDimensionCoordinates =
        getStageDimensionCoordinates({
            deviceWidthIndex,
            windowWidth,
            windowHeight,
            isHeightlessLyric,
            isTwoRowMenu,
            menuHeight,
            canCarouselMount
        }),
    prosceniumDimensionCoordinates =
        getProsceniumDimensionCoordinates(stageDimensionCoordinates),
    {
        ceilingHeight,
        floorHeight
    } = getCeilingFloorHeight({
        deviceWidthIndex,
        windowHeight,
        isHeightlessLyric,
        isTwoRowMenu,
        menuHeight,
        prosceniumDimensionCoordinates
    })

export const VIEWPORT_DEFAULTS = {
    windowWidth,
    windowHeight,
    deviceWidthIndex,
    isHeightlessLyric,
    isTwoRowMenu,
    menuHeight,
    canCarouselMount,
    stageDimensionCoordinates,
    prosceniumDimensionCoordinates,
    ceilingHeight,
    floorHeight
}

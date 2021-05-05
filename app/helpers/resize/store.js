import { getDeviceWidthIndex } from './device'
import { getIsHeightlessLyric } from './hidden'
import {
    getIsTwoRowMenu,
    getMenuHeight,
} from './responsive'
import { getCanCarouselNavMount } from './mount'
import { getStageDimensionCoordinates } from './stage'
import { getProsceniumDimensionCoordinates } from './proscenium'
import { getCeilingFloorHeight } from './theatre'

export const getViewportStore = ({
    windowHeight,
    windowWidth,
    isMarketingPage,
}) => {
    const
        deviceWidthIndex = getDeviceWidthIndex(windowWidth),
        isHeightlessLyric = getIsHeightlessLyric({
            deviceWidthIndex,
            windowHeight,
            windowWidth,
        }),
        isTwoRowMenu = getIsTwoRowMenu({
            deviceWidthIndex,
            windowWidth,
        }),
        menuHeight = getMenuHeight({ isTwoRowMenu }),
        canCarouselNavMount = getCanCarouselNavMount({
            deviceWidthIndex,
            windowHeight,
            isHeightlessLyric,
        }),
        stageDimensionCoordinates = getStageDimensionCoordinates({
            deviceWidthIndex,
            windowWidth,
            windowHeight,
            menuHeight,
            isHeightlessLyric,
            isTwoRowMenu,
            canCarouselNavMount,
        }),
        prosceniumDimensionCoordinates = getProsceniumDimensionCoordinates(
            stageDimensionCoordinates,
        ),
        {
            ceilingHeight,
            floorHeight,
        } = getCeilingFloorHeight({
            deviceWidthIndex,
            windowHeight,
            menuHeight,
            prosceniumDimensionCoordinates,
            isHeightlessLyric,
            isTwoRowMenu,
        })

    return {
        // Marketing page just returns device width index.
        deviceWidthIndex,

        // TODO: Don't bother to calculate if marketing page.
        ...!isMarketingPage && {
            windowWidth,
            windowHeight,
            isHeightlessLyric,
            isTwoRowMenu,
            menuHeight,
            canCarouselNavMount,
            stageDimensionCoordinates,
            prosceniumDimensionCoordinates,
            ceilingHeight,
            floorHeight,
        },
    }
}

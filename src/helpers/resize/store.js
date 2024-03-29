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
    isPromoPage,
}) => {
    const deviceWidthIndex = getDeviceWidthIndex(windowWidth)

    if (isPromoPage) {
        // Promo page just has device width index.
        return { deviceWidthIndex }
    }

    const
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
        deviceWidthIndex,
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
    }
}

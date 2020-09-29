// Actions for viewport size.
import {
    hasKey,
    getDefinedOnlyPayload
} from '../../helpers/action'
import { VIEWPORT_STORE } from '../../constants/store'
import { getDeviceWidthIndex } from '../../helpers/resize/device'
import { getIsHeightlessLyric } from '../../helpers/resize/hidden'
import {
    getIsTwoRowMenu,
    getMenuHeight
} from '../../helpers/resize/responsive'
import { getCanCarouselNavMount } from '../../helpers/resize/mount'
import { getStageDimensionCoordinates } from '../../helpers/resize/stage'
import { getProsceniumDimensionCoordinates } from '../../helpers/resize/proscenium'
import { getCeilingFloorHeight } from '../../helpers/resize/theatre'

export const updateViewportStore = payload => {
    const { windowWidth, windowHeight } = payload

    if (hasKey(windowWidth) && hasKey(windowHeight)) {
        const
            deviceWidthIndex = getDeviceWidthIndex(windowWidth),
            isHeightlessLyric = getIsHeightlessLyric({
                deviceWidthIndex,
                windowHeight,
                windowWidth
            }),
            isTwoRowMenu = getIsTwoRowMenu({
                deviceWidthIndex,
                windowWidth
            }),
            menuHeight = getMenuHeight({ isTwoRowMenu }),
            canCarouselNavMount = getCanCarouselNavMount({
                deviceWidthIndex,
                windowHeight,
                isHeightlessLyric
            }),
            stageDimensionCoordinates = getStageDimensionCoordinates({
                deviceWidthIndex,
                windowWidth,
                windowHeight,
                menuHeight,
                isHeightlessLyric,
                isTwoRowMenu,
                canCarouselNavMount
            }),
            prosceniumDimensionCoordinates = getProsceniumDimensionCoordinates(
                stageDimensionCoordinates
            ),
            {
                ceilingHeight,
                floorHeight
            } = getCeilingFloorHeight({
                deviceWidthIndex,
                windowHeight,
                menuHeight,
                prosceniumDimensionCoordinates,
                isHeightlessLyric,
                isTwoRowMenu
            })

        payload = {
            windowWidth,
            windowHeight,
            deviceWidthIndex,
            isHeightlessLyric,
            isTwoRowMenu,
            menuHeight,
            canCarouselNavMount,
            stageDimensionCoordinates,
            prosceniumDimensionCoordinates,
            ceilingHeight,
            floorHeight
        }
    }

    return ({
        type: VIEWPORT_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}

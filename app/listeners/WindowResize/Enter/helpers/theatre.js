import {
    LS_HEIGHT_MENU,
    LS_TOP_OFFSET_TWO_ROW_MENU,
    LS_TOP_OFFSET_TWO_ROW_MENU_PHONE,
    LS_HEIGHT_LYRIC_COLLAPSED
} from 'constants/responsive'

import {
    getIsPhoneWidth,
    getIsDesktopWidth
} from 'helpers/responsive'

/*********
 * STAGE *
 *********/

const _getEarColumnHeight = (
    deviceWidthIndex,
    isHeightlessLyric,
    windowHeight
) => {
    return (
        isHeightlessLyric || getIsDesktopWidth(deviceWidthIndex)
    ) ? 0 : windowHeight * LS_HEIGHT_LYRIC_COLLAPSED
}

export const getIsTwoRowMenu = (deviceWidthIndex) => {
    return getIsPhoneWidth(deviceWidthIndex)
}

export const getCentreFieldHeight = ({
    deviceWidthIndex,
    windowHeight,
    isHeightlessLyric
}) => {
    const earColumnHeight = _getEarColumnHeight(
        deviceWidthIndex, isHeightlessLyric, windowHeight
    )

    let menuHeight = LS_HEIGHT_MENU

    if (getIsTwoRowMenu(deviceWidthIndex)) {

        if (getIsPhoneWidth(deviceWidthIndex)) {
            menuHeight = LS_TOP_OFFSET_TWO_ROW_MENU_PHONE

        } else {
            menuHeight = LS_TOP_OFFSET_TWO_ROW_MENU
        }
    }

    return windowHeight - menuHeight - earColumnHeight
}

export const getCeilingFloorHeight = ({
    deviceWidthIndex,
    windowHeight,
    stageHeight,
    stageTop,
    isHeightlessLyric
}) => {

    const
        earColumnHeight = _getEarColumnHeight(
            deviceWidthIndex,
            isHeightlessLyric,
            windowHeight
        ),

        centreFieldHeight = getCentreFieldHeight({
            deviceWidthIndex,
            windowHeight,
            isHeightlessLyric
        }),

        ceilingHeight =
            windowHeight
            - centreFieldHeight
            + stageTop
            - earColumnHeight,

        floorHeight =
            centreFieldHeight
            - stageTop
            - stageHeight * 0.9 // Overlap part of stage scene.
            + earColumnHeight

    return {
        ceilingHeight: Number(ceilingHeight.toFixed(2)),
        floorHeight: Number(floorHeight.toFixed(2))
    }
}

export const getLyricHeightRatio = ({
    deviceWidthIndex,
    windowHeight,
    stageHeight,
    isHeightlessLyric
}) => {

    // Desktop is always 100%.
    if (getIsDesktopWidth(deviceWidthIndex)) {
        return 1

    // Heightless lyric is 0%, obviously.
    } else if (isHeightlessLyric) {
        return 0
    }

    // Mobile not phone is always 32%.
    if (!getIsPhoneWidth(deviceWidthIndex)) {
        return LS_HEIGHT_LYRIC_COLLAPSED
    }

    const rawHeight = (
        windowHeight
        - LS_TOP_OFFSET_TWO_ROW_MENU_PHONE
        - stageHeight
    ) / windowHeight

    return Number(rawHeight.toFixed(2))
}

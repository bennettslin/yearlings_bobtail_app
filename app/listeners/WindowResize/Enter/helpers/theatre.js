import {
    LS_HEIGHT_MENU,
    LS_TOP_OFFSET_TWO_ROW_MENU,
    LS_TOP_OFFSET_TWO_ROW_MENU_PHONE,
    LS_HEIGHT_LYRIC_COLLAPSED,

    TWO_ROW_MENU_BREAKPOINT_LAPTOP,
    TWO_ROW_MENU_BREAKPOINT_MINI
} from 'constants/responsive'

import {
    getIsPhone,
    getIsDesktop
} from 'helpers/responsive'

/*********
 * STAGE *
 *********/

const _getEarColumnHeight = (
    deviceIndex,
    isHeightlessLyric,
    windowHeight
) => {
    return (
        isHeightlessLyric || getIsDesktop(deviceIndex)
    ) ? 0 : windowHeight * LS_HEIGHT_LYRIC_COLLAPSED
}

export const getIsTwoRowMenu = ({
    deviceIndex, windowWidth
}) => {

    const isDesktop = getIsDesktop(deviceIndex),
        twoRowMenuBreakpoint = isDesktop ?
            TWO_ROW_MENU_BREAKPOINT_LAPTOP :
            TWO_ROW_MENU_BREAKPOINT_MINI

    return windowWidth < twoRowMenuBreakpoint
}

export const getCentreFieldHeight = ({
    deviceIndex,
    windowWidth,
    windowHeight,
    isHeightlessLyric
}) => {
    const earColumnHeight = _getEarColumnHeight(
        deviceIndex, isHeightlessLyric, windowHeight
    )

    let menuHeight = LS_HEIGHT_MENU

    if (getIsTwoRowMenu({
        deviceIndex, windowWidth
    })) {

        if (getIsPhone(deviceIndex)) {
            menuHeight = LS_TOP_OFFSET_TWO_ROW_MENU_PHONE

        } else {
            menuHeight = LS_TOP_OFFSET_TWO_ROW_MENU
        }
    }

    return windowHeight - menuHeight - earColumnHeight
}

export const getCeilingFloorHeight = ({
    deviceIndex,
    windowWidth,
    windowHeight,
    stageHeight,
    stageTop,
    isHeightlessLyric
}) => {

    const
        earColumnHeight = _getEarColumnHeight(
            deviceIndex,
            isHeightlessLyric,
            windowHeight
        ),

        centreFieldHeight = getCentreFieldHeight({
            deviceIndex,
            windowWidth,
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
    deviceIndex,
    windowHeight,
    stageHeight,
    isHeightlessLyric
}) => {

    // Desktop is always 100%.
    if (getIsDesktop(deviceIndex)) {
        return 1

    // Heightless lyric is 0%, obviously.
    } else if (isHeightlessLyric) {
        return 0
    }

    // Mobile not phone is always 32%.
    if (!getIsPhone(deviceIndex)) {
        return LS_HEIGHT_LYRIC_COLLAPSED
    }

    const rawHeight = (
        windowHeight
        - LS_TOP_OFFSET_TWO_ROW_MENU_PHONE
        - stageHeight
    ) / windowHeight

    return Number(rawHeight.toFixed(2))
}

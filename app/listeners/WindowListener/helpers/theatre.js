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
} from 'helpers/responsiveHelper'

/*********
 * STAGE *
 *********/

const _getEarColumnHeight = (
    deviceIndex,
    isHiddenLyric,
    windowHeight
) => {
    return (
        isHiddenLyric || getIsDesktop(deviceIndex)
    ) ? 0 : windowHeight * LS_HEIGHT_LYRIC_COLLAPSED
}

const getIsTwoRowMenu = ({
    deviceIndex, windowWidth
}) => {

    const isDesktop = getIsDesktop(deviceIndex),
        twoRowMenuBreakpoint = isDesktop ?
            TWO_ROW_MENU_BREAKPOINT_LAPTOP : TWO_ROW_MENU_BREAKPOINT_MINI

    return windowWidth < twoRowMenuBreakpoint
}

const getCentreFieldHeight = ({
    deviceIndex,
    windowWidth,
    windowHeight,
    isHiddenLyric
}) => {
    const earColumnHeight = _getEarColumnHeight(
        deviceIndex, isHiddenLyric, windowHeight
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

const getCeilingFloorHeight = ({
    deviceIndex,
    windowWidth,
    windowHeight,
    stageHeight,
    stageTop,
    isHiddenLyric
}) => {

    const
        earColumnHeight = _getEarColumnHeight(
            deviceIndex, isHiddenLyric, windowHeight
        ),
        centreFieldHeight = getCentreFieldHeight({
            deviceIndex,
            windowWidth,
            windowHeight,
            isHiddenLyric
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

export {
    getIsTwoRowMenu,
    getCentreFieldHeight,
    getCeilingFloorHeight
}

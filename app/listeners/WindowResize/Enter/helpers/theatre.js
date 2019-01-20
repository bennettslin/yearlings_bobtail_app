import {
    LS_HEIGHT_MENU,
    LS_HEIGHT_TWO_ROW_MENU,
    LS_HEIGHT_LYRIC_COLLAPSED
} from 'constants/responsive'

import {
    getIsPhoneWidth,
    getIsDesktopWidth
} from 'helpers/responsive'

/*********
 * STAGE *
 *********/

const _getLyricColumnHeight = (
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
    isHeightlessLyric,
    isTwoRowMenu
}) => {
    const
        lyricColumnHeight = _getLyricColumnHeight(
            deviceWidthIndex,
            isHeightlessLyric,
            windowHeight
        ),

        menuHeight =
            isTwoRowMenu ?
                LS_HEIGHT_TWO_ROW_MENU :
                LS_HEIGHT_MENU

    return windowHeight - menuHeight - lyricColumnHeight
}

export const getCeilingFloorHeight = ({
    deviceWidthIndex,
    windowHeight,
    stageHeight,
    stageTop,
    isHeightlessLyric,
    isTwoRowMenu
}) => {

    const
        lyricColumnHeight = _getLyricColumnHeight(
            deviceWidthIndex,
            isHeightlessLyric,
            windowHeight
        ),

        centreFieldHeight = getCentreFieldHeight({
            deviceWidthIndex,
            windowHeight,
            isHeightlessLyric,
            isTwoRowMenu
        }),

        ceilingHeight =
            windowHeight
            - centreFieldHeight
            + stageTop
            - lyricColumnHeight,

        floorHeight =
            centreFieldHeight
            - stageTop
            - stageHeight * 0.9 // Overlap part of stage scene.
            + lyricColumnHeight

    return {
        ceilingHeight: Number(ceilingHeight.toFixed(2)),
        floorHeight: Number(floorHeight.toFixed(2))
    }
}

import {
    LS_HEIGHT_MENU,
    LS_TOP_TWO_ROW_MENU,
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
    isHeightlessLyric
}) => {
    const lyricColumnHeight = _getLyricColumnHeight(
        deviceWidthIndex,
        isHeightlessLyric,
        windowHeight
    )

    let menuHeight = LS_HEIGHT_MENU

    if (getIsTwoRowMenu(deviceWidthIndex)) {
        menuHeight = LS_TOP_TWO_ROW_MENU
    }

    return windowHeight - menuHeight - lyricColumnHeight
}

export const getCeilingFloorHeight = ({
    deviceWidthIndex,
    windowHeight,
    stageHeight,
    stageTop,
    isHeightlessLyric
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
            isHeightlessLyric
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

export const getLyricDynamicHeightRatio = ({
    deviceWidthIndex,
    windowHeight,
    stageHeight
}) => {

    // // Desktop is always 100%.
    // if (getIsDesktopWidth(deviceWidthIndex)) {
    //     return 1

    // // Heightless lyric is 0%, obviously.
    // } else if (isHeightlessLyric) {
    //     return 0
    // }

    // // If carousel can mount, allow lyric height to be constant.
    // if (canCarouselMount) {
    //     return LS_HEIGHT_LYRIC_COLLAPSED
    // }

    // Desktop is always 100%.
    if (getIsDesktopWidth(deviceWidthIndex)) {
        return 1
    }

    const
        menuHeight = getIsPhoneWidth(deviceWidthIndex) ?
            LS_TOP_TWO_ROW_MENU :
            LS_HEIGHT_MENU,

        rawHeight = (
            windowHeight
            - menuHeight
            - stageHeight
        ) / windowHeight

    return Number(rawHeight.toFixed(2))
}

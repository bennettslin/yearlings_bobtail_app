import {
    LS_HEIGHT_MENU,
    LS_TOP_OFFSET_TWO_ROW_MENU,
    LS_TOP_OFFSET_TWO_ROW_MENU_PHONE,
    LS_HEIGHT_LYRIC_COLLAPSED
} from 'constants/responsive'

import {
    getIsPhone,
    getIsDesktop,
    getIsTwoRowMenu
} from 'helpers/responsiveHelper'

/*********
 * STAGE *
 *********/

const _getLyricColumnHeight = (
    deviceIndex,
    isHiddenLyric,
    windowHeight
) => {
    return (
        isHiddenLyric || getIsDesktop(deviceIndex)
    ) ? 0 : windowHeight * LS_HEIGHT_LYRIC_COLLAPSED
}


const getCentreFieldHeight = ({
    deviceIndex,
    windowWidth,
    windowHeight,
    isHiddenLyric
}) => {
    const lyricColumnHeight = _getLyricColumnHeight(
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

    return windowHeight - menuHeight - lyricColumnHeight
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
        lyricColumnHeight = _getLyricColumnHeight(
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

export {
    getCentreFieldHeight,
    getCeilingFloorHeight
}

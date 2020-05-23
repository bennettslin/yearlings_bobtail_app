import {
    CSS_HEIGHT_MENU,
    HEIGHT_TWO_ROW_MENU,
    HEIGHT_LYRIC_COLLAPSED
} from '../../constants/responsive'
import { getIsDesktopWidth } from '../responsive'

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
    ) ? 0 : windowHeight * HEIGHT_LYRIC_COLLAPSED
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
                HEIGHT_TWO_ROW_MENU :
                CSS_HEIGHT_MENU

    return windowHeight - menuHeight - lyricColumnHeight
}

export const getCeilingFloorHeight = ({
    deviceWidthIndex,
    windowHeight,
    menuHeight,
    prosceniumTop,
    prosceniumHeight,
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
            + prosceniumTop
            - menuHeight
            - lyricColumnHeight,

        floorHeight =
            centreFieldHeight
            - prosceniumTop
            + menuHeight
            - prosceniumHeight * 0.85 // Overlap part of stage scene.
            + lyricColumnHeight

    return {
        ceilingHeight: Number(ceilingHeight.toFixed(2)),
        floorHeight: Number(floorHeight.toFixed(2))
    }
}

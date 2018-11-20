import {
    LS_HEIGHT_LYRIC_COLLAPSED,
    LS_HEIGHT_MENU,
    LS_TOP_OFFSET_TWO_ROW_MENU,
    LS_TOP_OFFSET_TWO_ROW_MENU_PHONE
} from 'constants/responsive'

import {
    getIsDesktop,
    getIsPhone,
    getIsTwoRowMenu
} from './responsiveHelper'

/*********
 * STAGE *
 *********/

export const getLyricColumnHeight = (
    deviceIndex,
    isHeightlessLyricColumn,
    windowHeight
) => {
    return (
        isHeightlessLyricColumn || getIsDesktop(deviceIndex)
    ) ? 0 : windowHeight * LS_HEIGHT_LYRIC_COLLAPSED
}

export const getCentreFieldHeight = ({
    deviceIndex,
    windowWidth,
    windowHeight,
    isHeightlessLyricColumn
}) => {
    const lyricColumnHeight = getLyricColumnHeight(
        deviceIndex, isHeightlessLyricColumn, windowHeight
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

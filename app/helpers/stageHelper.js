import { STAGE_ASPECT_RATIO,
         STAGE_WIDTH_DESKTOP_OVERFLOW_PERCENTAGE } from '../constants/stage'

import { PHONE_CLASS,
         LS_MINI_CLASS,
         TABLET_CLASS,
         LS_LAPTOP_CLASS,
         MONITOR_CLASS,
         DEVICE_OBJECTS,

         LS_WIDTH_GOLDEN_CORD,
         LS_WIDTH_UNCANNY_VALLEY,

         LS_LENGTH_ICON,
         LS_LENGTH_ICON_LARGE_MINI,
         LS_LENGTH_ICON_LARGE_TABLET,
         LS_LENGTH_ICON_LARGE,
         LS_MARGIN_THIN,

         LS_HEIGHT_LYRIC_COLLAPSED,
         LS_HEIGHT_MENU,
         LS_HEIGHT_MENU_PHONE,

         LS_HEIGHT_NAV } from '../constants/responsive'

import { getIsDesktop, getIsPhone, getIsMonitor, getIsHiddenNav } from './responsiveHelper'

/*********
 * STAGE *
 *********/

export const getStageCoordinates = ({
    deviceIndex,
    windowWidth,
    windowHeight,
    isHeightlessLyricColumn
}) => {

    const isDesktop = getIsDesktop(deviceIndex),

        leftShelfOverflow =
            _getLeftShelfOverflow(deviceIndex),

        centreFieldWidth = _getCentreFieldWidth(deviceIndex, windowWidth) - leftShelfOverflow,

        isPhone = getIsPhone(deviceIndex),

        isHiddenNav = getIsHiddenNav({ deviceIndex, windowHeight }),

        navHeight = isPhone || isHeightlessLyricColumn || isHiddenNav ? 0 : LS_HEIGHT_NAV,

        centreFieldHeight = getCentreFieldHeight(deviceIndex, windowHeight, isHeightlessLyricColumn) - navHeight,

        centreFieldRatio = centreFieldWidth / centreFieldHeight

    let top = 0,
        left = 0,
        width = centreFieldWidth,
        height = centreFieldHeight

    // Maintain stage width, adjust stage height.
    if (centreFieldRatio < STAGE_ASPECT_RATIO) {
        height *= centreFieldRatio / STAGE_ASPECT_RATIO

    // Maintain stage height, adjust stage width.
    } else if (centreFieldRatio > STAGE_ASPECT_RATIO) {
        width *= STAGE_ASPECT_RATIO / centreFieldRatio
    }

    if (isDesktop) {
        // If stage height is adjustable, put closer to top in desktop.
        top = (centreFieldHeight - height) * 0.1

        // Scoot left a bit to give room to dots overview.
        left = leftShelfOverflow + (centreFieldWidth - width) * 0.5

    } else {
        // If stage height is adjustable, put closer to bottom in mobile.
        top = navHeight + (centreFieldHeight - height) * 0.9

        // Keep centred in mobile, even with dots overview.
        left = (leftShelfOverflow + centreFieldWidth - width) * 0.5
    }

    return {
        top,
        left,
        width,
        height
    }
}

const _getLyricColumnHeight = (
    deviceIndex,
    isHeightlessLyricColumn,
    windowHeight
) => {
    return (
        isHeightlessLyricColumn || getIsDesktop(deviceIndex)
    ) ? 0 : windowHeight * LS_HEIGHT_LYRIC_COLLAPSED
}

export const getTheatreCeilingHeight = ({
    deviceIndex,
    windowHeight,
    centreFieldHeight,
    stageTop,
    isHeightlessLyricColumn
}) => {

    const lyricColumnHeight = _getLyricColumnHeight(
        deviceIndex, isHeightlessLyricColumn, windowHeight
    )

    return windowHeight - centreFieldHeight + stageTop - lyricColumnHeight
}

export const getTheatreFloorHeight = ({
    deviceIndex,
    windowHeight,
    centreFieldHeight,
    stageHeight,
    stageTop,
    isHeightlessLyricColumn
}) => {

    const lyricColumnHeight = _getLyricColumnHeight(
        deviceIndex, isHeightlessLyricColumn, windowHeight
    )

    return centreFieldHeight - stageTop - stageHeight + lyricColumnHeight
}

const _getCentreFieldWidth = (deviceIndex, windowWidth) => {
    let lyricWidth = 0,
        overflowPercentage = 1

    if (getIsDesktop(deviceIndex)) {
        overflowPercentage = STAGE_WIDTH_DESKTOP_OVERFLOW_PERCENTAGE

        if (getIsMonitor(deviceIndex)) {
            lyricWidth = LS_WIDTH_GOLDEN_CORD
        } else {
            lyricWidth = LS_WIDTH_UNCANNY_VALLEY
        }
    }

    return windowWidth * overflowPercentage - lyricWidth
}

export const getCentreFieldHeight = (
    deviceIndex,
    windowHeight,
    isHeightlessLyricColumn
) => {
    const lyricColumnHeight = _getLyricColumnHeight(
            deviceIndex, isHeightlessLyricColumn, windowHeight
        ),

        menuHeight = getIsPhone(deviceIndex) ?
            LS_HEIGHT_MENU_PHONE : LS_HEIGHT_MENU

    return windowHeight - menuHeight - lyricColumnHeight
}

export const _getLeftShelfOverflow = (deviceIndex) => {
    let toggleButtonWidth = 0

    switch (DEVICE_OBJECTS[deviceIndex].className) {
        case MONITOR_CLASS:
        case LS_LAPTOP_CLASS:
            toggleButtonWidth = LS_LENGTH_ICON_LARGE
            break
        case TABLET_CLASS:
            toggleButtonWidth = LS_LENGTH_ICON_LARGE_TABLET
            break
        case LS_MINI_CLASS:
            toggleButtonWidth = LS_LENGTH_ICON_LARGE_MINI
            break
        case PHONE_CLASS:
            toggleButtonWidth = LS_LENGTH_ICON
            break
    }

    return (toggleButtonWidth + LS_MARGIN_THIN)
}

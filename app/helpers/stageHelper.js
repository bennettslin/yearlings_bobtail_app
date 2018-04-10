import { STAGE_ASPECT_RATIO,
         STAGE_WIDTH_DESKTOP_OVERFLOW_PERCENTAGE } from '../constants/stage'

import { PHONE_WIDTH,
         LS_WIDTH_MINI,
         TABLET_WIDTH,
         LS_LAPTOP_WIDTH,
         MONITOR_WIDTH,
         DEVICE_OBJECTS,

         LS_WIDTH_GOLDEN_CORD,
         LS_WIDTH_UNCANNY_VALLEY,

         LS_LENGTH_ICON,
         APP_MINI_LARGE_ICON_DIAMETER,
         APP_TABLET_LARGE_ICON_DIAMETER,
         APP_LARGE_ICON_DIAMETER,
         APP_THIN_MARGIN,

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

        dotsOverviewOverflow =
            _getDotsOverviewOverflow(deviceIndex),

        centreFieldWidth = _getCentreFieldWidth(deviceIndex, windowWidth) - dotsOverviewOverflow,

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
        left = dotsOverviewOverflow + (centreFieldWidth - width) * 0.5

    } else {
        // If stage height is adjustable, put closer to bottom in mobile.
        top = navHeight + (centreFieldHeight - height) * 0.9

        // Keep centred in mobile, even with dots overview.
        left = (dotsOverviewOverflow + centreFieldWidth - width) * 0.5
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

export const _getDotsOverviewOverflow = (deviceIndex) => {
    let toggleButtonWidth = 0

    switch (DEVICE_OBJECTS[deviceIndex].className) {
        case MONITOR_WIDTH:
        case LS_LAPTOP_WIDTH:
            toggleButtonWidth = APP_LARGE_ICON_DIAMETER
            break
        case TABLET_WIDTH:
            toggleButtonWidth = APP_TABLET_LARGE_ICON_DIAMETER
            break
        case LS_WIDTH_MINI:
            toggleButtonWidth = APP_MINI_LARGE_ICON_DIAMETER
            break
        case PHONE_WIDTH:
            toggleButtonWidth = LS_LENGTH_ICON
            break
    }

    return (toggleButtonWidth + APP_THIN_MARGIN)
}

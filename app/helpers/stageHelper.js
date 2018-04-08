import { STAGE_ASPECT_RATIO,
         STAGE_WIDTH_DESKTOP_OVERFLOW_PERCENTAGE } from '../constants/stage'

import { PHONE_WIDTH,
         MINI_WIDTH,
         TABLET_WIDTH,
         LAPTOP_WIDTH,
         MONITOR_WIDTH,
         DEVICE_OBJECTS,

         GOLDEN_CORD_WIDTH,
         UNCANNY_VALLEY_WIDTH,

         LS_LENGTH_ICON,
         APP_MINI_LARGE_ICON_DIAMETER,
         APP_TABLET_LARGE_ICON_DIAMETER,
         APP_LARGE_ICON_DIAMETER,
         APP_THIN_MARGIN,

         COLLAPSED_LYRIC_SECTION_HEIGHT,
         LS_HEIGHT_MENU,
         LS_HEIGHT_MENU_PHONE,

         NAV_BOOK_HEIGHT } from '../constants/responsive'

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

        navHeight = isPhone || isHeightlessLyricColumn || isHiddenNav ? 0 : NAV_BOOK_HEIGHT,

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
    ) ? 0 : windowHeight * COLLAPSED_LYRIC_SECTION_HEIGHT
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
            lyricWidth = GOLDEN_CORD_WIDTH
        } else {
            lyricWidth = UNCANNY_VALLEY_WIDTH
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
        case LAPTOP_WIDTH:
            toggleButtonWidth = APP_LARGE_ICON_DIAMETER
            break
        case TABLET_WIDTH:
            toggleButtonWidth = APP_TABLET_LARGE_ICON_DIAMETER
            break
        case MINI_WIDTH:
            toggleButtonWidth = APP_MINI_LARGE_ICON_DIAMETER
            break
        case PHONE_WIDTH:
            toggleButtonWidth = LS_LENGTH_ICON
            break
    }

    return (toggleButtonWidth + APP_THIN_MARGIN)
}

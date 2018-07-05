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
         LS_TOP_OFFSET_TWO_ROW_MENU,
         LS_TOP_OFFSET_TWO_ROW_MENU_PHONE,

         LS_HEIGHT_NAV } from '../constants/responsive'

import { getIsDesktop, getIsPhone, getIsMonitor, getIsHiddenCarouselNav, getIsTwoRowMenu } from './responsiveHelper'

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

        isHiddenCarouselNav = getIsHiddenCarouselNav({
            deviceIndex, windowHeight, windowWidth
        }),

        navHeight = isPhone || isHeightlessLyricColumn || isHiddenCarouselNav ? 0 : LS_HEIGHT_NAV,

        centreFieldHeight = getCentreFieldHeight({
            deviceIndex,
            windowWidth,
            windowHeight,
            isHeightlessLyricColumn
        }) - navHeight,

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
        left = leftShelfOverflow + (centreFieldWidth - width) * 0.05

    } else {
        // If stage height is adjustable, put closer to bottom in mobile.
        top = navHeight + (centreFieldHeight - height) * 0.9

        // Keep centred in mobile, even with dots overview.
        left = (leftShelfOverflow + centreFieldWidth - width) * 0.5
    }

    return {
        top: Number(top.toFixed(2)),
        left: Number(left.toFixed(2)),
        width: Number(width.toFixed(2)),
        height: Number(height.toFixed(2))
    }
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

    if (getIsTwoRowMenu({ deviceIndex, windowWidth })) {

        if (getIsPhone(deviceIndex)) {
            menuHeight = LS_TOP_OFFSET_TWO_ROW_MENU_PHONE

        } else {
            menuHeight = LS_TOP_OFFSET_TWO_ROW_MENU
        }
    }

    return windowHeight - menuHeight - lyricColumnHeight
}

const _getLeftShelfOverflow = (deviceIndex) => {
    let toggleButtonWidth = 0

    switch (DEVICE_OBJECTS[deviceIndex].className) {
        case MONITOR_CLASS:
        case LS_LAPTOP_CLASS:
            toggleButtonWidth = LS_LENGTH_ICON_LARGE * 0.9
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

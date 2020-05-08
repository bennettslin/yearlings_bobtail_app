import {
    getIsDesktopWidth,
    getIsMonitorWidth
} from '../../../../helpers/responsive'

import { getCentreFieldHeight } from './theatre'

import {
    STAGE_ASPECT_RATIO,
    STAGE_WIDTH_DESKTOP_OVERFLOW_PERCENTAGE
} from '../../../../constants/stage'

import {
    CSS_LENGTH_ICON,
    CSS_LENGTH_ICON_LARGE_MINI,
    CSS_LENGTH_ICON_LARGE_TABLET,
    CSS_LENGTH_ICON_LARGE,
    CSS_MARGIN_THIN
} from '../../../../constants/responsive'

import {
    CSS_HEIGHT_NAV,
    CSS_WIDTH_GOLDEN_CORD,
    CSS_WIDTH_UNCANNY_VALLEY,
    PHONE_WIDTH_KEY,
    MINI_WIDTH_KEY,
    TABLET_WIDTH_KEY,
    LAPTOP_WIDTH_KEY,
    MONITOR_WIDTH_KEY,
    DEVICE_WIDTH_CONFIGS
} from '../../../../constants/responsive/deviceWidth'

const _getLeftShelfOverflow = (deviceWidthIndex) => {
    let toggleButtonWidth = 0

    switch (DEVICE_WIDTH_CONFIGS[deviceWidthIndex].deviceWidthKey) {
        case MONITOR_WIDTH_KEY:
        case LAPTOP_WIDTH_KEY:
            toggleButtonWidth = CSS_LENGTH_ICON_LARGE * 0.9
            break
        case TABLET_WIDTH_KEY:
            toggleButtonWidth = CSS_LENGTH_ICON_LARGE_TABLET
            break
        case MINI_WIDTH_KEY:
            toggleButtonWidth = CSS_LENGTH_ICON_LARGE_MINI
            break
        case PHONE_WIDTH_KEY:
            toggleButtonWidth = CSS_LENGTH_ICON
            break
    }

    return (toggleButtonWidth + CSS_MARGIN_THIN)
}

const _getCentreFieldWidth = (
    deviceWidthIndex,
    windowWidth
) => {
    let lyricWidth = 0,
        overflowPercentage = 1

    if (getIsDesktopWidth(deviceWidthIndex)) {
        overflowPercentage = STAGE_WIDTH_DESKTOP_OVERFLOW_PERCENTAGE

        if (getIsMonitorWidth(deviceWidthIndex)) {
            lyricWidth = CSS_WIDTH_GOLDEN_CORD
        } else {
            lyricWidth = CSS_WIDTH_UNCANNY_VALLEY
        }
    }

    return windowWidth * overflowPercentage - lyricWidth
}

export const getStageCoordinates = ({
    deviceWidthIndex,
    windowWidth,
    windowHeight,
    menuHeight,
    isHeightlessLyric,
    isTwoRowMenu,
    canCarouselMount
}) => {

    const isDesktopWidth = getIsDesktopWidth(deviceWidthIndex),

        leftShelfOverflow =
            _getLeftShelfOverflow(deviceWidthIndex),

        centreFieldWidth = _getCentreFieldWidth(
            deviceWidthIndex,
            windowWidth
        ) - leftShelfOverflow,

        navHeight = canCarouselMount ? CSS_HEIGHT_NAV : 0,

        centreFieldHeight = getCentreFieldHeight({
            deviceWidthIndex,
            windowHeight,
            isHeightlessLyric,
            isTwoRowMenu
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

    if (isDesktopWidth) {
        // If stage height is adjustable, put closer to top in desktop.
        top = (centreFieldHeight - height) * 0.1

        // Scoot left a bit to give room to dots overview.
        left = leftShelfOverflow + (centreFieldWidth - width) * 0.05

    } else {
        /**
         * If stage height is adjustable, put closer to bottom if carousel can
         * mount.
         */
        const carouselOffset = canCarouselMount ?
            (centreFieldHeight - height) * 0.9 : 0

        top = navHeight + carouselOffset

        // Keep centred in mobile, even with dots overview.
        left = (leftShelfOverflow + centreFieldWidth - width) * 0.5
    }

    return {
        stageTop: Number((top + menuHeight).toFixed(2)),
        stageLeft: Number(left.toFixed(2)),
        stageWidth: Number(width.toFixed(2)),
        stageHeight: Number(height.toFixed(2))
    }
}

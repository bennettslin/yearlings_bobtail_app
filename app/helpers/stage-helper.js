import { STAGE_ASPECT_RATIO,
         STAGE_WIDTH_DESKTOP_OVERFLOW_PERCENTAGE,
         VANISHING_POINT_Y_PERCENTAGE,
         TILE_Y_PERCENTAGES,
         TILE_COLUMNS_LENGTH } from '../constants/stage'

import { PHONE_WIDTH,
         MINI_WIDTH,
         TABLET_WIDTH,
         LAPTOP_WIDTH,
         MONITOR_WIDTH,
         DEVICE_OBJECTS,

         GOLDEN_CORD_WIDTH,
         UNCANNY_VALLEY_WIDTH,

         APP_ICON_DIAMETER,
         APP_MINI_LARGE_ICON_DIAMETER,
         APP_TABLET_LARGE_ICON_DIAMETER,
         APP_LARGE_ICON_DIAMETER,
         APP_THIN_MARGIN,
         AUDIO_BANNER_CUSTOM_SUBFIELD_HEIGHT,
         AUDIO_BANNER_CUSTOM_SUBFIELD_PADDING,

         COLLAPSED_LYRIC_SECTION_HEIGHT,
         MENU_HEIGHT,

         NAV_BOOK_HEIGHT } from '../constants/responsive'

import { roundPercentage } from './general-helper'
import { getIsDesktop, getIsPhone, getIsMonitor } from './responsive-helper'

export const getTileCornersForXYAndZ = (
    xIndex,
    yIndex,
    zIndex = 0
) => {
    /**
     * Like CSS corners, order is:
     *
     * top left, top right, bottom right, bottom left.
     */
    return [
        _getTileXYPercentageForXYCornerAndZ(
            xIndex, yIndex + 1, zIndex
        ),
        _getTileXYPercentageForXYCornerAndZ(
            xIndex + 1, yIndex + 1, zIndex
        ),
        _getTileXYPercentageForXYCornerAndZ(
            xIndex + 1, yIndex, zIndex
        ),
        _getTileXYPercentageForXYCornerAndZ(
            xIndex, yIndex, zIndex
        )
    ]
}

const _getTileXYPercentageForXYCornerAndZ = (

    // This is an interval from 0 to 12. There are twelve floor panel columns.
    xCornerIndex,

    // This is an interval from 0 to 6. There are six floor panel rows.
    yCornerIndex,

    /**
     * This is an interval from 0 to 10, with 0 being ground level, and 10
     * being level with the vanishing point.
     */
    zIndex = 0
) => {
    return {
        xPercentage: _getXPercentageForXCornerAndYCorner(
            xCornerIndex,
            yCornerIndex
        ),
        yPercentage: _getYPercentageForYCornerAndZ(
            yCornerIndex,
            zIndex
        )
    }
}

const _getXPercentageForXCornerAndYCorner = (
    xCornerIndex,
    yCornerIndex
) => {
    // Get x-coordinate percentage at zIndex 0.
    const baseYPercentage = _getYPercentageForYCornerAndZ(
            yCornerIndex, 0
        ),
        tilesWidthPercentage =
            100 / VANISHING_POINT_Y_PERCENTAGE *
            (VANISHING_POINT_Y_PERCENTAGE - baseYPercentage),

        rawXPercentage = (100 - tilesWidthPercentage) / 2 +
            xCornerIndex * tilesWidthPercentage /
            TILE_COLUMNS_LENGTH

    return roundPercentage(rawXPercentage)
}

const _getYPercentageForYCornerAndZ = (
    yCornerIndex,
    zIndex
) => {
    const tileYPercentage = TILE_Y_PERCENTAGES[yCornerIndex],
        rawYPercentage =
            tileYPercentage + zIndex / 10 *
            (VANISHING_POINT_Y_PERCENTAGE - tileYPercentage)

    return roundPercentage(rawYPercentage)
}

export const getStageCoordinates = ({
    deviceIndex,
    windowWidth,
    windowHeight,
    isHeightlessLyricColumn
}) => {

    const isDesktop = getIsDesktop(deviceIndex),

        dotsOverviewOverflow = isDesktop ? _getDotsOverviewOverflow(deviceIndex) : 0,
        centreFieldWidth = _getCentreFieldWidth(deviceIndex, windowWidth) - dotsOverviewOverflow,

        isPhone = getIsPhone(deviceIndex),

        audioBannerOverflow = isPhone ? AUDIO_BANNER_CUSTOM_SUBFIELD_HEIGHT + AUDIO_BANNER_CUSTOM_SUBFIELD_PADDING * 2 : 0,
        centreFieldHeight = getCentreFieldHeight(deviceIndex, windowHeight, isHeightlessLyricColumn) - audioBannerOverflow - NAV_BOOK_HEIGHT,

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
        top = audioBannerOverflow + NAV_BOOK_HEIGHT + (centreFieldHeight - height) * 0.9

        // Keep centred in mobile, even with dots overview.
        left = (centreFieldWidth - width) * 0.5
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

export const getTheatreSeatingHeight = ({
    deviceIndex,
    windowHeight,
    centreFieldHeight,
    stageHeight,
    stageTop,
    isHeightlessLyricColumn
}) => {

    if (isHeightlessLyricColumn) {
        return 0
    }

    return getIsDesktop(deviceIndex) ?
        centreFieldHeight - stageTop - stageHeight :
        windowHeight * COLLAPSED_LYRIC_SECTION_HEIGHT
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
    )

    return windowHeight - MENU_HEIGHT - lyricColumnHeight
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
            toggleButtonWidth = APP_ICON_DIAMETER
            break
    }

    return (toggleButtonWidth + APP_THIN_MARGIN) * 0.5
}

import { STAGE_ASPECT_RATIO,
         STAGE_WIDTH_DESKTOP_OVERFLOW_PERCENTAGE,
         VANISHING_POINT_Y_PERCENTAGE,
         TILE_Y_PERCENTAGES,
         TILE_COLUMNS_LENGTH,
         DIAGONAL_COLUMNS_LENGTH } from '../constants/stage'

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
         MENU_PHONE_HEIGHT,

         NAV_BOOK_HEIGHT } from '../constants/responsive'

import { roundPercentage } from './general-helper'
import { getIsDesktop, getIsPhone, getIsMonitor, getIsHiddenNav } from './responsive-helper'

const DIAGONAL_X_CONSTANTS = [0, 1, 0, 1, 2, 0]

/*********
 * TILES *
 *********/

export const getTileCornersForXYAndZ = (
    xIndex,
    yIndex,
    zIndex = 0,
    isDiagonal = false
) => {
    if (isDiagonal) {
        return _getTileRelativeCoordinatesForDiagonalXYAndZ(
            xIndex, yIndex, zIndex
        )
    } else {
        return _getTileRelativeCoordinatesForXYAndZ(
            xIndex, yIndex, zIndex
        )
    }
}

const _getTileRelativeCoordinatesForDiagonalXYAndZ = (
    xIndex, yIndex, zIndex
) => {

    let xModulo,
        yModulo

    // If yIndex is 2, 3, or 4...
    if (yIndex >= 2 && yIndex <= 4) {
        // xModulo for even xIndex is 3 above that for previous odd xIndex.
        xModulo = xIndex % 2 ? -0.5 : 0

        // yModulo for even xIndex is 1 above that for previous odd xIndex.
        yModulo = xIndex % 2 ? 0 : 1

    // If yIndex is 0, 1, or 5...
    } else {
        // xModulo for even xIndex is 2 above that for previous odd xIndex.
        xModulo = xIndex % 2 ? 0.5 : 0

        // yModulo for even xIndex is 1 below that for previous odd xIndex.
        yModulo = xIndex % 2 ? 1 : 0
    }

    const
        xConstant = DIAGONAL_X_CONSTANTS[yIndex],
        yConstant = yIndex * 2,

        // These are the coordinates for the top left corner.
        diagonalXIndex = xConstant + xIndex * 2.5 + xModulo,
        diagonalYIndex = yConstant + yModulo

    console.error('xIndex, yIndex', xIndex, yIndex)
    console.error('diagonalXIndex, diagonalYIndex', diagonalXIndex, diagonalYIndex)

    /**
     * When diagonal, order is:
     * top, right, bottom, left.
     */
    return [
        _getTileXYPercentageForDiagonalXYCornerAndZ(
            diagonalXIndex + 2, diagonalYIndex, zIndex
        ),
        _getTileXYPercentageForDiagonalXYCornerAndZ(
            diagonalXIndex + 3, diagonalYIndex + 2, zIndex
        ),
        _getTileXYPercentageForDiagonalXYCornerAndZ(
            diagonalXIndex + 1, diagonalYIndex + 3, zIndex
        ),
        _getTileXYPercentageForDiagonalXYCornerAndZ(
            diagonalXIndex, diagonalYIndex + 1, zIndex
        )
    ]
}

const _getTileXYPercentageForDiagonalXYCornerAndZ = (

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
        xPercentage: _getXPercentageForDiagonalXCornerAndYCorner(
            xCornerIndex,
            yCornerIndex
        ),
        yPercentage: _getYPercentageForDiagonalYCornerAndZ(
            yCornerIndex,
            zIndex
        )
    }
}

const _getXPercentageForDiagonalXCornerAndYCorner = (
    xCornerIndex,
    yCornerIndex
) => {
    // Get x-coordinate percentage at zIndex 0.
    const baseYPercentage = _getYPercentageForDiagonalYCornerAndZ(
        yCornerIndex, 0
    ),
    tilesWidthPercentage =
        100 / VANISHING_POINT_Y_PERCENTAGE *
        (VANISHING_POINT_Y_PERCENTAGE - baseYPercentage),

    rawXPercentage = (100 - tilesWidthPercentage) / 2 +
        xCornerIndex * tilesWidthPercentage /
        DIAGONAL_COLUMNS_LENGTH

return roundPercentage(rawXPercentage)
}

const _getYPercentageForDiagonalYCornerAndZ = (
    yCornerIndex,
    zIndex
) => {
    const tileYPercentage = TILE_Y_PERCENTAGES[yCornerIndex],
        rawYPercentage =
            tileYPercentage + zIndex / 10 *
            (VANISHING_POINT_Y_PERCENTAGE - tileYPercentage)

    return roundPercentage(rawYPercentage)
}

const _getTileRelativeCoordinatesForXYAndZ = (
    xIndex, yIndex, zIndex
) => {
        /**
     * Like CSS corners, order is:
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

        audioBannerOverflow = isPhone ? AUDIO_BANNER_CUSTOM_SUBFIELD_HEIGHT + AUDIO_BANNER_CUSTOM_SUBFIELD_PADDING * 2 : 0,

        isHiddenNav = getIsHiddenNav({ deviceIndex, windowHeight }),

        navHeight = isPhone || isHeightlessLyricColumn || isHiddenNav ? 0 : NAV_BOOK_HEIGHT,

        centreFieldHeight = getCentreFieldHeight(deviceIndex, windowHeight, isHeightlessLyricColumn) - audioBannerOverflow - navHeight,

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
        top = audioBannerOverflow + navHeight + (centreFieldHeight - height) * 0.9

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

export const getTheatreSeatingHeight = ({
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
            MENU_PHONE_HEIGHT : MENU_HEIGHT

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
            toggleButtonWidth = APP_ICON_DIAMETER
            break
    }

    return (toggleButtonWidth + APP_THIN_MARGIN) * 0.5
}

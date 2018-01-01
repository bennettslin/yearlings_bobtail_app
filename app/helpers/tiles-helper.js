import {
    VANISHING_POINT_Y_PERCENTAGE,
    TILE_Y_PERCENTAGES,
    TILE_COLUMNS_LENGTH,
    SLANTED_TILE_Y_PERCENTAGES,
    SLANTED_TILE_COLUMNS_LENGTH
} from '../constants/stage'

import {
    roundPercentage
} from './general-helper'

const SLANTED_RIGHT_X_CONSTANTS = [0, 1, 0, 1, 2, 0]

/*********
 * TILES *
 *********/

export const getTileCornersForXYAndZ = (
    xIndex,
    yIndex,
    zIndex = 0,
    slantDirection
) => {
    if (slantDirection === 'right') {
        return _getSlantedRightCoordinates(
            xIndex, yIndex, zIndex
        )
    } else if (slantDirection === 'left') {
        return _getSlantedRightCoordinates(
            xIndex, yIndex, zIndex
        )
    } else {
        return _getDefaultCoordinates(
            xIndex, yIndex, zIndex
        )
    }
}

const _getDefaultCoordinates = (
    xIndex, yIndex, zIndex
) => {
    /**
     * Like CSS corners, order is:
     * top left, top right, bottom right, bottom left.
     */
    return [
        _getTileXYPercentage(
            xIndex, yIndex + 1, zIndex
        ),
        _getTileXYPercentage(
            xIndex + 1, yIndex + 1, zIndex
        ),
        _getTileXYPercentage(
            xIndex + 1, yIndex, zIndex
        ),
        _getTileXYPercentage(
            xIndex, yIndex, zIndex
        )
    ]
}

const _getSlantedRightCoordinates = (
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
        xConstant = SLANTED_RIGHT_X_CONSTANTS[yIndex],
        yConstant = yIndex * 2,

        // These are the coordinates for the top left corner.
        slantedRightXIndex = xConstant + xIndex * 2.5 + xModulo,
        slantedRightYIndex = yConstant + yModulo

    /**
     * When slanted, order is:
     * top, right, bottom, left.
     */
    return [
        _getTileXYPercentage(
            slantedRightXIndex + 2, slantedRightYIndex, zIndex, true
        ),
        _getTileXYPercentage(
            slantedRightXIndex + 3, slantedRightYIndex + 2, zIndex, true
        ),
        _getTileXYPercentage(
            slantedRightXIndex + 1, slantedRightYIndex + 3, zIndex, true
        ),
        _getTileXYPercentage(
            slantedRightXIndex, slantedRightYIndex + 1, zIndex, true
        )
    ]
}

const _getTileXYPercentage = (

    /**
     * When default, this is an interval from 0 to 12. There are twelve floor
     * panel columns.
     */
    xCornerIndex,

    /**
     * When default, this is an interval from 0 to 6. There are six floor panel
     * rows.
     */
    yCornerIndex,

    /**
     * This is an interval from 0 to 10, with 0 being ground level, and 10
     * being level with the vanishing point.
     */
    zIndex = 0,

    isSlanted

) => {

    return {
        xPercentage: _getXPercentage(
            xCornerIndex,
            yCornerIndex,
            isSlanted
        ),
        yPercentage: _getYPercentage(
            yCornerIndex,
            zIndex,
            isSlanted
        )
    }
}

const _getXPercentage = (
    xCornerIndex,
    yCornerIndex,
    isSlanted
) => {
    const
        // Use columns length value based on default or slanted arrangement.
        tileColumnsLength = isSlanted ?
            SLANTED_TILE_COLUMNS_LENGTH : TILE_COLUMNS_LENGTH,

        // Get x-coordinate percentage at zIndex 0.
        baseYPercentage = _getYPercentage(
            yCornerIndex, 0, isSlanted
        ),
        tilesWidthPercentage =
        100 / VANISHING_POINT_Y_PERCENTAGE *
        (VANISHING_POINT_Y_PERCENTAGE - baseYPercentage),

        rawXPercentage = (100 - tilesWidthPercentage) / 2 +
        xCornerIndex * tilesWidthPercentage /
        tileColumnsLength

    return roundPercentage(rawXPercentage)
}

const _getYPercentage = (
    yCornerIndex,
    zIndex,
    isSlanted
) => {
    const
        // Use array based on default or slanted arrangement.
        tileYPercentages = isSlanted ?
            SLANTED_TILE_Y_PERCENTAGES : TILE_Y_PERCENTAGES,

        tileYPercentage = tileYPercentages[yCornerIndex],

        rawYPercentage =
            tileYPercentage + zIndex / 10 *
            (VANISHING_POINT_Y_PERCENTAGE - tileYPercentage)

    return roundPercentage(rawYPercentage)
}

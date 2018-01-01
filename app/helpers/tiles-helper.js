import {
    VANISHING_POINT_Y_PERCENTAGE,
    TILE_Y_PERCENTAGES,
    TILE_COLUMNS_LENGTH,
    DIAGONAL_TILE_Y_PERCENTAGES,
    DIAGONAL_TILE_COLUMNS_LENGTH
} from '../constants/stage'

import {
    roundPercentage
} from './general-helper'

const DIAGONAL_X_CONSTANTS = [0, 1, 0, 1, 2, 0]

/*********
 * TILES *
 *********/

export const getTileCornersForXYAndZ = (
    xIndex,
    yIndex,
    zIndex = 0,
    slantDirection = false
) => {
    if (slantDirection) {
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

    /**
     * When diagonal, order is:
     * top, right, bottom, left.
     *
     * Invert diagonal Y values.
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

    // This is an interval from 0 to 32. There are 32 floor panel columns.
    xCornerIndex,

    // This is an interval from 0 to 14. There are 14 floor panel rows.
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
        DIAGONAL_TILE_COLUMNS_LENGTH

    return roundPercentage(rawXPercentage)
}

const _getYPercentageForDiagonalYCornerAndZ = (
    yCornerIndex,
    zIndex
) => {
    const tileYPercentage = DIAGONAL_TILE_Y_PERCENTAGES[yCornerIndex],
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

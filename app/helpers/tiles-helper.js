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

const SLANTED_LEFT_X_CONSTANTS = [0, 2, 1, 0, 1, 0],
    SLANTED_RIGHT_X_CONSTANTS = [0, 1, 0, 1, 2, 0]

/*********
 * TILES *
 *********/

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

    return roundPercentage(100 - rawXPercentage)
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

    return roundPercentage(100 - rawYPercentage)
}

const _getXYPercentages = (

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
        x: _getXPercentage(
            xCornerIndex,
            yCornerIndex,
            isSlanted
        ),
        y: _getYPercentage(
            yCornerIndex,
            zIndex,
            isSlanted
        )
    }
}

const _getHorizontalPlaneFractionsForDefault = (
    xIndex, yIndex, zIndex
) => {
    /**
     * Like CSS corners, order is:
     * top left, top right, bottom right, bottom left.
     */
    return {
        left: {
            back: _getXYPercentages(xIndex, yIndex + 1, zIndex),
            front: _getXYPercentages(xIndex, yIndex, zIndex)
        },
        right: {
            back: _getXYPercentages(xIndex + 1, yIndex + 1, zIndex),
            front: _getXYPercentages(xIndex + 1, yIndex, zIndex)
        }
    }
}

const _getHorizontalPlaneFractionsForSlantedLeft = (
    xIndex, yIndex, zIndex
) => {

    let xModulo,
        yModulo

    // If yIndex is 1, 2, or 3...
    if (yIndex >= 1 && yIndex <= 3) {
        // xModulo for even xIndex is 3 above that for previous odd xIndex.
        xModulo = xIndex % 2 ? -0.5 : 0

        // yModulo for even xIndex is 1 below that for previous odd xIndex.
        yModulo = xIndex % 2 ? 1 : 0

        // If yIndex is 0, 4, or 5...
    } else {
        // xModulo for even xIndex is 2 above that for previous odd xIndex.
        xModulo = xIndex % 2 ? 0.5 : 0

        // yModulo for even xIndex is 1 above that for previous odd xIndex.
        yModulo = xIndex % 2 ? 0 : 1
    }

    const
        xConstant = SLANTED_LEFT_X_CONSTANTS[yIndex],
        yConstant = yIndex * 2,

        // These are the coordinates for the top left corner.
        slantedLeftXIndex = xConstant + xIndex * 2.5 + xModulo,
        slantedLeftYIndex = yConstant + yModulo

    /**
     * When slanted, order is:
     * top, right, bottom, left.
     */
    return {
        left: {
            back: _getXYPercentages(
                slantedLeftXIndex + 1, slantedLeftYIndex, zIndex, true
            ),
            front: _getXYPercentages(
                slantedLeftXIndex, slantedLeftYIndex + 2, zIndex, true
            )
        },
        right: {
            back: _getXYPercentages(
                slantedLeftXIndex + 3, slantedLeftYIndex + 1, zIndex, true
            ),
            front: _getXYPercentages(
                slantedLeftXIndex + 2, slantedLeftYIndex + 3, zIndex, true
            )
        }
    }
}

const _getHorizontalPlaneFractionsForSlantedRight = (
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
    return {
        left: {
            back: _getXYPercentages(
                slantedRightXIndex + 2, slantedRightYIndex, zIndex, true
            ),
            front: _getXYPercentages(
                slantedRightXIndex, slantedRightYIndex + 1, zIndex, true
            )
        },
        right: {
            back: _getXYPercentages(
                slantedRightXIndex + 3, slantedRightYIndex + 2, zIndex, true
            ),
            front: _getXYPercentages(
                slantedRightXIndex + 1, slantedRightYIndex + 3, zIndex, true
            )
        }
    }
}

export const getStageCubeCornerFractions = ({

    xIndex,
    yIndex,
    zIndex,
    isFloor,
    slantDirection

}) => {

    const woodZIndex = isFloor ? 0 : 20

    let getHorizontalPlaneFractions =
        _getHorizontalPlaneFractionsForDefault

    if (slantDirection === 'left') {
        getHorizontalPlaneFractions =
            _getHorizontalPlaneFractionsForSlantedLeft

    } else if (slantDirection === 'right') {
        getHorizontalPlaneFractions =
            _getHorizontalPlaneFractionsForSlantedRight
    }

    return {
        tile: getHorizontalPlaneFractions(xIndex, yIndex, zIndex),
        wood: getHorizontalPlaneFractions(xIndex, yIndex, woodZIndex)
    }
}

const _getPolygonPoint = (coordinates, stageWidth, stageHeight) => {
    const xPoint = coordinates.x * stageWidth * 0.01,
        yPoint = coordinates.y * stageHeight * 0.01

    return `${xPoint},${yPoint}`
}

export const getPolygonPointsForTileCube = ({
    cubeCorners,
    stageWidth,
    stageHeight
}) => {
    const { tile } = cubeCorners

    return (
        `${_getPolygonPoint(tile.left.back, stageWidth, stageHeight)} ${_getPolygonPoint(tile.right.back, stageWidth, stageHeight)} ${_getPolygonPoint(tile.right.front, stageWidth, stageHeight)} ${_getPolygonPoint(tile.left.front, stageWidth, stageHeight)}`
    )
}

export const getPolygonPointsForFrontCube = ({
    slantDirection,
    cubeCorners,
    stageWidth,
    stageHeight
}) => {
    const { tile, wood } = cubeCorners

    if (slantDirection === 'left') {
        return (
            `${_getPolygonPoint(tile.left.back, stageWidth, stageHeight)} ${_getPolygonPoint(tile.right.back, stageWidth, stageHeight)} ${_getPolygonPoint(wood.right.back, stageWidth, stageHeight)} ${_getPolygonPoint(wood.left.back, stageWidth, stageHeight)}`
        )
    } else if (slantDirection === 'right') {
        return (
            `${_getPolygonPoint(tile.left.back, stageWidth, stageHeight)} ${_getPolygonPoint(tile.left.front, stageWidth, stageHeight)} ${_getPolygonPoint(wood.left.front, stageWidth, stageHeight)} ${_getPolygonPoint(wood.left.back, stageWidth, stageHeight)}`
        )
    } else {
        return (
            `${_getPolygonPoint(tile.left.front, stageWidth, stageHeight)} ${_getPolygonPoint(tile.right.front, stageWidth, stageHeight)} ${_getPolygonPoint(wood.right.front, stageWidth, stageHeight)} ${_getPolygonPoint(wood.left.front, stageWidth, stageHeight)}`
        )
    }
}

export const getPolygonPointsForSideCube = ({
    isLeft = true,
    slantDirection,
    cubeCorners,
    stageWidth,
    stageHeight
}) => {
    const { tile, wood } = cubeCorners

    if (slantDirection === 'left') {
        return (
            `${_getPolygonPoint(tile.left.back, stageWidth, stageHeight)} ${_getPolygonPoint(tile.left.front, stageWidth, stageHeight)} ${_getPolygonPoint(wood.left.front, stageWidth, stageHeight)} ${_getPolygonPoint(wood.left.back, stageWidth, stageHeight)}`
        )
    } else if (slantDirection === 'right') {
        return (
            `${_getPolygonPoint(tile.left.back, stageWidth, stageHeight)} ${_getPolygonPoint(tile.right.back, stageWidth, stageHeight)} ${_getPolygonPoint(wood.right.back, stageWidth, stageHeight)} ${_getPolygonPoint(wood.left.back, stageWidth, stageHeight)}`
        )
    } else {
        // If cube is on left, then show right face, and vice versa.
        const xFace = isLeft ? 'right' : 'left'

        return (
            `${_getPolygonPoint(tile[xFace].back, stageWidth, stageHeight)} ${_getPolygonPoint(tile[xFace].front, stageWidth, stageHeight)} ${_getPolygonPoint(wood[xFace].front, stageWidth, stageHeight)} ${_getPolygonPoint(wood[xFace].back, stageWidth, stageHeight)}`
        )
    }
}

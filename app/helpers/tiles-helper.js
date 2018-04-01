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

// const SLANTED_LEFT_X_CONSTANTS = [0, 2, 1, 0, 1, 0],
//     SLANTED_RIGHT_X_CONSTANTS = [0, 1, 0, 1, 2, 0]

/*********
 * TILES *
 *********/

// export const getTileCornersForXYAndZ = (
//     xIndex,
//     yIndex,
//     zIndex = 0,
//     slantDirection
// ) => {
//     if (slantDirection === 'left') {
//         return _getSlantedLeftCoordinates(
//             xIndex, yIndex, zIndex
//         )
//     } else if (slantDirection === 'right') {
//         return _getSlantedRightCoordinates(
//             xIndex, yIndex, zIndex
//         )
//     } else {
//         return _getDefaultCoordinates(
//             xIndex, yIndex, zIndex
//         )
//     }
// }

// const _getDefaultCoordinates = (
//     xIndex, yIndex, zIndex
// ) => {
//     /**
//      * Like CSS corners, order is:
//      * top left, top right, bottom right, bottom left.
//      */
//     return [
//         _getTileXYPercentage(
//             xIndex, yIndex + 1, zIndex
//         ),
//         _getTileXYPercentage(
//             xIndex + 1, yIndex + 1, zIndex
//         ),
//         _getTileXYPercentage(
//             xIndex + 1, yIndex, zIndex
//         ),
//         _getTileXYPercentage(
//             xIndex, yIndex, zIndex
//         )
//     ]
// }

// const _getSlantedLeftCoordinates = (
//     xIndex, yIndex, zIndex
// ) => {

//     let xModulo,
//         yModulo

//     // If yIndex is 1, 2, or 3...
//     if (yIndex >= 1 && yIndex <= 3) {
//         // xModulo for even xIndex is 3 above that for previous odd xIndex.
//         xModulo = xIndex % 2 ? -0.5 : 0

//         // yModulo for even xIndex is 1 below that for previous odd xIndex.
//         yModulo = xIndex % 2 ? 1 : 0

//         // If yIndex is 0, 4, or 5...
//     } else {
//         // xModulo for even xIndex is 2 above that for previous odd xIndex.
//         xModulo = xIndex % 2 ? 0.5 : 0

//         // yModulo for even xIndex is 1 above that for previous odd xIndex.
//         yModulo = xIndex % 2 ? 0 : 1
//     }

//     const
//         xConstant = SLANTED_LEFT_X_CONSTANTS[yIndex],
//         yConstant = yIndex * 2,

//         // These are the coordinates for the top left corner.
//         slantedLeftXIndex = xConstant + xIndex * 2.5 + xModulo,
//         slantedLeftYIndex = yConstant + yModulo

//     /**
//      * When slanted, order is:
//      * top, right, bottom, left.
//      */
//     return [
//         _getTileXYPercentage(
//             slantedLeftXIndex + 1, slantedLeftYIndex, zIndex, true
//         ),
//         _getTileXYPercentage(
//             slantedLeftXIndex + 3, slantedLeftYIndex + 1, zIndex, true
//         ),
//         _getTileXYPercentage(
//             slantedLeftXIndex + 2, slantedLeftYIndex + 3, zIndex, true
//         ),
//         _getTileXYPercentage(
//             slantedLeftXIndex, slantedLeftYIndex + 2, zIndex, true
//         )
//     ]
// }

// const _getSlantedRightCoordinates = (
//     xIndex, yIndex, zIndex
// ) => {

//     let xModulo,
//         yModulo

//     // If yIndex is 2, 3, or 4...
//     if (yIndex >= 2 && yIndex <= 4) {
//         // xModulo for even xIndex is 3 above that for previous odd xIndex.
//         xModulo = xIndex % 2 ? -0.5 : 0

//         // yModulo for even xIndex is 1 above that for previous odd xIndex.
//         yModulo = xIndex % 2 ? 0 : 1

//         // If yIndex is 0, 1, or 5...
//     } else {
//         // xModulo for even xIndex is 2 above that for previous odd xIndex.
//         xModulo = xIndex % 2 ? 0.5 : 0

//         // yModulo for even xIndex is 1 below that for previous odd xIndex.
//         yModulo = xIndex % 2 ? 1 : 0
//     }

//     const
//         xConstant = SLANTED_RIGHT_X_CONSTANTS[yIndex],
//         yConstant = yIndex * 2,

//         // These are the coordinates for the top left corner.
//         slantedRightXIndex = xConstant + xIndex * 2.5 + xModulo,
//         slantedRightYIndex = yConstant + yModulo

//     /**
//      * When slanted, order is:
//      * top, right, bottom, left.
//      */
//     return [
//         _getTileXYPercentage(
//             slantedRightXIndex + 2, slantedRightYIndex, zIndex, true
//         ),
//         _getTileXYPercentage(
//             slantedRightXIndex + 3, slantedRightYIndex + 2, zIndex, true
//         ),
//         _getTileXYPercentage(
//             slantedRightXIndex + 1, slantedRightYIndex + 3, zIndex, true
//         ),
//         _getTileXYPercentage(
//             slantedRightXIndex, slantedRightYIndex + 1, zIndex, true
//         )
//     ]
// }

// FIXME: Optimise for fraction.
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

// FIXME: Optimise for fraction.
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

export const getStageCubeCornerFractions = ({

    xIndex,
    yIndex,
    zIndex,
    isFloor

}) => {

    const woodZIndex = isFloor ? 0 : 20

    return {
        tile: {
            left: {
                back: _getXYPercentages(xIndex, yIndex + 1, zIndex),
                front: _getXYPercentages(xIndex, yIndex, zIndex)
            },
            right: {
                back: _getXYPercentages(xIndex + 1, yIndex + 1, zIndex),
                front: _getXYPercentages(xIndex + 1, yIndex, zIndex)
            }
        },
        wood: {
            left: {
                back: _getXYPercentages(xIndex, yIndex + 1, woodZIndex),
                front: _getXYPercentages(xIndex, yIndex, woodZIndex)
            },
            right: {
                back: _getXYPercentages(xIndex + 1, yIndex + 1, woodZIndex),
                front: _getXYPercentages(xIndex + 1, yIndex, woodZIndex)
            }
        }
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
    cubeCorners,
    stageWidth,
    stageHeight
}) => {
    const { tile, wood } = cubeCorners

    return (
        `${_getPolygonPoint(tile.left.front, stageWidth, stageHeight)} ${_getPolygonPoint(tile.right.front, stageWidth, stageHeight)} ${_getPolygonPoint(wood.right.front, stageWidth, stageHeight)} ${_getPolygonPoint(wood.left.front, stageWidth, stageHeight)}`
    )
}

export const getPolygonPointsForSideCube = ({
    isLeft = true,
    cubeCorners,
    stageWidth,
    stageHeight
}) => {
    const { tile, wood } = cubeCorners,

        // If cube is on left, then show right face, and vice versa.
        xFace = isLeft ? 'right' : 'left'

    return (
        `${_getPolygonPoint(tile[xFace].back, stageWidth, stageHeight)} ${_getPolygonPoint(tile[xFace].front, stageWidth, stageHeight)} ${_getPolygonPoint(wood[xFace].front, stageWidth, stageHeight)} ${_getPolygonPoint(wood[xFace].back, stageWidth, stageHeight)}`
    )
}

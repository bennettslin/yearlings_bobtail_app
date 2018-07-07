import {
    VANISHING_POINT_Y_PERCENTAGE,
    TILE_Y_PERCENTAGES,
    CUBE_X_AXIS_LENGTH,
    CUBE_Y_AXIS_LENGTH,
    SLANTED_TILE_Y_PERCENTAGES,
    SLANTED_TILE_X_UNITS_LENGTH
} from '../../constants/stage'

import {
    roundPercentage,
    getValueInAbridgedMatrix
} from '../../helpers/generalHelper'

const SLANTED_LEFT_X_CONSTANTS = [0, 2, 1, 0, 1, 0],
    SLANTED_RIGHT_X_CONSTANTS = [0, 1, 0, 1, 2, 0]

/***************
 * COORDINATES *
 ***************/

const _getXPercentage = (

    xCornerIndex,
    yCornerIndex,
    slantDirection,

) => {

    const

        isSlanted = Boolean(slantDirection),

        // Use x-axis length value based on default or slanted arrangement.
        xAxisLength = isSlanted ?
            SLANTED_TILE_X_UNITS_LENGTH : CUBE_X_AXIS_LENGTH,

        // Get x-coordinate percentage at zIndex 0.
        baseYPercentage = _getYPercentage(
            yCornerIndex, 0, isSlanted
        ),

        tilesWidthPercentage =
            100 / VANISHING_POINT_Y_PERCENTAGE
            * (VANISHING_POINT_Y_PERCENTAGE - baseYPercentage),

        rawXPercentage =
            (100 - tilesWidthPercentage) / 2
            + xCornerIndex * tilesWidthPercentage / xAxisLength

    /**
     * Hard-coding some constants to optimally position the cubes. I no longer
     * have the bandwidth to do any real math here, unfortunately. Also, not
     * sure why the multiplier values between left and right would be
     * different...
     */
    let addend = 0,
        multiplier = 1

    if (slantDirection === 'left') {
        addend = -3.8
        multiplier = 1.084
    } else if (slantDirection === 'right') {
        addend = -1.35
        multiplier = 1.074
    }

    return (
        roundPercentage(100 - rawXPercentage)
        * multiplier
        + addend
    )
}

const _getYPercentage = (

    yCornerIndex,
    zIndex,
    slantDirection

) => {

    const

        isSlanted = Boolean(slantDirection),

        // Use array based on default or slanted arrangement.
        tileYPercentages = isSlanted ?
            SLANTED_TILE_Y_PERCENTAGES : TILE_Y_PERCENTAGES,

        tileYPercentage = tileYPercentages[yCornerIndex],

        rawYPercentage =
            tileYPercentage + zIndex / 10
            * (VANISHING_POINT_Y_PERCENTAGE - tileYPercentage)

    /**
     * Hard-coding some constants to optimally position the cubes. I no longer
     * have the bandwidth to do any real math here, unfortunately.
     */
    const addend = isSlanted ? -1.25 : 0,
        multiplier = isSlanted ? 1.025 : 1

    return (
        roundPercentage(100 - rawYPercentage)
        * multiplier
        + addend
    )
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

    slantDirection

) => {

    return {
        x: _getXPercentage(
            xCornerIndex,
            yCornerIndex,
            slantDirection
        ),
        y: _getYPercentage(
            yCornerIndex,
            zIndex,
            slantDirection
        )
    }
}

/**********
 * PLANES *
 **********/

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
                slantedLeftXIndex + 1, slantedLeftYIndex, zIndex, 'left'
            ),
            front: _getXYPercentages(
                slantedLeftXIndex, slantedLeftYIndex + 2, zIndex, 'left'
            )
        },
        right: {
            back: _getXYPercentages(
                slantedLeftXIndex + 3, slantedLeftYIndex + 1, zIndex, 'left'
            ),
            front: _getXYPercentages(
                slantedLeftXIndex + 2, slantedLeftYIndex + 3, zIndex, 'left'
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
                slantedRightXIndex + 2, slantedRightYIndex, zIndex, 'right'
            ),
            front: _getXYPercentages(
                slantedRightXIndex, slantedRightYIndex + 1, zIndex, 'right'
            )
        },
        right: {
            back: _getXYPercentages(
                slantedRightXIndex + 3, slantedRightYIndex + 2, zIndex, 'right'
            ),
            front: _getXYPercentages(
                slantedRightXIndex + 1, slantedRightYIndex + 3, zIndex, 'right'
            )
        }
    }
}

const _getHorizontalPlaneFractionsFunction = (slantDirection) => {

    if (slantDirection === 'left') {
        return _getHorizontalPlaneFractionsForSlantedLeft

    } else if (slantDirection === 'right') {
        return _getHorizontalPlaneFractionsForSlantedRight

    } else {
        return _getHorizontalPlaneFractionsForDefault
    }
}

/************
 * EXPORTED *
 ************/

export const getStageCubeCornerPercentages = ({

    xIndex,
    yIndex,
    zIndex,
    isFloor,
    slantDirection

}) => {

    const baseZIndex = isFloor ? 0 : 20

    const getHorizontalPlaneFractions = _getHorizontalPlaneFractionsFunction(
        slantDirection
    )

    return {
        // This is the top face if floor, bottom face if ceiling.
        tile: getHorizontalPlaneFractions(xIndex, yIndex, zIndex),

        // This is the face that is attached to the surface.
        base: getHorizontalPlaneFractions(xIndex, yIndex, baseZIndex)
    }
}

export const getTileCentreForPresence = ({

    xIndex,
    yIndex: invertedYIndex,
    zIndices,
    slantDirection

}) => {

    const

        // TODO: I don't know why this should be the case...
        yIndex = CUBE_Y_AXIS_LENGTH - invertedYIndex - 1,

        getHorizontalPlaneFractions = _getHorizontalPlaneFractionsFunction(
                slantDirection
            ),

        zIndex = getValueInAbridgedMatrix(zIndices, xIndex, yIndex),

        tilePercentages = getHorizontalPlaneFractions(xIndex, yIndex, zIndex),

        { left, right } = tilePercentages,

        // Get centre percentage by finding midpoint of one of the diagonals.
        centreXPercentage = left.back.x + (right.front.x - left.back.x) / 2,
        centreYPercentage = left.back.y + (right.front.y - left.back.y) / 2

    return {
        xPercentage: centreXPercentage,
        yPercentage: centreYPercentage
    }
}

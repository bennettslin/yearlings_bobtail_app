import {
    VANISHING_POINT_Y_PERCENTAGE,
    TILE_Y_PERCENTAGES,
    CUBE_X_AXIS_LENGTH,
    SLANTED_TILE_Y_PERCENTAGES,
    SLANTED_TILE_X_UNITS_LENGTH
} from '../../constants/stage'

import {
    roundPercentage,
    getValueInAbridgedMatrix
} from '../../helpers/generalHelper'

/***************
 * COORDINATES *
 ***************/

const _getXPercentage = (

    xCornerIndex,
    yCornerIndex,
    slantDirection,

) => {

    const isSlanted = Boolean(slantDirection),

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
        addend = -2.5
        multiplier = 1.0575
    } else if (slantDirection === 'right') {
        multiplier = 1.0475
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

    const isSlanted = Boolean(slantDirection),

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
            back: _getXYPercentages(xIndex, yIndex, zIndex),
            front: _getXYPercentages(xIndex, yIndex + 1, zIndex)
        },
        right: {
            back: _getXYPercentages(xIndex + 1, yIndex, zIndex),
            front: _getXYPercentages(xIndex + 1, yIndex + 1, zIndex)
        }
    }
}

const SLANTED_LEFT_X_CONSTANTS = [0, 1, 0, 1, 2, 0]

const _getHorizontalPlaneFractionsForSlantedLeft = (
    xIndex, yIndex, zIndex
) => {

    /**
     * Origin is 0, 0. There are 32 x-axis units, 14 y-axis units.
     */

    const
        isXOdd = xIndex % 2,

        xMultiplier = xIndex * 2.5,
        yMultiplier = yIndex * 2,

        // Begin along the x-axis at these units.
        xConstant = SLANTED_LEFT_X_CONSTANTS[yIndex]

    let xOffset,
        yOffset

    // If yIndex is 2, 3, or 4...
    if (yIndex >= 2 && yIndex <= 4) {
        /**
         * Reference for odd xIndex is 2 above that for previous odd xIndex:
         * 0, 2, 5, 8, 10...
         */
        xOffset = isXOdd ? -0.5 : 0

       /**
        * Reference for even xIndex is 1 above that for previous odd xIndex.
        */
        yOffset = isXOdd ? 0 : 1

        // If yIndex is 0, 1, or 5...
    } else {
        /**
         * Reference for odd xIndex is 3 above that for previous odd xIndex:
         * 0, 3, 5, 8, 10...
         */
        xOffset = isXOdd ? 0.5 : 0

        /**
         * Reference for even xIndex is 1 above that for previous odd xIndex.
         */
        yOffset = isXOdd ? 1 : 0
    }

    const
        referenceXIndex = xConstant + xMultiplier + xOffset,
        referenceYIndex = yMultiplier + yOffset

    /**
     * The xIndex and yIndex for the four corners will vary between 0 to 3
     * units away from the reference point.
     */
    return {
        left: {
            back: _getXYPercentages(
                referenceXIndex, referenceYIndex + 1, zIndex, 'left'
            ),
            front: _getXYPercentages(
                referenceXIndex + 1, referenceYIndex + 3, zIndex, 'left'
            )
        },
        right: {
            back: _getXYPercentages(
                referenceXIndex + 2, referenceYIndex, zIndex, 'left'
            ),
            front: _getXYPercentages(
                referenceXIndex + 3, referenceYIndex + 2, zIndex, 'left'
            )
        }
    }
}

const SLANTED_RIGHT_X_CONSTANTS = [0, 2, 1, 0, 1, 0]

const _getHorizontalPlaneFractionsForSlantedRight = (
    xIndex, yIndex, zIndex
) => {

    /**
     * See slanted left function for more detailed explanation of this math.
     */

    const
        isXOdd = xIndex % 2,
        xMultiplier = xIndex * 2.5,
        yMultiplier = yIndex * 2,
        xConstant = SLANTED_RIGHT_X_CONSTANTS[yIndex]

    let xOffset,
        yOffset

    // If yIndex is 1, 2, or 3...
    if (yIndex >= 1 && yIndex <= 3) {
        xOffset = isXOdd ? -0.5 : 0
        yOffset = isXOdd ? 1 : 0

        // If yIndex is 0, 4, or 5...
    } else {
        xOffset = isXOdd ? 0.5 : 0
        yOffset = isXOdd ? 0 : 1
    }

    const
        referenceXIndex = xConstant + xMultiplier + xOffset,
        referenceYIndex = yMultiplier + yOffset

    return {
        left: {
            back: _getXYPercentages(
                referenceXIndex + 1, referenceYIndex, zIndex, 'right'
            ),
            front: _getXYPercentages(
                referenceXIndex, referenceYIndex + 2, zIndex, 'right'
            )
        },
        right: {
            back: _getXYPercentages(
                referenceXIndex + 3, referenceYIndex + 1, zIndex, 'right'
            ),
            front: _getXYPercentages(
                referenceXIndex + 2, referenceYIndex + 3, zIndex, 'right'
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
    yIndex,
    zIndices,
    slantDirection

}) => {

    const
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

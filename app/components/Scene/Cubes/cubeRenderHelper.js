import {
    CUBE_X_AXIS_LENGTH,
    CUBE_Z_AXIS_LENGTH
} from './cubeIndexConstants'

import {
    VANISHING_POINT_Y_PERCENTAGE,
    TILE_Y_PERCENTAGES,
    SLANTED_TILE_Y_PERCENTAGES,
    SLANTED_TILE_X_UNITS_LENGTH
} from './cubeRenderConstants'

import { roundPercentage } from '../../../helpers/generalHelper'

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
            tileYPercentage + zIndex * 2 / CUBE_Z_AXIS_LENGTH
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
    xIndex, yIndex, zIndex, xOffset, zOffset
) => {

    /**
     * Like CSS corners, order is:
     * top left, top right, bottom right, bottom left.
     */

    const
        refXIndex = xIndex + xOffset,
        refZIndex = zIndex + zOffset

    return {
        left: {
            back: _getXYPercentages(refXIndex, yIndex, refZIndex),
            front: _getXYPercentages(refXIndex, yIndex + 1, refZIndex)
        },
        right: {
            back: _getXYPercentages(refXIndex + 1, yIndex, refZIndex),
            front: _getXYPercentages(refXIndex + 1, yIndex + 1, refZIndex)
        }
    }
}

const SLANTED_LEFT_X_CONSTANTS = [0, 1, 0, 1, 2, 0]

const _getHorizontalPlaneFractionsForSlantedLeft = (
    xIndex, yIndex, zIndex, xOffset, zOffset
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

    let xModifier,
        yModifier

    // If yIndex is 2, 3, or 4...
    if (yIndex >= 2 && yIndex <= 4) {
        /**
         * Reference for odd xIndex is 2 above that for previous odd xIndex:
         * 0, 2, 5, 8, 10...
         */
        xModifier = isXOdd ? -0.5 : 0

       /**
        * Reference for even xIndex is 1 above that for previous odd xIndex.
        */
        yModifier = isXOdd ? 0 : 1

        // If yIndex is 0, 1, or 5...
    } else {
        /**
         * Reference for odd xIndex is 3 above that for previous odd xIndex:
         * 0, 3, 5, 8, 10...
         */
        xModifier = isXOdd ? 0.5 : 0

        /**
         * Reference for even xIndex is 1 above that for previous odd xIndex.
         */
        yModifier = isXOdd ? 1 : 0
    }

    const
        refXIndex = xConstant + xMultiplier + xModifier + xOffset,
        refYIndex = yMultiplier + yModifier,
        refZIndex = zIndex + zOffset

    /**
     * The xIndex and yIndex for the four corners will vary between 0 to 3
     * units away from the reference point.
     */
    return {
        left: {
            back: _getXYPercentages(
                refXIndex, refYIndex + 1, refZIndex, 'left'
            ),
            front: _getXYPercentages(
                refXIndex + 1, refYIndex + 3, refZIndex, 'left'
            )
        },
        right: {
            back: _getXYPercentages(
                refXIndex + 2, refYIndex, refZIndex, 'left'
            ),
            front: _getXYPercentages(
                refXIndex + 3, refYIndex + 2, refZIndex, 'left'
            )
        }
    }
}

const SLANTED_RIGHT_X_CONSTANTS = [0, 2, 1, 0, 1, 0]

const _getHorizontalPlaneFractionsForSlantedRight = (
    xIndex, yIndex, zIndex, xOffset, zOffset
) => {

    /**
     * See slanted left function for more detailed explanation of this math.
     */

    const
        isXOdd = xIndex % 2,
        xMultiplier = xIndex * 2.5,
        yMultiplier = yIndex * 2,
        xConstant = SLANTED_RIGHT_X_CONSTANTS[yIndex]

    let xModifier,
        yModifier

    // If yIndex is 1, 2, or 3...
    if (yIndex >= 1 && yIndex <= 3) {
        xModifier = isXOdd ? -0.5 : 0
        yModifier = isXOdd ? 1 : 0

        // If yIndex is 0, 4, or 5...
    } else {
        xModifier = isXOdd ? 0.5 : 0
        yModifier = isXOdd ? 0 : 1
    }

    const
        refXIndex = xConstant + xMultiplier + xModifier + xOffset,
        refYIndex = yMultiplier + yModifier,
        refZIndex = zIndex + zOffset

    return {
        left: {
            back: _getXYPercentages(
                refXIndex + 1, refYIndex, refZIndex, 'right'
            ),
            front: _getXYPercentages(
                refXIndex, refYIndex + 2, refZIndex, 'right'
            )
        },
        right: {
            back: _getXYPercentages(
                refXIndex + 3, refYIndex + 1, refZIndex, 'right'
            ),
            front: _getXYPercentages(
                refXIndex + 2, refYIndex + 3, refZIndex, 'right'
            )
        }
    }
}

export const getHorizontalPlaneFractionsForSlantDirection = ({
    xIndex,
    yIndex,
    zIndex,
    xOffset = 0,
    zOffset = 0,
    slantDirection
}) => {

    if (slantDirection === 'left') {
        return _getHorizontalPlaneFractionsForSlantedLeft(
            xIndex, yIndex, zIndex, xOffset, zOffset
        )

    } else if (slantDirection === 'right') {
        return _getHorizontalPlaneFractionsForSlantedRight(
            xIndex, yIndex, zIndex, xOffset, zOffset
        )

    } else {
        return _getHorizontalPlaneFractionsForDefault(
            xIndex, yIndex, zIndex, xOffset, zOffset
        )
    }
}

/************
 * EXPORTED *
 ************/

export const getCubeCornerPercentages = ({

    xIndex,
    yIndex,
    zIndex,
    isFloor,
    slantDirection

}) => {

    const baseZIndex = isFloor ? 0 : CUBE_Z_AXIS_LENGTH

    return {
        // This is the top face if floor, bottom face if ceiling.
        tile: getHorizontalPlaneFractionsForSlantDirection({
            xIndex,
            yIndex,
            zIndex,
            slantDirection
        }),

        // This is the face that is attached to the surface.
        base: getHorizontalPlaneFractionsForSlantDirection({
            xIndex,
            yIndex,
            zIndex: baseZIndex,
            slantDirection
        })
    }
}

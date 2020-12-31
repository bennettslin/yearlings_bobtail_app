import { getValidYIndex } from './cubeIndices'
import { getXYPercentages } from './cubeCoordinates'
import {
    LEFT,
    RIGHT,
} from '../constants/scene/cubes'

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
            back: getXYPercentages(refXIndex, yIndex, refZIndex),
            front: getXYPercentages(refXIndex, yIndex + 1, refZIndex),
        },
        right: {
            back: getXYPercentages(refXIndex + 1, yIndex, refZIndex),
            front: getXYPercentages(refXIndex + 1, yIndex + 1, refZIndex),
        },
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
            back: getXYPercentages(
                refXIndex, refYIndex + 1, refZIndex, LEFT
            ),
            front: getXYPercentages(
                refXIndex + 1, refYIndex + 3, refZIndex, LEFT
            ),
        },
        right: {
            back: getXYPercentages(
                refXIndex + 2, refYIndex, refZIndex, LEFT
            ),
            front: getXYPercentages(
                refXIndex + 3, refYIndex + 2, refZIndex, LEFT
            ),
        },
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
            back: getXYPercentages(
                refXIndex + 1, refYIndex, refZIndex, RIGHT
            ),
            front: getXYPercentages(
                refXIndex, refYIndex + 2, refZIndex, RIGHT
            ),
        },
        right: {
            back: getXYPercentages(
                refXIndex + 3, refYIndex + 1, refZIndex, RIGHT
            ),
            front: getXYPercentages(
                refXIndex + 2, refYIndex + 3, refZIndex, RIGHT
            ),
        },
    }
}

export const getHorizontalPlaneFractions = ({
    xIndex,
    yIndex,
    zIndex,
    xOffset = 0,
    zOffset = 0,
    slantDirection,

}) => {
    /**
     * Scenes measure zOffset height at same scale as width. We'll adjust it
     * here to reflect zIndex height.
     */
    const
        validYIndex = getValidYIndex(yIndex),
        adjustedZOffset = zOffset * 2

    if (slantDirection === LEFT) {
        return _getHorizontalPlaneFractionsForSlantedLeft(
            xIndex, validYIndex, zIndex, xOffset, adjustedZOffset
        )

    } else if (slantDirection === RIGHT) {
        return _getHorizontalPlaneFractionsForSlantedRight(
            xIndex, validYIndex, zIndex, xOffset, adjustedZOffset
        )

    } else {
        return _getHorizontalPlaneFractionsForDefault(
            xIndex, validYIndex, zIndex, xOffset, adjustedZOffset
        )
    }
}

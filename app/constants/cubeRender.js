// Check out Peoria Symphony Orchestra.
import { CUBE_Y_AXIS_LENGTH } from './cubeIndex'
import { getArrayOfLength } from '../helpers/general'

const _getPower = (base, exponent) => {
    if (exponent === 0) {
        return 1
    } else {
        return base * _getPower(base, exponent - 1)
    }
}

const _getExponentFactorialSum = (base, exponent) => {
    let sum = 0

    while (exponent > -1) {
        sum += _getPower(base, exponent)
        exponent--
    }

    return sum
}

const _getArrayOfIncreasingScaleFactors = (base, constant) => {
    let scale = 1
    return getArrayOfLength(constant).map(index => {
        // Index of 0 has scale of 1.
        if (index) {
            scale *= base
        }
        return scale
    })
}

const _getArrayOfIncreasingSums = (base, exponent, constant) => {
    const arrayOfIncreasingSums = [0]

    let mutableExponent = exponent,
        currentSum = 0

    while (mutableExponent > -1) {
        const currentPower = _getPower(base, mutableExponent) * constant

        currentSum += currentPower

        arrayOfIncreasingSums.push(currentSum)

        mutableExponent--
    }

    return arrayOfIncreasingSums
}

const _getTileYPercentages = (base, STAGE_Y_PERCENTAGE, exponent) => {
    const
        /**
         * yPercentageUnit =
         * base * base * base * base * base +
         * base * base * base * base +
         * base * base * base +
         * base * base +
         * base +
         * 1
         */
        yPercentageUnit = _getExponentFactorialSum(base, exponent - 1),

        unit = STAGE_Y_PERCENTAGE / yPercentageUnit,
        /**
         * yHeight0 = unit * base * base * base * base * base,
         * yHeight1 = unit * base * base * base * base,
         * yHeight2 = unit * base * base * base,
         * yHeight3 = unit * base * base,
         * yHeight4 = unit * base,
         * yHeight5 = unit,

            * tileYPercentages = [
            * 0,
            * yHeight0,
            * yHeight0 + yHeight1,
            * yHeight0 + yHeight1 + yHeight2,
            * yHeight0 + yHeight1 + yHeight2 + yHeight3,
            * yHeight0 + yHeight1 + yHeight2 + yHeight3 + yHeight4,
            * yHeight0 + yHeight1 + yHeight2 + yHeight3 + yHeight4 + yHeight5
            * ]
            */

        tileYPercentages = _getArrayOfIncreasingSums(
            base, exponent - 1, unit,
        )

    return tileYPercentages
}

/**
 * Number to multiply one number to get the next, such that after six times,
 * 2 becomes 3, resulting in seven values. This number can be fudged, since it
 * only determines relative foreshortening.
 */
const BASE = 1.069913193933663,

    // Assume that floor height is this percent of stage height.
    STAGE_Y_PERCENTAGE = 12,
    SLANTED_TILE_Y_UNITS_LENGTH = 14

export const TILE_Y_PERCENTAGES = _getTileYPercentages(
    BASE, STAGE_Y_PERCENTAGE, CUBE_Y_AXIS_LENGTH,
).reverse()

export const SLANTED_TILE_Y_PERCENTAGES = _getTileYPercentages(
    BASE, STAGE_Y_PERCENTAGE, SLANTED_TILE_Y_UNITS_LENGTH,
).reverse()

export const Y_INDEX_SCALE_FACTORS = _getArrayOfIncreasingScaleFactors(
    1 / BASE, CUBE_Y_AXIS_LENGTH,
).reverse()

// This really can't be any other value.
export const VANISHING_POINT_Y_PERCENTAGE = 50

export const SLANTED_TILE_X_UNITS_LENGTH = 32

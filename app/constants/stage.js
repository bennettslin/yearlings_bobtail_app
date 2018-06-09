// Check out Peoria Symphony Orchestra.
import { getExponentFactorialSum, getArrayOfIncreasingSums } from '../helpers/generalHelper'

const
    getTileYPercentages = (base, STAGE_Y_PERCENTAGE, exponent) => {
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
            yPercentageUnit = getExponentFactorialSum(base, exponent - 1),

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

            tileYPercentages = getArrayOfIncreasingSums(
                base, exponent - 1, unit
            )

        return tileYPercentages
    }

/**
 * Number to multiply one number to get the next, such that after six times,
 * 2 becomes 3, resulting in seven values. This number can be fudged, since it
 * only determines relative foreshortening.
 */
const base = 1.069913193933663,

    // Assume that floor height is this percent of stage height.
    STAGE_Y_PERCENTAGE = 12,

    TILE_Y_PERCENTAGES = getTileYPercentages(
        base, STAGE_Y_PERCENTAGE, 6
    ),
    SLANTED_TILE_Y_PERCENTAGES = getTileYPercentages(
        base, STAGE_Y_PERCENTAGE, 14
    )

module.exports = {

    // Was 1.2.
    STAGE_ASPECT_RATIO: 1.8, // Was 1.2.
    STAGE_WIDTH_DESKTOP_OVERFLOW_PERCENTAGE: 1.05,

    // Each stage floor increment is 0.5 feet.
    STAGE_Y_PERCENTAGE,
    VANISHING_POINT_Y_PERCENTAGE: 50,
    TILE_Y_PERCENTAGES,
    CUBE_ROWS_LENGTH: 6,
    CUBE_COLUMNS_LENGTH: 12,

    SLANTED_TILE_Y_PERCENTAGES,
    SLANTED_TILE_COLUMNS_LENGTH: 32,

    BALCONY_WIDTH_TO_HEIGHT_RATIO: 0.2, // How wide is the balcony.
    RAFTER_HEIGHT_TO_WIDTH_RATIO: 0.02, // How tall is the rafter.
    SEAT_HEIGHT_TO_WIDTH_RATIO: 1.55 // How tall is the seat.
}

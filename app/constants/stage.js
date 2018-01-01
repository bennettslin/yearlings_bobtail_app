// Check out Peoria Symphony Orchestra.

const
    // TODO: Make this recursive so that it can be used for fourteen as well.
    getTileYPercentages = (exponent, stageYPercentage) => {
        const yPercentageUnit =
        exponent * exponent * exponent * exponent * exponent +
        exponent * exponent * exponent * exponent +
        exponent * exponent * exponent +
        exponent * exponent +
        exponent +
        1,

        unit = stageYPercentage / yPercentageUnit,

        yHeight0 = unit * exponent * exponent * exponent * exponent * exponent,
        yHeight1 = unit * exponent * exponent * exponent * exponent,
        yHeight2 = unit * exponent * exponent * exponent,
        yHeight3 = unit * exponent * exponent,
        yHeight4 = unit * exponent,
        yHeight5 = unit,

        tileYPercentages = [
            0,
            yHeight0,
            yHeight0 + yHeight1,
            yHeight0 + yHeight1 + yHeight2,
            yHeight0 + yHeight1 + yHeight2 + yHeight3,
            yHeight0 + yHeight1 + yHeight2 + yHeight3 + yHeight4,
            yHeight0 + yHeight1 + yHeight2 + yHeight3 + yHeight4 + yHeight5
        ]

        return tileYPercentages
    }

/**
 * Number to multiply one number to get the next, such that after six times,
 * 2 becomes 3, resulting in seven values.
 */
const exponent = 1.069913193933663,

    // Assume that floor height is this percent of stage height.
    stageYPercentage = 12,

    TILE_Y_PERCENTAGES = getTileYPercentages(exponent, stageYPercentage)

module.exports = {

    // Was 1.2.
    STAGE_ASPECT_RATIO: 1.8, // Was 1.2.
    STAGE_WIDTH_DESKTOP_OVERFLOW_PERCENTAGE: 1.05,

    // Each stage floor increment is 0.5 feet.
    VANISHING_POINT_Y_PERCENTAGE: 50,
    TILE_Y_PERCENTAGES,
    TILE_ROWS_LENGTH: 6,
    TILE_COLUMNS_LENGTH: 12,

    // Use regular ones for diagonals, for now.
    // DIAGONAL_TILE_Y_PERCENTAGES: [],
    // DIAGONAL_ROWS_LENGTH: 14,
    DIAGONAL_COLUMNS_LENGTH: 32
}

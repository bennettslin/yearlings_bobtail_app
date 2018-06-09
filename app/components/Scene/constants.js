import { getArrayOfLength } from '../../helpers/generalHelper'

import { CUBE_ROWS_LENGTH,
         CUBE_COLUMNS_LENGTH } from '../../constants/stage'

const ROW_INDICES_ARRAY = getArrayOfLength({
    length: CUBE_ROWS_LENGTH
}),

SLANTED_RIGHT_COLUMN_INDICES = getArrayOfLength({
    length: CUBE_COLUMNS_LENGTH
}),

SLANTED_LEFT_COLUMN_INDICES = SLANTED_RIGHT_COLUMN_INDICES
    .slice().reverse(),

/**
 * Returns array of indices that start from the ends and move towards the
 * centre, alternating between left and right. This allows the tiles that
 * overlap other tiles to be ordered correctly in the DOM.
 *
 * If length is 12, should return [0, 11, 1, 10, 2, 9, 3, 8, 4, 7, 5, 6].
 */
DEFAULT_COLUMN_INDICES = SLANTED_RIGHT_COLUMN_INDICES.map(columnIndex => {

    const ceilValue = Math.ceil(columnIndex / 2)

    return columnIndex % 2 ?
        CUBE_COLUMNS_LENGTH - ceilValue : ceilValue
})

module.exports = {
    ROW_INDICES_ARRAY,
    SLANTED_LEFT_COLUMN_INDICES,
    SLANTED_RIGHT_COLUMN_INDICES,
    DEFAULT_COLUMN_INDICES
}

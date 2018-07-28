import { getArrayOfLength } from '../../helpers/generalHelper'

import {
    CUBE_Y_AXIS_LENGTH,
    CUBE_X_AXIS_LENGTH
} from '../../constants/stage'

const
    TILE = 'tile',
    SIDE = 'side',
    FRONT = 'front',

    CEILING = 'ceiling',
    FLOOR = 'floor',

    Y_INDICES_ARRAY = getArrayOfLength(CUBE_Y_AXIS_LENGTH),

    SLANTED_RIGHT_X_AXIS_INDICES =
        getArrayOfLength(CUBE_X_AXIS_LENGTH),

    SLANTED_LEFT_X_AXIS_INDICES =
        SLANTED_RIGHT_X_AXIS_INDICES.slice().reverse(),

    /**
     * Returns array of indices that start from the ends and move towards the
     * centre, alternating between left and right. This allows the tiles that
     * overlap other tiles to be ordered correctly in the DOM.
     *
     * If length is 12, should return [0, 11, 1, 10, 2, 9, 3, 8, 4, 7, 5, 6].
     */
    DEFAULT_X_AXIS_INDICES = SLANTED_RIGHT_X_AXIS_INDICES.map(columnIndex => {

        const ceilValue = Math.ceil(columnIndex / 2)

        return columnIndex % 2 ?
            CUBE_X_AXIS_LENGTH - ceilValue : ceilValue
    })

module.exports = {
    TILE,
    SIDE,
    FRONT,
    CEILING,
    FLOOR,
    Y_INDICES_ARRAY,
    SLANTED_LEFT_X_AXIS_INDICES,
    SLANTED_RIGHT_X_AXIS_INDICES,
    DEFAULT_X_AXIS_INDICES
}

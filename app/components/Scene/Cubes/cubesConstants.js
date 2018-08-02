import {
    CUBE_X_AXIS_LENGTH,
    CUBE_X_INDICES
} from '../../../constants/stage'

const
    // If slanted right, each cube on left overlaps the one on its right.
    SLANTED_RIGHT_X_AXIS_Z_INDICES = CUBE_X_INDICES,

    // If slanted left, it's the reverse.
    SLANTED_LEFT_X_AXIS_Z_INDICES = CUBE_X_INDICES.slice().reverse(),

    /**
     * Returns array of indices that start from the ends and move towards the
     * centre, alternating between left and right. This allows the tiles that
     * overlap other tiles to have the correct stacking order.
     *
     * If length is 12, should return [0, 2, 4, 6, 8, 10, 11, 9, 7, 5, 3, 1].
     */
    DEFAULT_X_AXIS_Z_INDICES = CUBE_X_INDICES.map(xIndex => {

        return xIndex < CUBE_X_AXIS_LENGTH / 2 ?
            xIndex * 2 :
            (CUBE_X_AXIS_LENGTH - xIndex) * 2 - 1
    })

module.exports = {

    DEFAULT_X_AXIS_Z_INDICES,
    SLANTED_LEFT_X_AXIS_Z_INDICES,
    SLANTED_RIGHT_X_AXIS_Z_INDICES
}

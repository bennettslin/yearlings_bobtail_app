import { getArrayOfLength } from '../helpers/general'
import { k } from './scene/cubes/zIndices'

export const CUBE_X_AXIS_LENGTH = 12
export const CUBE_Y_AXIS_LENGTH = 6
export const CUBE_Z_AXIS_LENGTH = 16

export const BITMAP_MATRIX_LENGTH = 8
export const BITMAP_MATRIX_INDICES = getArrayOfLength(BITMAP_MATRIX_LENGTH)

export const CUBE_X_INDICES = getArrayOfLength(CUBE_X_AXIS_LENGTH)
export const CUBE_Y_INDICES = getArrayOfLength(CUBE_Y_AXIS_LENGTH)

// Bottom and top for each zIndex, plus above base for ceiling.
export const CUBE_Z_INDICES = getArrayOfLength(CUBE_Z_AXIS_LENGTH + 1).concat(k)

// If slanted right, each cube on left overlaps the one on its right.
export const SLANTED_RIGHT_X_AXIS_Z_INDICES = CUBE_X_INDICES

// If slanted left, it's the reverse.
export const SLANTED_LEFT_X_AXIS_Z_INDICES = CUBE_X_INDICES.slice().reverse()

/**
 * Returns array of indices that start from the ends and move towards the
 * centre, alternating between left and right. This allows the tiles that
 * overlap other tiles to have the correct stacking order.
 *
 * If length is 12, should return [0, 2, 4, 6, 8, 10, 11, 9, 7, 5, 3, 1].
 */
export const DEFAULT_X_AXIS_Z_INDICES = CUBE_X_INDICES.map(xIndex => {
    return xIndex < CUBE_X_AXIS_LENGTH / 2 ?
        xIndex * 2 :
        (CUBE_X_AXIS_LENGTH - xIndex) * 2 - 1
})

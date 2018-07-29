import {
    CUBE_X_AXIS_LENGTH,
    CUBE_X_INDICES
} from '../../constants/stage'

const
    LEFT = 'left',
    RIGHT = 'right',

    TILE = 'tile',
    SIDE = 'side',
    FRONT = 'front',

    CEILING = 'ceiling',
    FLOOR = 'floor',

    SLANTED_RIGHT_X_AXIS_INDICES = CUBE_X_INDICES,

    SLANTED_LEFT_X_AXIS_INDICES =
        SLANTED_RIGHT_X_AXIS_INDICES.slice().reverse(),

    /**
     * Returns array of indices that start from the ends and move towards the
     * centre, alternating between left and right. This allows the tiles that
     * overlap other tiles to be ordered correctly in the DOM.
     *
     * If length is 12, should return [0, 11, 1, 10, 2, 9, 3, 8, 4, 7, 5, 6].
     */
    DEFAULT_X_AXIS_INDICES = CUBE_X_INDICES.map(columnIndex => {

        const ceilValue = Math.ceil(columnIndex / 2)

        return columnIndex % 2 ?
            CUBE_X_AXIS_LENGTH - ceilValue : ceilValue
    })

module.exports = {
    DEFAULT_X_AXIS_INDICES,
    SLANTED_LEFT_X_AXIS_INDICES,
    SLANTED_RIGHT_X_AXIS_INDICES,

    LEFT,
    RIGHT,
    SLANT_DIRECTIONS: [
        '',
        LEFT,
        RIGHT
    ],

    CEILING,
    FLOOR,

    TILE,
    SIDE,
    FRONT,
    FACES: [
        TILE,
        SIDE,
        FRONT
    ]
}

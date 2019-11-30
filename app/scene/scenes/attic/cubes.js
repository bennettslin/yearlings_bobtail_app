import { ATTIC_KEY } from '../../../constants/scene/scenes'

import {
    DARK_FLOOR_COLOUR as Y,
    DARK_WALL_COLOUR as Z,
    ATTIC_COUCH_COLOUR as U
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { a, c, g } from '../../cubes/zIndices'

const CUBES = {
    [ATTIC_KEY]: {
        ceiling: {
            hslaColours: [
                [Z]
            ],
            zIndices: [
                [0],
                [0, g, g, g, g, g, g, g, g, g, g, 0]
            ]
        },
        floor: {
            hslaColours: [
                [Z],
                [Z, Y, U, U, U, U, Y, Y, Y, Y, Y, Z],
                [Z, Y, U, U, U, U, Y, Y, Y, Y, Y, Z],
                [Z, Y, U, U, U, U, Y, Y, Y, Y, Y, Z],
                [Z, Y, Y, Y, Y, Y, Y, Y, Y, Y, Y, Z],
                [Z, Y, Y, Y, Y, Y, Y, Y, Y, Y, Y, Z]
            ],
            zIndices: [
                [0],
                [0, 6, c, c, c, c, 6, 6, 1, 1, 1, 0],
                [0, 6, a, a, a, a, 6, 6, 1, 1, 1, 0],
                [0, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 0],
                [0, 6, 6, 6, 6, 6, 5, 5, 3, 2, 1, 0],
                [0, 6, 6, 6, 6, 6, 4, 4, 3, 2, 1, 0]
            ]
        }
    }
}

export default CUBES

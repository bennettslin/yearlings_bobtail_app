import { ATTIC_KEY } from '../../../constants/scene/scenes'

import {
    DARK_FLOOR_COLOUR as F,
    DARK_WALL_COLOUR as W,
    ATTIC_COUCH_COLOUR as U
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { a, c, g } from '../../cubes/zIndices'

const CUBES = {
    [ATTIC_KEY]: {
        ceiling: {
            hslaColours: [
                [W]
            ],
            zIndices: [
                [0],
                [0, g, g, g, g, g, g, g, g, g, g, 0]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, F, U, U, U, U, F, F, F, F, F, W],
                [W, F, U, U, U, U, F, F, F, F, F, W],
                [W, F, U, U, U, U, F, F, F, F, F, W],
                [W, F, F, F, F, F, F, F, F, F, F, W],
                [W, F, F, F, F, F, F, F, F, F, F, W]
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

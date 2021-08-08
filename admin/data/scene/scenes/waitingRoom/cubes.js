import { WAITING_ROOM_KEY } from '../../../../../src/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    WOOD_FLOOR_COLOUR as F,
    SOFT_WALL_COLOUR as W,
    WAITING_ARMCHAIR_COLOUR as U,
} from '../../../../../src/constants/scene/cubes/colours'

import { d, g, k } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [WAITING_ROOM_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [W],
            ],
            zIndices: [
                [k],
                [1],
                [1, g, g, g, g, g, g, g, g, g, g, 1],
                [1, g, g, g, g, g, g, g, g, g, g, d],
                [1, g, g, g, g, g, g, g, g, g, g, d],
                [1, g, g, g, g, g, g, g, g, g, g, 1],
            ],
        },
        floor: {
            hslaColours: [
                [G],
                [F, F, U, U, F, U, U, F],
                [F, F, U, U, F, U, U, F],
                [F, F, U, U, F, U, U, F],
                [F],
            ],
            zIndices: [
                [1],
                [1, 1, 6, 6, 1, 6, 6, 1],
                [1, 1, 3, 3, 1, 3, 3, 1],
                [1, 1, 3, 3, 1, 3, 3, 1],
                [1],
            ],
        },
    },
}

import { DISHROOM_KEY } from '../../../../../src/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    LINOLEUM_FLOOR_COLOUR as F,
    INDUSTRIAL_WALL_COLOUR as W,
    SCHOOL_WALL_COLOUR as Z,
    CONCRETE_PLATFORM_COLOUR as P,
} from '../../../../../src/constants/scene/cubes/colours'

import { b, f, g } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [DISHROOM_KEY]: {
        ceiling: {
            hslaColours: [
                [Z],
                [W],
            ],
            zIndices: [
                [0],
                [0, 0, f, f, f, f, f, 0],
                [0, g, g, g, g, g, g, g, g, g, g, 0],
            ],
        },
        floor: {
            hslaColours: [
                [F],
                [F, F, W, W, W, W, W, F],
                [F, F, D, D, D, D, D, F, P, P, P, F],
                [F, F, F, F, F, F, F, F, P, P, P, F],
                [F, F, F, F, F, F, F, F, P, P, P, F],
                [F, F, F, F, F, F, F, F, P, P, P, F],
            ],
            zIndices: [
                [0],
                [0, 0, b, b, b, b, b, 0],
                [0, 0, 6, 6, 6, 6, 6, 0, 4, 4, 4, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
            ],
        },
    },
}

import { VAN_NUYS_HALLWAY_KEY } from '../../../../../src/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    SCHOOL_FLOOR_COLOUR as F,
    SCHOOL_WALL_COLOUR as W,
} from '../../../../../src/constants/scene/cubes/colours'

import { d, g } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [VAN_NUYS_HALLWAY_KEY]: {
        ceiling: {
            hslaColours: [
                [W],
            ],
            zIndices: [
                [1],
                [1, g, g, g, g, g, g, g, g, g, g, 1],
                [1, g, g, g, g, g, g, g, g, g, g, 1],
                [1, 1, d, d, d, 1],
                [1, g, g, g, g, g, g, g, g, g, g, 1],
            ],
        },
        floor: {
            hslaColours: [
                [F],
                [F],
                [F],
                [F],
                [F, F, F, F, F, F, D, D, D, D, F],
                [F],
            ],
            zIndices: [
                [1],
                [1],
                [1],
                [1],
                [1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 1],
                [1],
            ],
        },
    },
}

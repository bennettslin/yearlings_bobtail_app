import {
    BATHROOM_KEY,
    BATHROOM_OPEN_KEY,
} from '../../../../../src/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    LINOLEUM_FLOOR_COLOUR as F,
    SOFT_WALL_COLOUR as W,
} from '../../../../../src/constants/scene/cubes/colours'

import { f, k } from '../../../../../src/constants/scene/cubes/zIndices'

const DEFAULT_FLOOR = {
    hslaColours: [
        [G],
        [F],
        [F],
        [F, F, F, D, D, D, D, F],
        [F],
        [F],
    ],
    zIndices: [
        [0],
        [1],
        [1],
        [1, 1, 1, 2, 2, 2, 2, 1],
        [1],
    ],
}

export default {
    [BATHROOM_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [W],
            ],
            zIndices: [
                [k],
                [1],
                [1, f, f, f, f, f, f, f, f, f, f, 1],
            ],
        },
        floor: DEFAULT_FLOOR,
    },
    [BATHROOM_OPEN_KEY]: {
        floor: DEFAULT_FLOOR,
    },
}

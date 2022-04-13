import {
    BENNETT_COUCH_KEY,
    BENNETT_COUCH_KEYBOARD_KEY,
    BENNETT_COUCH_THOUGHT_KEY,
} from '../../../../../src/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    BENNETT_FLOOR_COLOUR as F,
    BENNETT_WALL_COLOUR as W,
    BENNETT_COUCH_COLOUR as U,
    FURNITURE_PLATFORM_COLOUR as P,
} from '../../../../../src/constants/scene/cubes/colours'

import { c, f, g } from '../../../../../src/constants/scene/cubes/zIndices'

export const DEFAULT_CEILING = {
    hslaColours: [
        [W],
    ],
    zIndices: [
        [1, 1, 1, f, f, f, 1],
        [1, g, g, g, g, g, g, g, g, g, g, 1],
    ],
}

export default {
    [BENNETT_COUCH_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [F, F, F, W, W, W, F],
                [F, P, U, U, U, U, U, F, P, P, F],
                [F, P, U, U, U, U, U, F],
                [F, F, U, U, U, U, U, F],
                [F],
            ],
            zIndices: [
                [1, 1, 1, c, c, c, 1],
                [1, 5, 6, 6, 6, 6, 6, 1, 4, 4, 1],
                [1, 5, 3, 3, 3, 3, 3, 1],
                [1, 1, 3, 3, 3, 3, 3, 1],
                [1],
            ],
        },
    },
    [BENNETT_COUCH_KEYBOARD_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [F, F, F, W, W, W, F],
                [F, P, U, U, U, U, U, F, P, P, F],
                [F, P, U, U, U, U, U, F],
                [F, F, U, U, U, U, U, F],
                [F, F, F, F, F, D, F, F, D, F],
                [F],
            ],
            zIndices: [
                [1, 1, 1, c, c, c, 1],
                [1, 5, 6, 6, 6, 6, 6, 1, 4, 4, 1],
                [1, 5, 3, 3, 3, 3, 3, 1],
                [1, 1, 3, 3, 3, 3, 3, 1],
                [1, 1, 1, 1, 1, 2, 1, 1, 2, 1],
                [1],
            ],
        },
    },
    [BENNETT_COUCH_THOUGHT_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G, P, U, U, U, U, U, F, P, P, F, G],
                [G, P, U, U, U, U, U, F, F, F, F, G],
                [G, F, U, U, U, U, U, F, F, F, F, G],
                [G, F, F, F, F, F, F, F, F, F, F, G],
            ],
            zIndices: [
                [0],
                [0, 5, 6, 6, 6, 6, 6, 1, 4, 4, 1, 0],
                [0, 5, 3, 3, 3, 3, 3, 1, 1, 1, 1, 0],
                [0, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            ],
        },
    },
}

import { BASEMENT_COUCH_KEY } from '../../../../../src/constants/scene/scenes'

import {
    PAVEMENT_COLOUR as V,
    DIRT_FLOOR_COLOUR as F,
    UNDERGROUND_WALL_COLOUR as W,
    BENNETT_COUCH_COLOUR as U,
    FURNITURE_PLATFORM_COLOUR as P,
    BASEMENT_CEILING_COLOUR as C,
} from '../../../../../src/constants/scene/cubes/colours'

import { b, d, e, f } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [BASEMENT_COUCH_KEY]: {
        ceiling: {
            hslaColours: [
                [W],
                [W, C, C, C, C, C, C, C, C, C, C, W],
                [W, C, W, W, C, W, W, C, W, W, C, W],
                [W, C, W, W, C, W, W, C, W, W, C, W],
                [W, C, C, C, C, C, C, C, C, C, C, W],
                [W, C, W, W, C, W, W, C, W, W, C, W],
            ],
            zIndices: [
                [3],
                [3, d, e, e, d, e, e, d, e, e, d, 3],
                [3, d, f, f, d, f, f, d, f, f, d, 3],
                [3, d, f, f, d, f, f, d, f, f, d, b],
                [3, d, e, e, d, e, e, d, e, e, d, b],
                [3, d, f, f, d, f, f, d, f, f, d, 3],
            ],
        },
        floor: {
            hslaColours: [
                [V],
                [V, P, U, U, U, U, U, F, P, P, F, V],
                [V, P, U, U, U, U, U, F, F, F, F, V],
                [V, F, U, U, U, U, U, F, F, V],
                [V, F, F, F, F, F, F, F, F, V],
                [V, F, F, F, F, F, F, F, F, F, F, V],
            ],
            zIndices: [
                [3],
                [3, 4, 5, 5, 5, 5, 5, 0, 3, 3, 0, 3],
                [3, 4, 2, 2, 2, 2, 2, 0, 0, 0, 0, 3],
                [3, 0, 2, 2, 2, 2, 2, 0, 0, 1, 2, 3],
                [3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3],
                [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            ],
        },
    },
}

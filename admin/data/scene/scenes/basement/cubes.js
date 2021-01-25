import { BASEMENT_KEY } from '../../../../../app/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GRASS_COLOUR as H,
    PAVEMENT_COLOUR as V,
    DIRT_FLOOR_COLOUR as F,
    UNDERGROUND_WALL_COLOUR as W,
    BASEMENT_CEILING_COLOUR as C,
} from '../../../../../app/constants/scene/cubes/colours'

import { b, d, e, f, k } from '../../../../../app/constants/scene/cubes/zIndices'

export const DEFAULT_CEILING = {
    hslaColours: [
        [D],
        [W],
        [W, C, C, C, C, C, C, C, C, C, C, W],
        [W, C, W, W, C, W, W, C, W, W, C, W],
    ],
    zIndices: [
        [k],
        [3, 3, b, b, 3],
        [3, d, d, d, d, d, d, d, d, d, d, 3],
        [3, e, f, f, e, f, f, e, f, f, e, 3],
    ],
}

export default {
    [BASEMENT_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [H],
                [V],
                [V, F, V, V, F, F, F, F, F, F, F, V],
                [V, F, V, V, F, F, F, F, F, F, F, V],
                [V, F, F, F, D, F, F, D, F, F, F, V],
                [V, F, F, D, F, F, F, F, F, D, F, V],
            ],
            zIndices: [
                [3],
                [3],
                [3, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 3],
                [3, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 3],
                [3, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 3],
                [3, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 3],
            ],
        },
    },
}

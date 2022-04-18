import { PORCH_KEY } from '../../../../../src/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    GRASS_COLOUR as H,
    ROOF_COLOUR as C,
    PAVEMENT_COLOUR as V,
    FAMILY_EXTERIOR_COLOUR as X,
} from '../../../../../src/constants/scene/cubes/colours'

import { e, f } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [PORCH_KEY]: {
        ceiling: {
            hslaColours: [
                [C],
                [C, X, X, X, X, X, X, X, X, X, X, C],
                [C],
                [C, C, C, C, C, C, C, C, C, C, C, C],
                [C, C, C, X, C, C, C, C, C, X, C, C],
                [C, C, C, C, C, C, C, C, C, C, C, C],
            ],
            zIndices: [
                [f],
                [f, 1, 1, 2, 2, e, e, e, 2, 2, 1, f],
                [f],
                [f, f, f, f, f, f, f, f, f, f, f, f],
                [f, f, f, 1, f, f, f, f, f, 1, f, f],
                [f, f, f, f, f, f, f, f, f, f, f, f],
            ],
        },
        floor: {
            hslaColours: [
                [G],
                [H, H, H, V, V, V, V, V, V, V, H],
                [H, H, H, V, V, V, V, V, V, V, H],
                [H, H, H, V, V, V, V, V, V, V, H],
                [H, H, H, H, V, V, V, V, V, H, H],
                [H],
            ],
            zIndices: [
                [0],
                [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1],
                [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1],
                [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1],
                [1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1],
                [1],
            ],
        },
    },
}

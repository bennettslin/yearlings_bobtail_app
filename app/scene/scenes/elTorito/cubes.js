import { EL_TORITO_KEY } from '../../../constants/scene/scenes'

import {
    PAVEMENT_COLOUR as V,
    ROOF_COLOUR as C,
    VELVET_FLOOR_COLOUR as F,
    FANCY_WALL_COLOUR as W,
    GENERIC_EXTERIOR_COLOUR as X
} from '../../../constants/scene/cubes/colours'

import { e, f } from '../../../constants/scene/cubes/zIndices'

export default {
    [EL_TORITO_KEY]: {
        ceiling: {
            hslaColours: [
                [W],
                [W, C, C, C, C, C, C, C, C, C, C, W],
                [X],
                [C],
                [C, X, C, C, C, C, C, C, C, C, X, C],
                [C]
            ],
            zIndices: [
                [0],
                [2, f, f, f, f, f, f, f, f, f, f, 2],
                [1, 1, 1, e, e, e, e, e, e, 1, 1, 1],
                [f],
                [f, 1, f, f, f, f, f, f, f, f, 1, f],
                [f]
            ]
        },
        floor: {
            hslaColours: [
                [F],
                [F],
                [V]
            ],
            zIndices: [
                [0],
                [2],
                [1, 1, 1, 2, 2, 2, 2, 2, 2, 1],
                [1, 1, 1, 2, 2, 2, 2, 2, 2, 1],
                [1]
            ]
        }
    }
}

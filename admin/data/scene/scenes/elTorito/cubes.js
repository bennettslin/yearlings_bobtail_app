import { EL_TORITO_KEY } from '../../../../../src/constants/scene/scenes'

import {
    PAVEMENT_COLOUR as V,
    ROOF_COLOUR as C,
    DARK_ROOM_COLOUR as Z,
    GENERIC_EXTERIOR_COLOUR as X,
} from '../../../../../src/constants/scene/cubes/colours'

import { e, f } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [EL_TORITO_KEY]: {
        ceiling: {
            hslaColours: [
                [C, X, Z, Z, Z, Z, Z, Z, Z, Z, X, C],
                [C, X, C, C, C, C, C, C, C, C, X, C],
                [C, X, X, X, X, X, X, X, X, X, X, C],
                [C],
                [C, V, C, C, C, C, C, C, C, C, V, C],
                [C],
            ],
            zIndices: [
                [f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, f],
                [f, 1, f, f, f, f, f, f, f, f, 1, f],
                [f, 1, 1, e, e, e, e, e, e, 1, 1, f],
                [f],
                [f, 1, f, f, f, f, f, f, f, f, 1, f],
                [f],
            ],
        },
        floor: {
            hslaColours: [
                [V, X, X, X, X, X, X, X, X, X, X, V],
                [V, X, Z, Z, Z, Z, Z, Z, Z, Z, X, V],
                [V],
            ],
            zIndices: [
                [0],
                [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                [1, 1, 1, 2, 2, 2, 2, 2, 2, 1],
                [1, 1, 1, 2, 2, 2, 2, 2, 2, 1],
                [1],
            ],
        },
    },
}

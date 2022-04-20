import { BERKELEY_BANCROFT_KEY } from '../../../../../src/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    DARK_ROOM_COLOUR as Z,
    ROOF_COLOUR as C,
    PAVEMENT_COLOUR as V,
    BANCROFT_GATE_COLOUR as A,
    BANCROFT_EXTERIOR_COLOUR as X,
    CONCRETE_PLATFORM_COLOUR as P,
} from '../../../../../src/constants/scene/cubes/colours'

import { f, g, k } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [BERKELEY_BANCROFT_KEY]: {
        ceiling: {
            hslaColours: [
                [D, D, D, D, C, X, Z],
                [D, D, D, D, C, X, Z],
                [D, D, D, D, C, X],
                [D, D, D, D, C],
                [D],
            ],
            zIndices: [
                [k, k, k, k, g, 3],
                [k, k, k, k, g, 3],
                [k, k, k, k, g, 3, 3, 3, f, f, f, 3],
                [k, k, k, k, g],
                [k],
            ],
        },
        floor: {
            hslaColours: [
                [G],
                [V],
                [V, V, V, V, A, P],
                [V, V, V, V, A, A, A, P],
                [V, V, V, V, V, V, V, P],
                [V],
            ],
            zIndices: [
                [0],
                [1],
                [1, 1, 1, 1, 9, 3],
                [1, 1, 1, 1, 9, 9, 9, 3],
                [1, 1, 1, 1, 1, 1, 1, 2],
                [1],
            ],
        },
    },
}

import { BERKELEY_CAMPANILE_KEY } from '../../../../../src/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    ROOF_COLOUR as C,
    PAVEMENT_COLOUR as V,
    BANCROFT_GATE_COLOUR as A,
    BANCROFT_EXTERIOR_COLOUR as X,
    CONCRETE_PLATFORM_COLOUR as P,
} from '../../../../../src/constants/scene/cubes/colours'

import { g, k } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [BERKELEY_CAMPANILE_KEY]: {
        ceiling: {
            hslaColours: [
                [C, C, C, D],
                [X, X, C, D],
                [X, X, C, D],
                [C, C, C, D],
                [D],
            ],
            zIndices: [
                [g, g, g, k],
                [3, 3, g, k],
                [3, 3, g, k],
                [g, g, g, k],
                [k],
            ],
        },
        floor: {
            hslaColours: [
                [G],
                [V],
                [P, P, A, V],
                [P, A, A, V],
                [P, V],
                [V],
            ],
            zIndices: [
                [0],
                [1],
                [3, 3, 9, 1],
                [3, 9, 9, 1],
                [2, 1],
                [1],
            ],
        },
    },
}

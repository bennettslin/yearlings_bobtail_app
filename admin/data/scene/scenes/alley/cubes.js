import { ALLEY_KEY } from '../../../../../src/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    DARK_ROOM_COLOUR as Z,
    PAVEMENT_EVENING_COLOUR as V,
    GENERIC_EVENING_COLOUR as X,
    PLATFORM_EVENING_COLOUR as P,
    CONCRETE_PLATFORM_EVENING_COLOUR as Q,
} from '../../../../../src/constants/scene/cubes/colours'

import { d, f, k } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [ALLEY_KEY]: {
        ceiling: {
            hslaColours: [
                [Q, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Q],
                [Q, X, X, X, X, X, X, X, X, X, X, Q],
                [Q, Q, Q, Q, Q, Q, Q, Q, D, D, D, Q],
                [Q],
                [D],
            ],
            zIndices: [
                [f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, d],
                [f, 5, d, d, d, d, 5, 1, 1, 1, 1, d],
                [f, f, f, f, f, f, f, d, k, k, k, d],
                [f, f, f, f, f, f, f, d, d, d, d, d],
                [k],
            ],
        },
        floor: {
            hslaColours: [
                [G],
                [V, P, P, P, P, P, P, V],
                [V, P, P, P, P, P, P, V],
                [V],
            ],
            zIndices: [
                [0],
                [1, 5, 5, 5, 5, 5, 5, 1],
                [1, 5, 5, 5, 5, 5, 5, 1],
                [1],
            ],
        },
    },
}

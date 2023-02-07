import {
    LIZ_GATE_KEY,
    LIZ_GATE_STREET_KEY,
} from '../../../../../src/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    GRASS_EVENING_COLOUR as H,
    STREET_EVENING_COLOUR as T,
    PAVEMENT_EVENING_COLOUR as V,
    LIZ_GATE_EVENING_COLOUR as A,
    ROOF_EVENING_COLOUR as C,
    DARK_ROOM_COLOUR as Z,
    LIZ_EVENING_COLOR as X,
} from '../../../../../src/constants/scene/cubes/colours'

import { d, f, k } from '../../../../../src/constants/scene/cubes/zIndices'

/**
 * Blinds and gate should match in lizCouch.
 */
export default {
    [LIZ_GATE_KEY]: {
        ceiling: {
            hslaColours: [
                [Z],
                [X],
                [C],
                [D],
            ],
            zIndices: [
                [0],
                [1, 1, 1, 1, d, d, d, d, d, 1],
                [f],
                [k],
            ],
        },
        floor: {
            hslaColours: [
                [G],
                [V, X, X, X, X, X, X, X, X, X, X, V],
                [H],
                [A, A, A, A, A, V, V, V, A],
                [V],
            ],
            zIndices: [
                [0],
                [1, 1, 1, 1, 5, 5, 5, 5, 5, 1],
                [1],
                [6, 6, 6, 6, 6, 1, 1, 1, 6],
                [1],
            ],
        },
    },
    [LIZ_GATE_STREET_KEY]: {
        ceiling: {
            hslaColours: [
                [Z, Z, Z, Z, Z, Z, Z, Z, Z, C, D],
                [X, X, X, X, X, X, X, X, X, C, D],
                [C, C, C, C, C, C, C, C, C, C, D],
                [D],
            ],
            zIndices: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, f, k],
                [1, d, d, d, d, d, 1, 1, 1, f, k],
                [f, f, f, f, f, f, f, f, f, f, k],
                [k],
            ],
        },
        floor: {
            hslaColours: [
                [G],
                [V, X, X, X, X, X, V],
                [H, H, H, H, H, H, H, H, H, H, T, V],
                [A, A, V, V, V, A, A, A, A, A, T, V],
                [V, V, V, V, V, V, V, V, V, V, T],
            ],
            zIndices: [
                [0],
                [1, 5, 5, 5, 5, 5, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
                [6, 6, 1, 1, 1, 6, 6, 6, 6, 6, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            ],
        },
    },
}

import {
    LIZ_GATE_KEY,
    LIZ_GATE_STREET_KEY
} from '../../cubesKeys'

import {
    DEFAULT_HSLA,
    STREET_HSLA,
    PAVEMENT_HSLA,
    GATE_HSLA,
    CEILING_HSLA,
    WALL_HSLA
} from '../../hslaKeys'

import {
    d,
    f,
    k
} from '../../zIndexKeys'

/**
 * Blinds and gate should match in lizCouch.
 */

const
    D = DEFAULT_HSLA,
    T = STREET_HSLA,
    V = PAVEMENT_HSLA,
    A = GATE_HSLA,
    C = CEILING_HSLA,
    W = WALL_HSLA,

    LIZ_GATE_CUBES = {
        ceiling: {
            hslaColours: [
                [D],
                [C, C, C, C, W, W, W, W, W, C, C, C],
                [C],
                [D]
            ],
            zIndices: [
                [k],
                [f, f, f, f, d, d, d, d, d, f, f, f],
                [f],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [T],
                [W, W, W, W, W, W, W, W, W, W, W, A],
                [V, V, V, V, V, V, V, V, V, V, V, A],
                [A, A, A, A, A, V, V, V, A],
                [V]
            ],
            zIndices: [
                [0],
                [f, f, f, f, 6, 6, 6, 6, 6, f, f, 7],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7],
                [7, 7, 7, 7, 7, 1, 1, 1, 7],
                [1]
            ]
        }
    },
    LIZ_GATE_STREET_CUBES = {
        ceiling: {
            hslaColours: [
                [D],
                [C, W, W, W, W, W, C, C, C, D],
                [C, C, C, C, C, C, C, C, C, D],
                [D]
            ],
            zIndices: [
                [k],
                [f, d, d, d, d, d, f, f, f, k],
                [f, f, f, f, f, f, f, f, f, k],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [T],
                [W, W, W, W, W, W, W, W, A, V, V, T],
                [V, V, V, V, V, V, V, V, A, V, V, T],
                [A, A, V, V, V, A, A, A, A, V, V, T],
                [V, V, V, V, V, V, V, V, V, V, V, T]
            ],
            zIndices: [
                [0],
                [f, 6, 6, 6, 6, 6, f, f, 7, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 0],
                [7, 7, 1, 1, 1, 7, 7, 7, 7, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },

    CUBES = {
        [LIZ_GATE_KEY]: LIZ_GATE_CUBES,
        [LIZ_GATE_STREET_KEY]: LIZ_GATE_STREET_CUBES
    }

export default CUBES

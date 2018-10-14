import {
    BANCROFT_LIBRARY_KEY,
    CAMPANILE_KEY
} from '../../cubesKeys'

import {
    DEFAULT_HSLA,
    GROUND_HSLA,
    PAVEMENT_HSLA,
    GATE_HSLA,
    WALL_HSLA,
    PLATFORM_HSLA
} from '../../hslaKeys'

import {
    f,
    g,
    k
} from '../../cubesConstants'

const
    D = DEFAULT_HSLA,
    G = GROUND_HSLA,
    V = PAVEMENT_HSLA,
    A = GATE_HSLA,
    W = WALL_HSLA,
    P = PLATFORM_HSLA,

    BANCROFT_LIBRARY_CUBES = {
        ceiling: {
            hslaColours: [
                [D],
                [D],
                [D, D, D, D, D, W],
                [D]
            ],
            zIndices: [
                [k],
                [k],
                [k, k, k, k, k, g, g, g, f, f, f, g],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [G],
                [V],
                [V, V, V, V, A, W, W, W, P, P, P, W],
                [V, V, V, V, A, A, A, P, P, P, P, P],
                [V, V, V, V, V, V, V, P, P, P, P, P],
                [V]
            ],
            zIndices: [
                [0],
                [1],
                [1, 1, 1, 1, 9, g, g, g, 3, 3, 3, g],
                [1, 1, 1, 1, 9, 9, 9, 3, 3, 3, 3, 3],
                [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
                [1]
            ]
        }
    },
    CAMPANILE_CUBES = {
        ceiling: {
            hslaColours: [
                [D],
                [D],
                [W, W, W, D],
                [D]
            ],
            zIndices: [
                [k],
                [k],
                [g, g, g, k],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [G],
                [V],
                [W, W, W, A, V],
                [P, A, A, A, V],
                [P, V],
                [V]
            ],
            zIndices: [
                [0],
                [1],
                [g, g, g, 9, 1],
                [3, 9, 9, 9, 1],
                [2, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [BANCROFT_LIBRARY_KEY]: BANCROFT_LIBRARY_CUBES,
        [CAMPANILE_KEY]: CAMPANILE_CUBES
    }

export default CUBES

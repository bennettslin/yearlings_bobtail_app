import {
    LIZ_COUCH_KEY,
    LIZ_COUCH_SEAT_KEY,
    LIZ_COUCH_THOUGHT_KEY
} from 'scene/cubesKeys'

import {
    DEFAULT_HSLA,
    GROUND_HSLA,
    PAVEMENT_HSLA,
    GATE_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    UPHOLSTERY_HSLA,
    SEAT_HSLA
} from '../../hslaKeys'

import {
    d,
    g,
    k
} from 'scene/cubesConstants'

/**
 * Blinds and gate should match in lizGate.
 * Couch should match in snowglobesFuture.
 */

const
    D = DEFAULT_HSLA,
    G = GROUND_HSLA,
    V = PAVEMENT_HSLA,
    A = GATE_HSLA,
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,
    U = UPHOLSTERY_HSLA,
    S = SEAT_HSLA,

    DEFAULT_CEILING = {
        hslaColours: [
            [D],
            [C, C, C, C, W, W, W, W, W, C],
            [C],
            [C, C, C, C, C, C, C, C, C, C, C, W],
            [C, C, C, C, C, C, C, C, C, C, C, W],
            [C],
        ],
        zIndices: [
            [k],
            [g, g, g, g, d, d, d, d, d, g],
            [g],
            [g, g, g, g, g, g, g, g, g, g, g, d],
            [g, g, g, g, g, g, g, g, g, g, g, d],
            [g],
        ]
    },

    LIZ_COUCH_CUBES = {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [A, A, A, A, A, V, V, V, A],
                [W, W, W, W, W, W, W, W, W, W],
                [W, U, U, U, F, F, F, F, F, F, F, W],
                [W, U, U, U, F],
                [W, U, U, U, F],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [7, 7, 7, 7, 7, 1, 1, 1, 7],
                [g, g, g, g, 6, 6, 6, 6, 6, g],
                [g, 7, 3, 3, 1, 1, 1, 1, 1, 1, 1, g],
                [g, 7, 3, 3, 1],
                [g, 7, 3, 3, 1],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    LIZ_COUCH_SEAT_CUBES = {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [A, A, A, A, A, V, V, V, A],
                [W, W, W, W, W, W, W, W, W, W],
                [W, U, U, U, F, F, F, F, F, F, F, W],
                [W, U, U, U, F, F, F, F, F, S, F],
                [W, U, U, U, F],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [7, 7, 7, 7, 7, 1, 1, 1, 7],
                [g, g, g, g, 6, 6, 6, 6, 6, g],
                [g, 7, 3, 3, 1, 1, 1, 1, 1, 1, 1, g],
                [g, 7, 3, 3, 1, 1, 1, 1, 1, 3, 1],
                [g, 7, 3, 3, 1],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    LIZ_COUCH_THOUGHT_CUBES = {
        floor: {
            hslaColours: [
                [G],
                [F],
                [F, U, U, U, F],
                [F, U, U, U, F],
                [F, U, U, U, F],
                [F]
            ],
            zIndices: [
                [0],
                [1],
                [1, 7, 3, 3, 1],
                [1, 7, 3, 3, 1],
                [1, 7, 3, 3, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [LIZ_COUCH_KEY]: LIZ_COUCH_CUBES,
        [LIZ_COUCH_SEAT_KEY]: LIZ_COUCH_SEAT_CUBES,
        [LIZ_COUCH_THOUGHT_KEY]: LIZ_COUCH_THOUGHT_CUBES
    }

export default CUBES

import {
    LIZ_COUCH_KEY,
    LIZ_COUCH_OPEN_KEY,
    LIZ_COUCH_SEAT_KEY,
    LIZ_COUCH_GATE_OPEN_KEY,
    LIZ_COUCH_PEAFOWL_KEY,
    LIZ_COUCH_THOUGHT_KEY
} from '../../cubesKeys'

import {
    DEFAULT_HSLA,
    GROUND_HSLA,
    PAVEMENT_HSLA,
    GATE_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    DOOR_HSLA,
    UPHOLSTERY_HSLA,
    SEAT_HSLA
} from '../../hslaKeys'

import {
    d,
    g,
    k
} from '../../zIndexKeys'

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
    E = DOOR_HSLA,
    U = UPHOLSTERY_HSLA,
    S = SEAT_HSLA,

    ceiling = {
        hslaColours: [
            [D],
            [C, C, C, C, W, W, W, W, W, C],
            [C],
            [C, C, C, C, C, C, C, C, C, C, C, W],
            [C, C, C, C, C, C, C, C, C, C, C, W],
            [C]
        ],
        zIndices: [
            [k],
            [g, g, g, g, d, d, d, d, d, g],
            [g],
            [g, g, g, g, g, g, g, g, g, g, g, d],
            [g, g, g, g, g, g, g, g, g, g, g, d],
            [g]
        ]
    },
    LIZ_COUCH_CUBES = {
        ceiling,
        floor: {
            hslaColours: [
                [A, A, A, A, A, E, E, E, A],
                [W, W, W, W, W, W, W, W, W, W],
                [W, U, U, U, F, F, F, F, F, F, F, W],
                [W, U, U, U, F, F, F, F, F, F, F, E],
                [W, U, U, U, F, F, F, F, F, F, F, E],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [7, 7, 7, 7, 7, 6, 6, 6, 7],
                [g, g, g, g, 6, 6, 6, 6, 6, g],
                [g, 7, 3, 3, 1, 1, 1, 1, 1, 1, 1, g],
                [g, 7, 3, 3, 1, 1, 1, 1, 1, 1, 1, d],
                [g, 7, 3, 3, 1, 1, 1, 1, 1, 1, 1, d],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    LIZ_COUCH_OPEN_CUBES = {
        ceiling,
        floor: {
            hslaColours: [
                [A, A, A, A, A, E, E, E, A],
                [W, W, W, W, W, W, W, W, W, W],
                [W, U, U, U, F, F, F, F, F, F, F, W],
                [W, U, U, U, F],
                [W, U, U, U, F],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [7, 7, 7, 7, 7, 6, 6, 6, 7],
                [g, g, g, g, 6, 6, 6, 6, 6, g],
                [g, 7, 3, 3, 1, 1, 1, 1, 1, 1, 1, g],
                [g, 7, 3, 3, 1],
                [g, 7, 3, 3, 1],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    LIZ_COUCH_SEAT_CUBES = {
        ceiling,
        floor: {
            hslaColours: [
                [A, A, A, A, A, E, E, E, A],
                [W, W, W, W, W, W, W, W, W, W],
                [W, U, U, U, F, F, F, F, F, F, F, W],
                [W, U, U, U, F, F, F, F, F, S, F, E],
                [W, U, U, U, F, F, F, F, F, F, F, E],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [7, 7, 7, 7, 7, 6, 6, 6, 7],
                [g, g, g, g, 6, 6, 6, 6, 6, g],
                [g, 7, 3, 3, 1, 1, 1, 1, 1, 1, 1, g],
                [g, 7, 3, 3, 1, 1, 1, 1, 1, 3, 1, d],
                [g, 7, 3, 3, 1, 1, 1, 1, 1, 1, 1, d],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    LIZ_COUCH_GATE_OPEN_CUBES = {
        ceiling,
        floor: {
            hslaColours: [
                [A, A, A, A, A, V, V, V, A],
                [W, W, W, W, W, W, W, W, W, W],
                [W, U, U, U, F, F, F, F, F, F, F, W],
                [W, U, U, U, F, F, F, F, F, F, F, E],
                [W, U, U, U, F, F, F, F, F, F, F, E],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [7, 7, 7, 7, 7, 1, 1, 1, 7],
                [g, g, g, g, 6, 6, 6, 6, 6, g],
                [g, 7, 3, 3, 1, 1, 1, 1, 1, 1, 1, g],
                [g, 7, 3, 3, 1, 1, 1, 1, 1, 1, 1, d],
                [g, 7, 3, 3, 1, 1, 1, 1, 1, 1, 1, d],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    LIZ_COUCH_PEAFOWL_CUBES = {
        ceiling,
        floor: {
            hslaColours: [
                [A, A, A, A, A, E, E, E, A],
                [W, W, W, W, W, W, W, W, W, W],
                [W, U, U, U, F, F, F, F, F, F, F, W],
                [W, U, U, U, F, F, F, F, F, F, F, E],
                [W, U, U, U, F, F, F, F, F, F, F, E],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [7, 7, 7, 7, 7, 6, 6, 6, 7],
                [g, g, g, g, 6, 6, 6, 6, 6, g],
                [g, 7, 3, 3, 1, 1, 1, 1, 1, 1, 1, g],
                [g, 7, 3, 3, 1, 1, 1, 1, 1, 1, 1, d],
                [g, 7, 3, 3, 1, 1, 1, 1, 1, 1, 1, d],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    LIZ_COUCH_THOUGHT_CUBES = {
        floor: {
            hslaColours: [
                [G],
                [G, U, U, U, F, F, F, F, F, F, F, G],
                [G, U, U, U, F, F, F, F, F, F, F, G],
                [G, U, U, U, F, F, F, F, F, F, F, G],
                [G, F, F, F, F, F, F, F, F, F, F, G],
                [G]
            ],
            zIndices: [
                [0],
                [0, 7, 3, 3, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 7, 3, 3, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 7, 3, 3, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [LIZ_COUCH_KEY]: LIZ_COUCH_CUBES,
        [LIZ_COUCH_OPEN_KEY]: LIZ_COUCH_OPEN_CUBES,
        [LIZ_COUCH_SEAT_KEY]: LIZ_COUCH_SEAT_CUBES,
        [LIZ_COUCH_GATE_OPEN_KEY]: LIZ_COUCH_GATE_OPEN_CUBES,
        [LIZ_COUCH_PEAFOWL_KEY]: LIZ_COUCH_PEAFOWL_CUBES,
        [LIZ_COUCH_THOUGHT_KEY]: LIZ_COUCH_THOUGHT_CUBES
    }

export default CUBES

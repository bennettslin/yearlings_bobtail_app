import {
    LIZ_COUCH_KEY,
    LIZ_COUCH_SEAT_KEY,
    LIZ_COUCH_DARK_KEY,
    LIZ_COUCH_PEAFOWL_KEY,
    LIZ_COUCH_THOUGHT_KEY
} from '../../../constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    PAVEMENT_COLOUR as V,
    LIZ_GATE_COLOUR as A,
    LIZ_FLOOR_COLOUR as F,
    DARK_FLOOR_COLOUR as Y,
    LIZ_WALL_COLOUR as W,
    DARK_WALL_COLOUR as Z,
    LIZ_COUCH_COLOUR as U,
    SEAT_COLOUR as S
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { d, g, k } from '../../cubes/zIndices'

/**
 * Blinds and gate should match in lizGate.
 * Couch should match in snowglobesFuture.
 */
const DEFAULT_CEILING = {
    hslaColours: [
        [D],
        [W]
    ],
    zIndices: [
        [k],
        [1, 1, 1, 1, d, d, d, d, d, 1],
        [1, g, g, g, g, g, g, g, g, g, g, 1],
        [1, g, g, g, g, g, g, g, g, g, g, d],
        [1, g, g, g, g, g, g, g, g, g, g, d],
        [1, g, g, g, g, g, g, g, g, g, g, 1]
    ]
}

const DEFAULT_FLOOR = {
    hslaColours: [
        [A, A, A, A, A, V, V, V, A],
        [F, F, F, F, W, W, W, W, W, F],
        [F],
        [F, U, U, U, F],
        [F, U, U, U, F],
        [F]
    ],
    zIndices: [
        [7, 7, 7, 7, 7, 1, 1, 1, 7],
        [1, 1, 1, 1, 6, 6, 6, 6, 6, 1],
        [1],
        [1, 7, 4, 4, 1],
        [1, 7, 4, 4, 1],
        [1]
    ]
}

const CUBES = {
    [LIZ_COUCH_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: DEFAULT_FLOOR
    },
    [LIZ_COUCH_SEAT_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [A, A, A, A, A, V, V, V, A],
                [F, F, F, F, W, W, W, W, W, F],
                [F],
                [F, U, U, U, F],
                [F, U, U, U, F, F, F, F, F, S, F],
                [F]
            ],
            zIndices: [
                [7, 7, 7, 7, 7, 1, 1, 1, 7],
                [1, 1, 1, 1, 6, 6, 6, 6, 6, 1],
                [1],
                [1, 7, 4, 4, 1],
                [1, 7, 4, 4, 1, 1, 1, 1, 1, 3, 1],
                [1]
            ]
        }
    },
    [LIZ_COUCH_DARK_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [Z]
            ],
            zIndices: DEFAULT_CEILING.zIndices
        },
        floor: {
            hslaColours: [
                [A, A, A, A, A, V, V, V, A],
                [Y, Y, Y, Y, Z, Z, Z, Z, Z, Y],
                [Y]
            ],
            zIndices: DEFAULT_FLOOR.zIndices
        }
    },
    [LIZ_COUCH_PEAFOWL_KEY]: {
        floor: {
            hslaColours: [
                [Y]
            ],
            zIndices: [
                [1],
                [1],
                [1],
                [1, 7, 4, 4, 1],
                [1, 7, 4, 4, 1],
                [1]
            ]
        }
    },
    [LIZ_COUCH_THOUGHT_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G, F, F, F, F, F, F, F, F, F, F, G],
                [G, U, U, U, F, F, F, F, F, F, F, G],
                [G, U, U, U, F, F, F, F, F, F, F, G],
                [G, F, F, F, F, F, F, F, F, F, F, G],
                [G]
            ],
            zIndices: [
                [0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 7, 4, 4, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 7, 4, 4, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    }
}

export default CUBES

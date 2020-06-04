import {
    LIZ_COUCH_KEY,
    LIZ_COUCH_SEAT_KEY,
    LIZ_COUCH_DARK_KEY,
    LIZ_COUCH_PEAFOWL_KEY
} from '../../../../../app/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    PAVEMENT_COLOUR as V,
    LIZ_GATE_COLOUR as A,
    LIZ_FLOOR_COLOUR as F,
    LIZ_WALL_COLOUR as W,
    NIGHT_COLOUR as Y,
    NIGHT_MAGIC_COLOUR as Z,
    SPOTLIGHT_LIGHT_COLOUR as L,
    SPOTLIGHT_LIGHTER_COLOUR as M,
    SPOTLIGHT_LIGHTEST_COLOUR as N,
    LIZ_COUCH_COLOUR as U,
    SEAT_COLOUR as S
} from '../../../../../app/constants/scene/cubes/colours'

// eslint-disable-next-line object-curly-newline
import { d, g, k } from '../../../../../app/constants/scene/cubes/zIndices'

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
        [6, 6, 6, 6, 6, 1, 1, 1, 6],
        [1, 1, 1, 1, 6, 6, 6, 6, 6, 1],
        [1],
        [1, 7, 3, 3, 1],
        [1, 7, 3, 3, 1],
        [1]
    ]
}

export default {
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
                [6, 6, 6, 6, 6, 1, 1, 1, 6],
                [1, 1, 1, 1, 6, 6, 6, 6, 6, 1],
                [1],
                [1, 7, 3, 3, 1],
                [1, 7, 3, 3, 1, 1, 1, 1, 1, 3, 1],
                [1]
            ]
        }
    },
    [LIZ_COUCH_DARK_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [Y]
            ],
            zIndices: DEFAULT_CEILING.zIndices
        },
        floor: {
            hslaColours: [
                [A, A, A, A, A, V, V, V, A],
                [Y]
            ],
            zIndices: DEFAULT_FLOOR.zIndices
        }
    },
    [LIZ_COUCH_PEAFOWL_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G, Z, Z, Z, Z, Z, L, M, M, L, Z, G],
                [G, Z, Z, Z, Z, L, M, N, N, M, L, G],
                [G, Z, Z, Z, Z, L, M, N, N, M, L, G],
                [G, Z, Z, Z, Z, Z, L, M, M, L, Z, G],
                [G, Z, Z, Z, Z, Z, Z, L, L, Z, Z, G]
            ],
            zIndices: [
                [0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 7, 3, 3, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 7, 3, 3, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    }
}

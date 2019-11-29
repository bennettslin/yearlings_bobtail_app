import {
    LIZ_COUCH_KEY,
    LIZ_COUCH_SEAT_KEY,
    LIZ_COUCH_THOUGHT_KEY
} from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    GROUND_COLOUR as G,
    PAVEMENT_COLOUR as V,
    LIZ_GATE_COLOUR as A,
    CEILING_COLOUR as C,
    LIZ_FLOOR_COLOUR as F,
    LIZ_FLOOR_DARK_COLOUR as L,
    LIZ_WALL_COLOUR as W,
    UPHOLSTERY_COLOUR as U,
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
}

const CUBES = {
    [LIZ_COUCH_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [A, A, A, A, A, V, V, V, A],
                [W, W, W, W, W, W, W, W, W, W],
                [W, U, U, U, F, F, F, F, F, F, F, W],
                [W, U, U, U, L],
                [W, U, U, U, F],
                [W, L, L, L, L, L, L, L, L, L, L, W]
            ],
            zIndices: [
                [7, 7, 7, 7, 7, 1, 1, 1, 7],
                [g, g, g, g, 6, 6, 6, 6, 6, g],
                [g, 7, 4, 4, 1, 1, 1, 1, 1, 1, 1, g],
                [g, 7, 4, 4, 1],
                [g, 7, 4, 4, 1],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    [LIZ_COUCH_SEAT_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [A, A, A, A, A, V, V, V, A],
                [W, W, W, W, W, W, W, W, W, W],
                [W, U, U, U, F, F, F, F, F, F, F, W],
                [W, U, U, U, L, L, L, L, L, S, L],
                [W, U, U, U, F],
                [W, L, L, L, L, L, L, L, L, L, L, W]
            ],
            zIndices: [
                [7, 7, 7, 7, 7, 1, 1, 1, 7],
                [g, g, g, g, 6, 6, 6, 6, 6, g],
                [g, 7, 4, 4, 1, 1, 1, 1, 1, 1, 1, g],
                [g, 7, 4, 4, 1, 1, 1, 1, 1, 3, 1],
                [g, 7, 4, 4, 1],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    [LIZ_COUCH_THOUGHT_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G, U, U, U, F, F, F, F, F, F, F, G],
                [G, U, U, U, L, L, L, L, L, L, L, G],
                [G, U, U, U, F, F, F, F, F, F, F, G],
                [G, L, L, L, L, L, L, L, L, L, L, G],
                [G]
            ],
            zIndices: [
                [0],
                [0, 7, 4, 4, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 7, 4, 4, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 7, 4, 4, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    }
}

export default CUBES

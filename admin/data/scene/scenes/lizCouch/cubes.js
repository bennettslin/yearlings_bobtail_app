import {
    LIZ_COUCH_KEY,
    LIZ_COUCH_SEAT_KEY,
    LIZ_COUCH_DARK_KEY,
    LIZ_COUCH_NIGHT_KEY,
    LIZ_COUCH_EVENING_KEY,
    OAKLAND_COUCH_THOUGHT_KEY,
} from '../../../../../src/constants/scene/scenes'
import { LIZ_COUCH_FUTURE_CUBES } from './asleep/cubes'
import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    PAVEMENT_COLOUR as V,
    PAVEMENT_NIGHT_COLOUR as X,
    LIZ_GATE_COLOUR as A,
    LIZ_GATE_EVENING_COLOUR as B,
    LIZ_GATE_NIGHT_COLOUR as C,
    LIZ_FLOOR_COLOUR as F,
    LIZ_WALL_COLOUR as W,
    DARK_ROOM_COLOUR as Z,
    LIZ_COUCH_COLOUR as U,
} from '../../../../../src/constants/scene/cubes/colours'
import { d, g, k } from '../../../../../src/constants/scene/cubes/zIndices'

/**
 * Blinds and gate should match in lizGate.
 * Couch should match in snowglobesFuture.
 */
const DEFAULT_CEILING = {
    hslaColours: [
        [D],
        [W],
    ],
    zIndices: [
        [k],
        [1, 1, 1, 1, d, d, d, d, d, 1],
        [1, g, g, g, g, g, g, g, g, g, g, 1],
        [1, g, g, g, g, g, g, g, g, g, g, d],
        [1, g, g, g, g, g, g, g, g, g, g, d],
        [1, g, g, g, g, g, g, g, g, g, g, 1],
    ],
}

const DEFAULT_FLOOR = {
    hslaColours: [
        [A, A, A, A, A, V, V, V, A],
        [F, F, F, F, W, W, W, W, W, F],
        [F],
        [F, U, U, U, F],
        [F, U, U, U, F],
        [F],
    ],
    zIndices: [
        [6, 6, 6, 6, 6, 1, 1, 1, 6],
        [1, 1, 1, 1, 5, 5, 5, 5, 5, 1],
        [1],
        [1, 7, 3, 3, 1],
        [1, 7, 3, 3, 1],
        [1],
    ],
}

export default {
    [LIZ_COUCH_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: DEFAULT_FLOOR,
    },
    [LIZ_COUCH_EVENING_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [B, B, B, B, B, X, X, X, B],
                [F, F, F, F, W, W, W, W, W, F],
                [F],
                [F, U, U, U, F],
                [F, U, U, U, F],
                [F],
            ],
            zIndices: DEFAULT_FLOOR.zIndices,
        },
    },
    [LIZ_COUCH_NIGHT_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [C, C, C, C, C, X, X, X, C],
                [F, F, F, F, W, W, W, W, W, F],
                [F],
                [F, U, U, U, F],
                [F, U, U, U, F],
                [F],
            ],
            zIndices: DEFAULT_FLOOR.zIndices,
        },
    },
    [LIZ_COUCH_SEAT_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [A, A, A, A, A, V, V, V, A],
                [F, F, F, F, W, W, W, W, W, F],
                [F],
                [F, U, U, U, F],
                [F, U, U, U, F, F, F, F, U, U, F],
                [F],
            ],
            zIndices: [
                [6, 6, 6, 6, 6, 1, 1, 1, 6],
                [1, 1, 1, 1, 5, 5, 5, 5, 5, 1],
                [1],
                [1, 7, 3, 3, 1],
                [1, 7, 3, 3, 1, 1, 1, 1, 3, 3, 1],
                [1],
            ],
        },
    },
    [LIZ_COUCH_DARK_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [Z],
            ],
            zIndices: DEFAULT_CEILING.zIndices,
        },
        floor: {
            hslaColours: [
                [C, C, C, C, C, X, X, X, C],
                [Z],
            ],
            zIndices: DEFAULT_FLOOR.zIndices,
        },
    },
    [OAKLAND_COUCH_THOUGHT_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G, F, F, F, F, F, F, F, F, F, F, G],
                [G, F, F, F, F, F, F, F, F, F, F, G],
                [G, U, U, U, F, F, F, F, F, F, F, G],
                [G, U, U, U, F, F, F, F, F, F, F, G],
                [G, F, F, F, F, F, F, F, F, F, F, G],
            ],
            zIndices: [
                [0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 7, 3, 3, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 7, 3, 3, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            ],
        },
    },
    ...LIZ_COUCH_FUTURE_CUBES,
}

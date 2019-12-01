import {
    LIZ_BED_KEY,
    LIZ_BED_OPEN_KEY,
    LIZ_BED_PHONE_KEY,
    LIZ_BED_DARK_KEY
} from '../../../constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    LIZ_FLOOR_COLOUR as F,
    LIZ_FLOOR_DARK_COLOUR as L,
    DARK_FLOOR_COLOUR as Y,
    LIZ_WALL_COLOUR as W,
    DARK_WALL_COLOUR as Z,
    FURNITURE_COLOUR as R,
    LIZ_BED_COLOUR as U,
    SEAT_COLOUR as S
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { e, g, k } from '../../cubes/zIndices'

const DEFAULT_CEILING = {
    hslaColours: [
        [W, F, L, F, L, F, L, F, L, F, L, W],
        [W, W, R, U, U, U, U, U, W],
        [W]
    ],
    zIndices: [
        [1],
        [1, g, e, 4, 4, 4, 4, 4, g, g, g, 1],
        [1, g, g, g, g, g, g, g, g, g, g, 1]
    ]
}

const DEFAULT_FLOOR = {
    hslaColours: [
        [L, F, L, F, L, F, L, F, L, F, L, F],
        [L, F, L, U, U, U, U, U, L, F, L, F],
        [L, F, L, U, U, U, U, U, L, F, L, F],
        [L, F, L, U, U, U, U, U, L, F, L, F],
        [L, F, R, U, U, U, U, U, L, F, L, F],
        [L, F, L, F, L, F, L, F, L, F, L, F]
    ],
    zIndices: [
        [1],
        [1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1],
        [1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1],
        [1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1],
        [1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1],
        [1]
    ]
}

const OPEN_CEILING = {
    hslaColours: [
        [D, F, L, F, L, F, L, F, L, F, L, D],
        [D, D, R, U, U, U, U, U, D],
        [D]
    ],
    zIndices: [
        [k, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, k],
        [k, k, e, 4, 4, 4, 4, 4, k],
        [k]
    ]
}

const CUBES = {
    [LIZ_BED_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: DEFAULT_FLOOR
    },
    [LIZ_BED_OPEN_KEY]: {
        ceiling: OPEN_CEILING,
        floor: {
            hslaColours: [
                [G],
                [G, F, L, U, U, U, U, U, L, F, L, G],
                [G, F, L, U, U, U, U, U, L, F, L, G],
                [G, F, L, U, U, U, U, U, L, F, L, G],
                [G, F, R, U, U, U, U, U, L, F, L, G],
                [G, F, L, F, L, F, L, F, L, F, L, G]
            ],
            zIndices: [
                [0],
                [0, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 0],
                [0, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 0],
                [0, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 0],
                [0, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },
    [LIZ_BED_PHONE_KEY]: {
        ceiling: OPEN_CEILING,
        floor: {
            hslaColours: [
                [G],
                [G, F, L, U, U, U, U, U, L, F, L, G],
                [G, F, L, U, U, U, U, U, L, F, L, G],
                [G, F, L, U, U, U, U, U, L, F, L, G],
                [G, F, R, U, U, U, U, U, L, F, S, G],
                [G, F, L, F, L, F, L, F, L, F, L, G]
            ],
            zIndices: [
                [0],
                [0, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 0],
                [0, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 0],
                [0, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 0],
                [0, 1, 4, 4, 4, 4, 4, 4, 1, 1, 3, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },
    [LIZ_BED_DARK_KEY]: {
        ceiling: {
            hslaColours: [
                [Z, Y, Y, Y, Y, Y, Y, Y, Y, Y, Y, Z],
                [Z, Z, Y, Y, Y, Y, Y, Y, Z],
                [Z]
            ],
            zIndices: DEFAULT_CEILING.zIndices
        },
        floor: {
            hslaColours: [
                [Y]
            ],
            zIndices: DEFAULT_FLOOR.zIndices
        }
    }
}

export default CUBES

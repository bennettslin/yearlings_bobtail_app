import {
    BEDROOM_KEY,
    BEDROOM_STOOL_KEY,
    BEDROOM_OPEN_KEY,
    BEDROOM_DOGS_KEY,
    BEDROOM_SPACE_KEY
} from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    GROUND_COLOUR as G,
    CEILING_COLOUR as C,
    BEDROOM_FLOOR_COLOUR as F,
    BEDROOM_FLOOR_DARK_COLOUR as L,
    BEDROOM_WALL_COLOUR as W,
    FURNITURE_COLOUR as R,
    CAPTAIN_BED_COLOUR as U,
    SEAT_COLOUR as S
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { d, g, k, LEFT } from '../../cubes/zIndices'

/**
 * --.-----------
 * --...---------
 * -......-------
 * -########-----
 * ...xxx..###---
 * -.......xxx#.-
 * ---.x...xxx#..
 * -----...xxx#..
 * -------.xxx#.-
 * ---------..#.-
 * -----------#--
 */
// TODO: Dark floor patterns.
const DEFAULT_CEILING = {
    hslaColours: [
        [D, D, D, D, D, W, D, W, W, W, D],
        [D, D, D, W, W, C, W, C, C, W, D],
        [D, D, W, W, C, C, C, C, C, C, W, D],
        [W, W, C, C, C, C, C, C, C, C, W, D],
        [C, C, C, C, C, C, C, C, C, C, W, D],
        [W, C, C, C, C, C, C, C, C, C, C, W]
    ],
    zIndices: [
        [k, k, k, k, k, 1, k, 1, 1, 1, k],
        [k, k, k, d, d, g, 1, g, g, 1, k],
        [k, k, d, d, g, g, g, g, g, g, 1, k],
        [1, d, g, g, g, g, g, g, g, g, 1, k],
        [g, g, g, g, g, g, g, g, g, g, 1, k],
        [1, g, g, g, g, g, g, g, g, g, g, 1]
    ]
}

const CUBES = {
    [BEDROOM_KEY]: {
        slantDirection: LEFT,
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [G, G, G, G, G, F, G, F, F, F, G],
                [G, G, G, W, W, F, G, U, U, F, G],
                [G, G, W, W, R, F, F, U, U, U, F, G],
                [F, W, R, R, F, F, F, U, U, U, F, G],
                [F, F, F, F, F, F, F, U, F, F, F, G],
                [F, F, L, L, F, F, L, L, F, F, L, F]
            ],
            zIndices: [
                [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
                [0, 0, 0, 6, 6, 1, 0, 7, 7, 1, 0],
                [0, 0, 6, 6, 5, 1, 1, 7, 7, 7, 1, 0],
                [1, 6, 5, 5, 1, 1, 1, 7, 7, 7, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        }
    },
    [BEDROOM_STOOL_KEY]: {
        slantDirection: LEFT,
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [G, G, G, G, G, F, G, F, F, F, G],
                [G, G, G, W, W, F, G, U, U, F, G],
                [G, G, W, W, R, F, F, U, U, U, F, G],
                [F, W, R, R, F, S, F, U, U, U, F, G],
                [F, F, F, F, F, F, F, U, F, F, F, G],
                [F, F, L, L, F, F, L, L, F, F, L, F]
            ],
            zIndices: [
                [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
                [0, 0, 0, 6, 6, 1, 0, 7, 7, 1, 0],
                [0, 0, 6, 6, 5, 1, 1, 7, 7, 7, 1, 0],
                [1, 6, 5, 5, 1, 3, 1, 7, 7, 7, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        }
    },
    [BEDROOM_OPEN_KEY]: {
        slantDirection: LEFT,
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [G, G, G, G, G, F, G, F, F, F, G],
                [G, G, G, W, W, F, G, F, F, F, G],
                [G, G, W, W, R, F, F, F, F, F, F, G],
                [F, W, R, R, F, F, F, F, F, F, F, G],
                [F, F, F, F, F, F, F, F, F, F, F, G],
                [F, F, L, L, F, F, L, L, F, F, L, F]
            ],
            zIndices: [
                [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
                [0, 0, 0, 6, 6, 1, 0, 1, 1, 1, 0],
                [0, 0, 6, 6, 5, 1, 1, 1, 1, 1, 1, 0],
                [1, 6, 5, 5, 1, 1, 1, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        }
    },
    [BEDROOM_DOGS_KEY]: {
        slantDirection: LEFT,
        ceiling: {
            hslaColours: [
                [D, D, D, D, D, W, D, W, W, W, D],
                [D, D, D, D, D, C, W, C, C, W, D],
                [D, D, D, D, D, D, C, C, C, C, W, D],
                [D, D, D, D, D, C, C, C, C, C, W, D],
                [D, D, D, D, D, C, C, C, C, C, W, D],
                [D, D, D, D, D, D, C, C, C, C, C, W]
            ],
            zIndices: [
                [k, k, k, k, k, 1, k, 1, 1, 1, k],
                [k, k, k, k, k, g, 1, g, g, 1, k],
                [k, k, k, k, k, k, g, g, g, g, 1, k],
                [k, k, k, k, k, g, g, g, g, g, 1, k],
                [k, k, k, k, k, g, g, g, g, g, 1, k],
                [k, k, k, k, k, k, g, g, g, g, g, 1]
            ]
        },
        floor: {
            hslaColours: [
                [G, G, G, G, G, F, G, F, F, F, G],
                [G, G, G, G, G, F, F, F, F, F, G],
                [G, G, G, G, G, G, F, F, F, F, F, G],
                [G, G, G, G, G, F, F, F, F, F, F, G],
                [G, G, G, G, G, F, F, F, F, F, F, G],
                [G, G, G, G, G, G, L, L, F, F, L, F]
            ],
            zIndices: [
                [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
            ]
        }
    },
    [BEDROOM_SPACE_KEY]: {
        slantDirection: LEFT,
        ceiling: {
            hslaColours: [
                [D, D, D, D, D, W, D],
                [D, D, D, W, W, C, D],
                [D, D, W, W, C, C, D],
                [W, W, C, C, C, C, D],
                [C, C, C, C, C, C, D],
                [W, C, C, C, C, C, D]
            ],
            zIndices: [
                [k, k, k, k, k, 1, k],
                [k, k, k, d, d, g, k],
                [k, k, d, d, g, g, k],
                [1, d, g, g, g, g, k],
                [g, g, g, g, g, g, k],
                [1, g, g, g, g, g, k]
            ]
        },
        floor: {
            hslaColours: [
                [G, G, G, G, G, F, G],
                [G, G, G, W, W, F, G],
                [G, G, W, W, R, F, G],
                [F, W, R, R, F, F, G],
                [F, F, F, F, F, F, G],
                [F, F, L, L, F, F, G]
            ],
            zIndices: [
                [0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 6, 6, 1, 0],
                [0, 0, 6, 6, 5, 1, 0],
                [1, 6, 5, 5, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 0]
            ]
        }
    }
}

export default CUBES

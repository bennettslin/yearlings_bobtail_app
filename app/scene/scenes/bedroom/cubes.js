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
        [D, D, D, D, D, C, D, C, C, C, D],
        [D, D, D, W, W, C, C, C, C, C, D],
        [D, D, W, W, C, C, C, C, C, C, C, D],
        [C, W, C, C, C, C, C, C, C, C, C, D],
        [C, C, C, C, C, C, C, C, C, C, C, D],
        [C]
    ],
    zIndices: [
        [k, k, k, k, k, g, k, g, g, g, k],
        [k, k, k, d, d, g, g, g, g, g, k],
        [k, k, d, d, g, g, g, g, g, g, g, k],
        [g, d, g, g, g, g, g, g, g, g, g, k],
        [g, g, g, g, g, g, g, g, g, g, g, k],
        [g]
    ]
}

const CUBES = {
    [BEDROOM_KEY]: {
        slantDirection: LEFT,
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [G, G, G, G, G, W, G, W, W, W, G],
                [G, G, G, W, W, F, W, U, U, W, G],
                [G, G, W, W, R, F, F, U, U, U, W, G],
                [W, W, R, R, F, F, F, U, U, U, W, G],
                [F, F, F, F, F, F, F, U, F, F, W, G],
                [W, F, L, L, F, F, L, L, F, F, L, W]
            ],
            zIndices: [
                [0, 0, 0, 0, 0, g, 0, g, g, g, 0],
                [0, 0, 0, 6, 6, 1, g, 7, 7, g, 0],
                [0, 0, 6, 6, 5, 1, 1, 7, 7, 7, g, 0],
                [g, 6, 5, 5, 1, 1, 1, 7, 7, 7, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 7, 1, 1, g, 0],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    [BEDROOM_STOOL_KEY]: {
        slantDirection: LEFT,
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [G, G, G, G, G, W, G, W, W, W, G],
                [G, G, G, W, W, F, W, U, U, W, G],
                [G, G, W, W, R, F, F, U, U, U, W, G],
                [W, W, R, R, F, S, F, U, U, U, W, G],
                [F, F, F, F, F, F, F, U, F, F, W, G],
                [W, F, L, L, F, F, L, L, F, F, L, W]
            ],
            zIndices: [
                [0, 0, 0, 0, 0, g, 0, g, g, g, 0],
                [0, 0, 0, 6, 6, 1, g, 7, 7, g, 0],
                [0, 0, 6, 6, 5, 1, 1, 7, 7, 7, g, 0],
                [g, 6, 5, 5, 1, 3, 1, 7, 7, 7, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 7, 1, 1, g, 0],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    [BEDROOM_OPEN_KEY]: {
        slantDirection: LEFT,
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [G, G, G, G, G, W, G, W, W, W, G],
                [G, G, G, W, W, F, W, F, F, W, G],
                [G, G, W, W, R, F, F, F, F, F, W, G],
                [W, W, R, R, F, F, F, F, F, F, W, G],
                [F, F, F, F, F, F, F, F, F, F, W, G],
                [W, F, L, L, F, F, L, L, F, F, L, W]
            ],
            zIndices: [
                [0, 0, 0, 0, 0, g, 0, g, g, g, 0],
                [0, 0, 0, 6, 6, 1, g, 1, 1, g, 0],
                [0, 0, 6, 6, 5, 1, 1, 1, 1, 1, g, 0],
                [g, 6, 5, 5, 1, 1, 1, 1, 1, 1, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g, 0],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    [BEDROOM_DOGS_KEY]: {
        slantDirection: LEFT,
        floor: {
            hslaColours: [
                [G, G, G, G, G, G, G, W, W, W, G],
                [G, G, G, G, G, G, W, U, U, W, G],
                [G, G, G, G, G, G, F, U, U, U, W, G],
                [G, G, G, G, G, G, F, U, U, U, W, G],
                [G, G, G, G, G, G, F, U, F, F, W, G],
                [G, G, G, G, G, G, L, L, F, F, L, W]
            ],
            zIndices: [
                [0, 0, 0, 0, 0, 0, 0, g, g, g, 0],
                [0, 0, 0, 0, 0, 0, g, 7, 7, g, 0],
                [0, 0, 0, 0, 0, 0, 1, 7, 7, 7, g, 0],
                [0, 0, 0, 0, 0, 0, 1, 7, 7, 7, g, 0],
                [0, 0, 0, 0, 0, 0, 1, 7, 1, 1, g, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    [BEDROOM_SPACE_KEY]: {
        slantDirection: LEFT,
        ceiling: {
            hslaColours: [
                [D, D, D, D, D, D, D],
                [D, D, D, W, W, D, D],
                [D, D, W, W, D, D, D],
                [D, W, D, D, D, D, D],
                [D, D, D, D, D, D, D]
            ],
            zIndices: [
                [k],
                [k, k, k, d, d, k],
                [k, k, d, d, k],
                [k, d, k],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [G, G, G, G, G, W, G],
                [G, G, G, W, W, F, G],
                [G, G, W, W, R, F, G],
                [W, W, R, R, F, F, G],
                [F, F, F, F, S, F, G],
                [W, F, L, L, F, F, G]
            ],
            zIndices: [
                [0, 0, 0, 0, 0, g, 0],
                [0, 0, 0, 6, 6, 1, 0],
                [0, 0, 6, 6, 5, 1, 0],
                [g, 6, 5, 5, 1, 1, 0],
                [1, 1, 1, 1, 3, 1, 0],
                [g, 1, 1, 1, 1, 1, 0]
            ]
        }
    }
}

export default CUBES

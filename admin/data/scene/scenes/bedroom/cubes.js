import { LEFT } from '../../../../../app/constants/scene/cubes'
import { BEDROOM_SPACE_CUBES } from './shaken/cubes'
import {
    BEDROOM_KEY,
    BEDROOM_STOOL_KEY,
    BEDROOM_OPEN_KEY,
    BEDROOM_DOGS_KEY
} from '../../../../../app/constants/scene/scenes'
import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    BENNETT_CARPET_COLOUR as F,
    BENNETT_WALL_COLOUR as W,
    NIGHT_MAGIC_COLOUR as Z,
    SPOTLIGHT_MEDIUM_COLOUR as L,
    SPOTLIGHT_LIGHT_COLOUR as M,
    SPOTLIGHT_LIGHTER_COLOUR as N,
    SPOTLIGHT_LIGHTEST_COLOUR as O,
    FURNITURE_COLOUR as R,
    BENNETT_BED_COLOUR as U,
    SEAT_COLOUR as S
} from '../../../../../app/constants/scene/cubes/colours'
import { d, g, k } from '../../../../../app/constants/scene/cubes/zIndices'

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
const DEFAULT_CEILING = {
    hslaColours: [
        [D, D, D, D, D, W, D, W, W, W, D],
        [D, D, D, W, W, W, W, W, W, W, D],
        [D, D, W, W, W, W, W, W, W, W, W, D],
        [W, W, W, W, W, W, W, W, W, W, W, D],
        [W, W, W, W, W, W, W, W, W, W, W, D],
        [W, W, W, W, W, W, W, W, W, W, W, W]
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

const DEFAULT_FLOOR = {
    hslaColours: [
        [G, G, G, G, G, F, G, F, F, F, G],
        [G, G, G, W, W, F, F, U, U, F, G],
        [G, G, W, W, R, F, F, U, U, U, F, G],
        [F, W, R, R, F, F, F, U, U, U, F, G],
        [F, F, F, F, F, F, F, U, F, F, F, G],
        [F]
    ],
    zIndices: [
        [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 6, 6, 1, 1, 7, 7, 1, 0],
        [0, 0, 6, 6, 5, 1, 1, 7, 7, 7, 1, 0],
        [1, 6, 5, 5, 1, 1, 1, 7, 7, 7, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 0],
        [1]
    ]
}

export default {
    [BEDROOM_KEY]: {
        slantDirection: LEFT,
        ceiling: DEFAULT_CEILING,
        floor: DEFAULT_FLOOR
    },
    [BEDROOM_STOOL_KEY]: {
        slantDirection: LEFT,
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [G, G, G, G, G, F, G, F, F, F, G],
                [G, G, G, W, W, F, F, U, U, F, G],
                [G, G, W, W, R, F, F, U, U, U, F, G],
                [F, W, R, R, F, F, F, U, U, U, F, G],
                [F, F, F, F, S, F, F, U, F, F, F, G],
                [F]
            ],
            zIndices: [
                [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
                [0, 0, 0, 6, 6, 1, 1, 7, 7, 1, 0],
                [0, 0, 6, 6, 5, 1, 1, 7, 7, 7, 1, 0],
                [1, 6, 5, 5, 1, 1, 1, 7, 7, 7, 1, 0],
                [1, 1, 1, 1, 3, 1, 1, 7, 1, 1, 1, 0],
                [1]
            ]
        }
    },
    [BEDROOM_OPEN_KEY]: {
        slantDirection: LEFT,
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [G, G, G, G, G, F, G, F, F, F, G],
                [G, G, G, W, W, F, F, F, F, F, G],
                [G, G, W, W, R, F, F, F, F, F, F, G],
                [F, W, R, R, F, F, F, F, F, F, F, G],
                [F, F, F, F, F, F, F, F, F, F, F, G],
                [F]
            ],
            zIndices: [
                [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
                [0, 0, 0, 6, 6, 1, 1, 1, 1, 1, 0],
                [0, 0, 6, 6, 5, 1, 1, 1, 1, 1, 1, 0],
                [1, 6, 5, 5, 1, 1, 1, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [1]
            ]
        }
    },
    [BEDROOM_DOGS_KEY]: {
        slantDirection: LEFT,
        floor: {
            hslaColours: [
                [G],
                [G, G, G, G, G, Z, Z, Z, Z, G],
                [G, G, G, G, L, Z, Z, Z, Z, Z, G],
                [G, G, N, M, M, Z, Z, Z, Z, Z, G],
                [M, N, O, N, M, Z, Z, Z, Z, Z, G],
                [G, N, O, O, N, L, Z, Z, Z, Z, Z, G]
            ],
            zIndices: [
                [0],
                [0, 0, 0, 0, 0, 1, 1, 7, 7, 0],
                [0, 0, 0, 0, 1, 1, 1, 7, 7, 7, 0],
                [0, 0, 1, 1, 1, 1, 1, 7, 7, 7, 0],
                [1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },
    ...BEDROOM_SPACE_CUBES
}

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
    GRASS_COLOUR as H,
    BENNETT_CARPET_COLOUR as F,
    BENNETT_WALL_COLOUR as W,
    NIGHT_MAGIC_COLOUR as Z,
    SPOTLIGHT_MEDIUM_COLOUR as L,
    SPOTLIGHT_LIGHT_COLOUR as M,
    SPOTLIGHT_LIGHTER_COLOUR as N,
    SPOTLIGHT_LIGHTEST_COLOUR as O,
    BENNETT_BED_COLOUR as U
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
        [H, H, H, H, H, F, H, F, F, F, H],
        [H, H, H, W, W, F, F, U, U, F, H],
        [H, H, W, W, D, F, F, U, U, U, F, H],
        [F, W, D, D, F, F, F, U, U, U, F, H],
        [F, F, F, F, F, F, F, U, F, F, F, H],
        [F]
    ],
    zIndices: [
        [1],
        [1, 1, 1, 6, 6, 1, 1, 7, 7, 1],
        [1, 1, 6, 6, 5, 1, 1, 7, 7, 7, 1],
        [1, 6, 5, 5, 1, 1, 1, 7, 7, 7, 1],
        [1, 1, 1, 1, 1, 1, 1, 7, 1],
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
                [H, H, H, H, H, F, H, F, F, F, H],
                [H, H, H, W, W, F, F, U, U, F, H],
                [H, H, W, W, D, F, F, U, U, U, F, H],
                [F, W, D, D, F, F, F, U, U, U, F, H],
                [F, F, F, F, D, F, F, U, F, F, F, H],
                [F]
            ],
            zIndices: [
                [1],
                [1, 1, 1, 6, 6, 1, 1, 7, 7, 1],
                [1, 1, 6, 6, 5, 1, 1, 7, 7, 7, 1],
                [1, 6, 5, 5, 1, 1, 1, 7, 7, 7, 1],
                [1, 1, 1, 1, 3, 1, 1, 7, 1],
                [1]
            ]
        }
    },
    [BEDROOM_OPEN_KEY]: {
        slantDirection: LEFT,
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [H, H, H, H, H, F, H, F, F, F, H],
                [H, H, H, W, W, F, F, F, F, F, H],
                [H, H, W, W, D, F, F, F, F, F, F, H],
                [F, W, D, D, F, F, F, F, F, F, F, H],
                [F, F, F, F, F, F, F, F, F, F, F, H],
                [F]
            ],
            zIndices: [
                [1],
                [1, 1, 1, 6, 6, 1],
                [1, 1, 6, 6, 5, 1],
                [1, 6, 5, 5, 1],
                [1],
                [1]
            ]
        }
    },
    [BEDROOM_DOGS_KEY]: {
        slantDirection: LEFT,
        floor: {
            hslaColours: [
                [H, H, H, H, H, Z, Z, Z, Z, Z, H],
                [H, H, H, Z, Z, Z, Z, Z, Z, Z, H],
                [H, H, M, L, L, Z, Z, Z, Z, Z, Z, H],
                [L, M, N, M, M, Z, Z, Z, Z, Z, Z, H],
                [M, N, O, N, M, Z, Z, Z, Z, Z, Z, H],
                [L, N, O, O, N, L, Z, Z, Z, Z, Z, Z]
            ],
            zIndices: [
                [1],
                [1, 1, 1, 1, 1, 1, 1, 7, 7, 1],
                [1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 1],
                [1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 1],
                [1, 1, 1, 1, 1, 1, 1, 7, 1],
                [1]
            ]
        }
    },
    ...BEDROOM_SPACE_CUBES
}

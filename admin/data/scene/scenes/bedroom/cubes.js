import { LEFT } from '../../../../../src/constants/scene/cubes'
import { BEDROOM_FUTURE_CUBES } from './shaken/cubes'
import {
    BEDROOM_KEY,
    BEDROOM_STOOL_KEY,
    BEDROOM_DARK_KEY,
    BEDROOM_STOOL_NIGHT_KEY,
    BEDROOM_EVENING_KEY,
} from '../../../../../src/constants/scene/scenes'
import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    GRASS_COLOUR as H,
    GRASS_EVENING_COLOUR as I,
    GRASS_NIGHT_COLOUR as J,
    BENNETT_CARPET_COLOUR as F,
    BENNETT_WALL_COLOUR as W,
    DARK_ROOM_COLOUR as Z,
    BENNETT_BED_COLOUR as U,
} from '../../../../../src/constants/scene/cubes/colours'
import { d, g, k } from '../../../../../src/constants/scene/cubes/zIndices'
import { BEDROOM_MAGIC_CUBES } from './asleep/cubes'

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
        [W, W, W, W, W, W, W, W, W, W, W, W],
    ],
    zIndices: [
        [k, k, k, k, k, 1, k, 1, 1, 1, k],
        [k, k, k, d, d, g, 1, g, g, 1, k],
        [k, k, d, d, g, g, g, g, g, g, 1, k],
        [1, d, g, g, g, g, g, g, g, g, 1, k],
        [g, g, g, g, g, g, g, g, g, g, 1, k],
        [1, g, g, g, g, g, g, g, g, g, g, 1],
    ],
}

const DEFAULT_FLOOR = {
    hslaColours: [
        [H, H, H, H, H, F, H, F, F, F, H],
        [H, H, H, W, W, F, F, U, U, F, H],
        [H, H, W, W, D, F, F, U, U, U, F, H],
        [F, W, D, D, F, F, F, U, U, U, F, H],
        [F, F, F, F, F, F, F, U, F, F, F, H],
        [F],
    ],
    zIndices: [
        [1],
        [1, 1, 1, 6, 6, 1, 1, 7, 7, 1],
        [1, 1, 6, 6, 5, 1, 1, 7, 7, 7, 1],
        [1, 6, 5, 5, 1, 1, 1, 7, 7, 7, 1],
        [1, 1, 1, 1, 1, 1, 1, 7, 1],
        [1],
    ],
}

const STOOL_FLOOR = {
    zIndices: [
        [1],
        [1, 1, 1, 6, 6, 1, 1, 7, 7, 1],
        [1, 1, 6, 6, 5, 1, 1, 7, 7, 7, 1],
        [1, 6, 5, 5, 1, 1, 1, 7, 7, 7, 1],
        [1, 1, 1, 1, 3, 1, 1, 7, 1],
        [1],
    ],
}

export default {
    [BEDROOM_KEY]: {
        slantDirection: LEFT,
        ceiling: DEFAULT_CEILING,
        floor: DEFAULT_FLOOR,
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
                [F],
            ],
            zIndices: STOOL_FLOOR.zIndices,
        },
    },
    [BEDROOM_EVENING_KEY]: {
        slantDirection: LEFT,
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [I, I, I, I, I, F, I, F, F, F, I],
                [I, I, I, W, W, F, F, U, U, F, I],
                [I, I, W, W, D, F, F, U, U, U, F, I],
                [F, W, D, D, F, F, F, U, U, U, F, I],
                [F, F, F, F, F, F, F, U, F, F, F, I],
                [F],
            ],
            zIndices: DEFAULT_FLOOR.zIndices,
        },
    },
    [BEDROOM_STOOL_NIGHT_KEY]: {
        slantDirection: LEFT,
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [J, J, J, J, J, F, J, F, F, F, J],
                [J, J, J, W, W, F, F, U, U, F, J],
                [J, J, W, W, D, F, F, U, U, U, F, J],
                [F, W, D, D, F, F, F, U, U, U, F, J],
                [F, F, F, F, D, F, F, U, F, F, F, J],
                [F],
            ],
            zIndices: STOOL_FLOOR.zIndices,
        },
    },
    [BEDROOM_DARK_KEY]: {
        slantDirection: LEFT,
        ceiling: {
            hslaColours: [
                [J, J, J, J, J, Z, J, Z, Z, Z, J],
                [J, J, J, Z, Z, Z, Z, Z, Z, Z, J],
                [J, J, Z, Z, Z, Z, Z, Z, Z, Z, Z, J],
                [Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, J],
                [Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, J],
                [Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z],
            ],
            zIndices: DEFAULT_CEILING.zIndices,
        },
        floor: {
            hslaColours: [
                [J, J, J, J, J, Z, J, Z, Z, Z, J],
                [J, J, J, Z, Z, Z, Z, Z, Z, Z, J],
                [J, J, Z, Z, G, Z, Z, Z, Z, Z, Z, J],
                [Z, Z, G, G, Z, Z, Z, Z, Z, Z, Z, J],
                [Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, J],
                [Z],
            ],
            zIndices: DEFAULT_FLOOR.zIndices,
        },
    },
    ...BEDROOM_MAGIC_CUBES,
    ...BEDROOM_FUTURE_CUBES,
}

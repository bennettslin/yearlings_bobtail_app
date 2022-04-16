import { LEFT } from '../../../../../src/constants/scene/cubes'
import { BEDROOM_FUTURE_CUBES } from './shaken/cubes'
import {
    BEDROOM_KEY,
    BEDROOM_STOOL_KEY,
    BEDROOM_STOWAWAYS_KEY,
    BEDROOM_DARK_KEY,
} from '../../../../../src/constants/scene/scenes'
import {
    DEFAULT_CLEAR_COLOUR as D,
    GRASS_COLOUR as H,
    BENNETT_CARPET_COLOUR as F,
    BENNETT_WALL_COLOUR as W,
    NIGHT_COLOUR as Z,
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
            zIndices: [
                [1],
                [1, 1, 1, 6, 6, 1, 1, 7, 7, 1],
                [1, 1, 6, 6, 5, 1, 1, 7, 7, 7, 1],
                [1, 6, 5, 5, 1, 1, 1, 7, 7, 7, 1],
                [1, 1, 1, 1, 3, 1, 1, 7, 1],
                [1],
            ],
        },
    },
    [BEDROOM_STOWAWAYS_KEY]: {
        slantDirection: LEFT,
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [H, H, H, H, H, F, H, F, F, F, H],
                [H, H, H, W, W, F, F, F, F, F, H],
                [H, H, W, W, D, F, F, F, F, F, F, H],
                [F, W, D, D, F, F, F, F, F, F, F, H],
                [F, F, F, F, F, F, F, F, F, F, F, H],
                [F],
            ],
            zIndices: [
                [1],
                [1, 1, 1, 6, 6, 1],
                [1, 1, 6, 6, 5, 1],
                [1, 6, 5, 5, 1],
                [1],
                [1],
            ],
        },
    },
    [BEDROOM_DARK_KEY]: {
        slantDirection: LEFT,
        ceiling: {
            hslaColours: [
                [D, D, D, D, D, Z, D, Z, Z, Z, D],
                [D, D, D, Z, Z, Z, Z, Z, Z, Z, D],
                [D, D, Z, Z, Z, Z, Z, Z, Z, Z, Z, D],
                [Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, D],
                [Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, D],
                [Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z],
            ],
            zIndices: DEFAULT_CEILING.zIndices,
        },
        floor: {
            hslaColours: [
                [H, H, H, H, H, Z, H, Z, Z, Z, H],
                [H, H, H, Z, Z, Z, Z, Z, Z, Z, H],
                [H, H, Z, Z, D, Z, Z, Z, Z, Z, Z, H],
                [Z, Z, D, D, Z, Z, Z, Z, Z, Z, Z, H],
                [Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, H],
                [Z],
            ],
            zIndices: DEFAULT_FLOOR.zIndices,
        },
    },
    ...BEDROOM_MAGIC_CUBES,
    ...BEDROOM_FUTURE_CUBES,
}

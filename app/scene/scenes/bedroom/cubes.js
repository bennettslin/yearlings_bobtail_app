import {
    BEDROOM_KEY,
    BEDROOM_STOOL_KEY,
    BEDROOM_OPEN_KEY,
    BEDROOM_DOGS_KEY,
    BEDROOM_SPACE_KEY
} from 'scene/cubesKeys'

import {
    DEFAULT_HSLA,
    GROUND_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    FURNITURE_HSLA,
    SEAT_HSLA
} from '../../hslaKeys'

import {
    d,
    g,
    k,
    LEFT
} from 'scene/cubesConstants'

const
    D = DEFAULT_HSLA,
    G = GROUND_HSLA,
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,
    R = FURNITURE_HSLA,
    S = SEAT_HSLA,

    DEFAULT_BEDROOM_CEILING = {
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
    },

    BEDROOM_CUBES = {
        slantDirection: LEFT,
        ceiling: DEFAULT_BEDROOM_CEILING,
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
        floor: {
            hslaColours: [
                [G, G, G, G, G, W, G, W, W, W, G],
                [G, G, G, W, W, F, W, R, R, W, G],
                [G, G, W, W, R, F, F, R, R, R, W, G],
                [W, W, R, R, F, F, F, R, R, R, W, G],
                [F, F, F, F, F, F, F, R, R, R, W, G],
                [W, F, F, F, F, F, F, F, R, F, F, W]
            ],
            zIndices: [
                [0, 0, 0, 0, 0, g, 0, g, g, g, 0],
                [0, 0, 0, 6, 6, 1, g, 6, 6, g, 0],
                [0, 0, 6, 6, 5, 1, 1, 6, 6, 6, g, 0],
                [g, 6, 5, 5, 1, 1, 1, 6, 6, 6, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 6, 6, 6, g, 0],
                [g, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, g]
            ]
        }
    },
    BEDROOM_STOOL_CUBES = {
        slantDirection: LEFT,
        ceiling: DEFAULT_BEDROOM_CEILING,
        floor: {
            hslaColours: [
                [G, G, G, G, G, W, G, W, W, W, G],
                [G, G, G, W, W, F, W, R, R, W, G],
                [G, G, W, W, R, F, F, R, R, R, W, G],
                [W, W, R, R, F, S, F, R, R, R, W, G],
                [F, F, F, F, F, F, F, R, R, R, W, G],
                [W, F, F, F, F, F, F, F, R, F, F, W]
            ],
            zIndices: [
                [0, 0, 0, 0, 0, g, 0, g, g, g, 0],
                [0, 0, 0, 6, 6, 1, g, 6, 6, g, 0],
                [0, 0, 6, 6, 5, 1, 1, 6, 6, 6, g, 0],
                [g, 6, 5, 5, 1, 4, 1, 6, 6, 6, g, 0],
                [1, 1, 1, 1, 1, 1, 1, 6, 6, 6, g, 0],
                [g, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, g]
            ]
        }
    },
    BEDROOM_OPEN_CUBES = {
        slantDirection: LEFT,
        ceiling: DEFAULT_BEDROOM_CEILING,
        floor: {
            hslaColours: [
                [G, G, G, G, G, W, G, W, W, W, G],
                [G, G, G, W, W, F, W, R, R, W, G],
                [G, G, W, W, R, F, F, R, R, R, W, G],
                [W, W, R, R, F, F, F, R, R, R, W, G],
                [F, F, F, F, F, F, F, R, R, R, W, G],
                [W, F, F, F, F, F, F, F, R, F, F, W]
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
    BEDROOM_DOGS_CUBES = {
        slantDirection: LEFT,
        ceiling: {
            hslaColours: [
                [D, D, D, D, D, D, D, C, C, C, D],
                [D, D, D, D, D, D, C, C, C, C, D],
                [D, D, D, D, D, D, C, C, C, C, C, D],
                [D, D, D, D, D, D, C, C, C, C, C, D],
                [D, D, D, D, D, D, C, C, C, C, C, D],
                [D, D, D, D, D, D, C]
            ],
            zIndices: [
                [k, k, k, k, k, k, k, g, g, g, k],
                [k, k, k, k, k, k, g, g, g, g, k],
                [k, k, k, k, k, k, g, g, g, g, g, k],
                [k, k, k, k, k, k, g, g, g, g, g, k],
                [k, k, k, k, k, k, g, g, g, g, g, k],
                [k, k, k, k, k, k, g]
            ]
        },
        floor: {
            hslaColours: [
                [G, G, G, G, G, G, G, W, W, W, G],
                [G, G, G, G, G, G, W, R, R, W, G],
                [G, G, G, G, G, G, F, R, R, R, W, G],
                [G, G, G, G, G, G, F, R, R, R, W, G],
                [G, G, G, G, G, G, F, R, R, R, W, G],
                [G, G, G, G, G, G, F, F, R, F, F, W]
            ],
            zIndices: [
                [0, 0, 0, 0, 0, 0, 0, g, g, g, 0],
                [0, 0, 0, 0, 0, 0, g, 6, 6, g, 0],
                [0, 0, 0, 0, 0, 0, 1, 6, 6, 6, g, 0],
                [0, 0, 0, 0, 0, 0, 1, 6, 6, 6, g, 0],
                [0, 0, 0, 0, 0, 0, 1, 6, 6, 6, g, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 6, 1, 1, g]
            ]
        }
    },
    BEDROOM_SPACE_CUBES = {
        slantDirection: LEFT,
        ceiling: {
            hslaColours: [
                [D, D, D, D, D, C, D],
                [D, D, D, W, W, C, D],
                [D, D, W, W, C, C, D],
                [C, W, C, C, C, C, D],
                [C, C, C, C, C, C, D]
            ],
            zIndices: [
                [k, k, k, k, k, g, k],
                [k, k, k, d, d, g, k],
                [k, k, d, d, g, g, k],
                [g, d, g, g, g, g, k],
                [g, g, g, g, g, g, k]
            ],
        },
        floor: {
            hslaColours: [
                [G, G, G, G, G, W, G],
                [G, G, G, W, W, F, G],
                [G, G, W, W, R, F, G],
                [W, W, R, R, F, F, G],
                [F, F, F, F, F, F, G],
                [W, F, F, F, S, F, G]
            ],
            zIndices: [
                [0, 0, 0, 0, 0, g, 0],
                [0, 0, 0, 6, 6, 1, 0],
                [0, 0, 6, 6, 5, 1, 0],
                [g, 6, 5, 5, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 0],
                [g, 1, 1, 1, 4, 1, 0]
            ]
        }
    },

    CUBES = {
        [BEDROOM_KEY]: BEDROOM_CUBES,
        [BEDROOM_STOOL_KEY]: BEDROOM_STOOL_CUBES,
        [BEDROOM_OPEN_KEY]: BEDROOM_OPEN_CUBES,
        [BEDROOM_DOGS_KEY]: BEDROOM_DOGS_CUBES,
        [BEDROOM_SPACE_KEY]: BEDROOM_SPACE_CUBES
    }

export default CUBES

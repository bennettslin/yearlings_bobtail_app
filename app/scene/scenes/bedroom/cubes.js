import {
    BEDROOM_KEY,
    BEDROOM_STOOL_KEY,
    BEDROOM_OPEN_KEY,
    BEDROOM_DOGS_KEY,
    BEDROOM_SPACE_KEY
} from '../../cubesKeys'

import {
    DEFAULT_HSLA,
    GROUND_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    FURNITURE_HSLA,
    UPHOLSTERY_HSLA,
    SEAT_HSLA
} from '../../hslaKeys'

import {
    d,
    g,
    k,
    LEFT
} from '../../zIndexKeys'

const
    D = DEFAULT_HSLA,
    G = GROUND_HSLA,
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,
    R = FURNITURE_HSLA,
    U = UPHOLSTERY_HSLA,
    S = SEAT_HSLA,

    DEFAULT_CEILING = {
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
        ceiling: DEFAULT_CEILING,
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
                [G, G, G, W, W, F, W, U, U, W, G],
                [G, G, W, W, R, F, F, U, U, U, W, G],
                [W, W, R, R, F, F, F, U, U, U, W, G],
                [F, F, F, F, F, F, F, U, U, U, W, G],
                [W, F, F, F, F, F, F, F, U, F, F, W]
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
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [G, G, G, G, G, W, G, W, W, W, G],
                [G, G, G, W, W, F, W, U, U, W, G],
                [G, G, W, W, R, F, F, U, U, U, W, G],
                [W, W, R, R, F, S, F, U, U, U, W, G],
                [F, F, F, F, F, F, F, U, U, U, W, G],
                [W, F, F, F, F, F, F, F, U, F, F, W]
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
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [G, G, G, G, G, W, G, W, W, W, G],
                [G, G, G, W, W, F, W, F, F, W, G],
                [G, G, W, W, R, F, F, F, F, F, W, G],
                [W, W, R, R, F, F, F, F, F, F, W, G],
                [F, F, F, F, F, F, F, F, F, F, W, G],
                [W, F, F, F, F, F, F, F, F, F, F, W]
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
        floor: {
            hslaColours: [
                [G, G, G, G, G, G, G, W, W, W, G],
                [G, G, G, G, G, G, W, U, U, W, G],
                [G, G, G, G, G, G, F, U, U, U, W, G],
                [G, G, G, G, G, G, F, U, U, U, W, G],
                [G, G, G, G, G, G, F, U, U, U, W, G],
                [G, G, G, G, G, G, F, F, U, F, F, W]
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

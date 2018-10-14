import {
    BASEMENT_KEY,
    BASEMENT_BED_KEY,
    BASEMENT_MAGIC_KEY
} from '../../cubesKeys'

import {
    DEFAULT_HSLA,
    GROUND_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    PLATFORM_HSLA,
    UPHOLSTERY_HSLA,
    SEAT_HSLA
} from '../../hslaKeys'

import {
    c,
    f,
    k
} from '../../cubesConstants'

const
    D = DEFAULT_HSLA,
    G = GROUND_HSLA,
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,
    P = PLATFORM_HSLA,
    U = UPHOLSTERY_HSLA,
    S = SEAT_HSLA,

    DEFAULT_CEILING = {
        hslaColours: [
            [D],
            [C, W, W, C],
            [C]
        ],
        zIndices: [
            [k],
            [f, c, c, f],
            [f]
        ]
    },

    BASEMENT_CUBES = {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [G],
                [W, G, G, W],
                [W, P, P, P, P, P, P, P, P, P, P, W],
                [W, P, P, F, F, S, F, F, S, F, F, W],
                [W, P, P, F, S, F, F, F, F, F, F, W],
                [W, P, P, F, F, F, F, F, F, S, F, W]
            ],
            zIndices: [
                [4],
                [f, 4, 4, f],
                [f, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, f],
                [f, 3, 3, 0, 0, 2, 0, 0, 2, 0, 0, f],
                [f, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, f],
                [f, 1, 1, 0, 0, 0, 0, 0, 0, 2, 0, f]
            ]
        }
    },
    BASEMENT_BED_CUBES = {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [G],
                [W, G, G, W],
                [W, P, P, P, P, P, P, P, P, P, P, W],
                [W, P, P, F, F, U, U, U, U, U, U, W],
                [W, P, P, F, F, U, U, U, U, U, U, W],
                [W, P, P, F, F, U, U, U, U, U, U, W]
            ],
            zIndices: [
                [4],
                [f, 4, 4, f],
                [f, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, f],
                [f, 3, 3, 0, 0, 3, 3, 3, 3, 3, 4, f],
                [f, 2, 2, 0, 0, 3, 3, 3, 3, 3, 4, f],
                [f, 1, 1, 0, 0, 3, 3, 3, 3, 3, 4, f]
            ]
        }
    },
    BASEMENT_MAGIC_CUBES = {
        floor: {
            hslaColours: [
                [G],
                [G],
                [G, P, P, P, P, P, P, P, P, P, P, G],
                [G, P, P, F, F, U, U, U, U, U, U, G],
                [G, P, P, F, F, U, U, U, U, U, U, G],
                [G, P, P, F, F, U, U, U, U, U, U, G]
            ],
            zIndices: [
                [0],
                [0],
                [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0],
                [0, 3, 3, 0, 0, 3, 3, 3, 3, 3, 4, 0],
                [0, 2, 2, 0, 0, 3, 3, 3, 3, 3, 4, 0],
                [0, 1, 1, 0, 0, 3, 3, 3, 3, 3, 4, 0]
            ]
        }
    },

    CUBES = {
        [BASEMENT_KEY]: BASEMENT_CUBES,
        [BASEMENT_BED_KEY]: BASEMENT_BED_CUBES,
        [BASEMENT_MAGIC_KEY]: BASEMENT_MAGIC_CUBES
    }

export default CUBES

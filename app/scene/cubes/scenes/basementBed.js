import {
    BASEMENT_BED_KEY,
    BASEMENT_MAGIC_KEY
} from '../../scenes/keys'

import {
    DEFAULT_HSLA,
    GROUND_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    DOOR_HSLA,
    PLATFORM_HSLA,
    FURNITURE_HSLA,
    UPHOLSTERY_HSLA
} from '../keys/hsla'

import {
    c,
    f,
    k
} from '../keys/zIndex'

const
    D = DEFAULT_HSLA,
    G = GROUND_HSLA,
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,
    E = DOOR_HSLA,
    P = PLATFORM_HSLA,
    R = FURNITURE_HSLA,
    U = UPHOLSTERY_HSLA,

    ceiling = {
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

    BASEMENT_BED_CUBES = {
        ceiling,
        floor: {
            hslaColours: [
                [G],
                [W, E, E, W],
                [W, P, P, P, P, P, P, P, P, P, P, W],
                [W, P, P, R, R, U, U, U, U, U, U, W],
                [W, P, P, F, F, U, U, U, U, U, U, W],
                [W, P, P, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [4],
                [f, c, c, f],
                [f, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, f],
                [f, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, f],
                [f, 2, 2, 0, 0, 3, 3, 3, 3, 3, 3, f],
                [f, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, f]
            ]
        }
    },
    BASEMENT_MAGIC_CUBES = {
        floor: {
            hslaColours: [
                [G],
                [G],
                [G, P, P, P, P, P, P, P, P, P, P, G],
                [G, P, P, R, R, U, U, U, U, U, U, G],
                [G, P, P, F, F, U, U, U, U, U, U, G],
                [G, P, P, F, F, F, F, F, F, F, F, G]
            ],
            zIndices: [
                [0],
                [0],
                [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0],
                [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],
                [0, 2, 2, 0, 0, 3, 3, 3, 3, 3, 3, 0],
                [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ]
        }
    },

    CUBES = {
        [BASEMENT_BED_KEY]: BASEMENT_BED_CUBES,
        [BASEMENT_MAGIC_KEY]: BASEMENT_MAGIC_CUBES
    }

export default CUBES

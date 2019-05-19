import { BASEMENT_KEY } from '../../scenes/keys'

import {
    DEFAULT_HSLA,
    GROUND_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    PLATFORM_HSLA,
    SEAT_HSLA
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
    P = PLATFORM_HSLA,
    S = SEAT_HSLA,

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

    BASEMENT_CUBES = {
        ceiling,
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

    CUBES = {
        [BASEMENT_KEY]: BASEMENT_CUBES
    }

export default CUBES

import { BASEMENT_KEY } from 'constants/scene/scenes'

import {
    DEFAULT_HSLA,
    GROUND_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    PLATFORM_HSLA,
    SEAT_HSLA
} from '../../cubes/keys/hsla'

import {
    a,
    c,
    k
} from '../../cubes/keys/zIndex'

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
            [C, C, W, W, C],
            [C]
        ],
        zIndices: [
            [k],
            [c, c, a, a, c],
            [c]
        ]
    },

    BASEMENT_CUBES = {
        ceiling,
        floor: {
            hslaColours: [
                [G],
                [W, W, G, G, W],
                [W, F, P, P, F, F, F, F, F, F, F, W],
                [W, F, P, P, F, F, F, F, S, F, F, W],
                [W, F, P, P, F, S, F, F, F, F, F, W],
                [W, F, F, F, S, F, F, F, F, S, F, W]
            ],
            zIndices: [
                [2],
                [c, c, 2, 2, c],
                [c, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, c],
                [c, 0, 1, 1, 0, 0, 0, 0, 2, 0, 0, c],
                [c, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, c],
                [c, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, c]
            ]
        }
    },

    CUBES = {
        [BASEMENT_KEY]: BASEMENT_CUBES
    }

export default CUBES

import { BASEMENT_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR,
    GROUND_COLOUR,
    CEILING_COLOUR,
    FLOOR_COLOUR,
    WALL_COLOUR,
    PLATFORM_COLOUR,
    SEAT_COLOUR
} from '../../cubes/colours'

import {
    a,
    c,
    k
} from '../../cubes/zIndices'

const
    D = DEFAULT_COLOUR,
    G = GROUND_COLOUR,
    C = CEILING_COLOUR,
    F = FLOOR_COLOUR,
    W = WALL_COLOUR,
    P = PLATFORM_COLOUR,
    S = SEAT_COLOUR,

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

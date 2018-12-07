import { PORCH_KEY } from '../../cubesKeys'

import {
    DEFAULT_HSLA,
    LAWN_HSLA,
    CEILING_HSLA,
    PLATFORM_HSLA,
    WALL_HSLA,
    DOOR_HSLA
} from '../../hslaKeys'

import {
    e,
    f,
    k
} from '../../zIndexKeys'

const
    D = DEFAULT_HSLA,
    L = LAWN_HSLA,
    C = CEILING_HSLA,
    W = WALL_HSLA,
    E = DOOR_HSLA,
    P = PLATFORM_HSLA,

    PORCH_CUBES = {
        ceiling: {
            hslaColours: [
                [C, C, C, C, C, W, W, W, C],
                [C],
                [D, D, C, C, C, C, C, C, C, C, C, D]
            ],
            zIndices: [
                [f, f, f, f, f, e, e, e, f],
                [f],
                [k, k, f, f, f, f, f, f, f, f, f, k]
            ]
        },
        floor: {
            hslaColours: [
                [W, W, W, W, W, E, E, E, W],
                [L, L, L, P, P, P, P, P, P, P, L],
                [L, L, L, P, P, P, P, P, P, P, L],
                [L, L, L, P, P, P, P, P, P, P, L],
                [L, L, L, W, P, P, P, P, P, W, L],
                [L]
            ],
            zIndices: [
                [f, f, f, f, f, e, e, e, f, f],
                [1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, 1, f, 2, 2, 2, 2, 2, f, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [PORCH_KEY]: PORCH_CUBES
    }

export default CUBES

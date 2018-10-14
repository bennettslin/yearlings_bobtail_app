import { PORCH_KEY } from '../../cubesKeys'

import {
    DEFAULT_HSLA,
    LAWN_HSLA,
    CEILING_HSLA,
    PLATFORM_HSLA,
    WALL_HSLA
} from '../../hslaKeys'

import {
    e,
    f,
    k
} from '../../cubesConstants'

const
    D = DEFAULT_HSLA,
    L = LAWN_HSLA,
    C = CEILING_HSLA,
    W = WALL_HSLA,
    P = PLATFORM_HSLA,

    PORCH_CUBES = {
        ceiling: {
            hslaColours: [
                [C, C, C, C, C, W, W, C],
                [C],
                [D, C, C, C, C, C, C, C, C, C, C, D]
            ],
            zIndices: [
                [f, f, f, f, f, e, e, f],
                [f],
                [k, f, f, f, f, f, f, f, f, f, f, k]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [L, L, P, P, P, P, P, P, P, P, L],
                [L, L, P, P, P, P, P, P, P, P, L],
                [L, L, P, P, P, P, P, P, P, P, L],
                [L, L, W, P, P, P, P, P, P, W, L],
                [L]
            ],
            zIndices: [
                [f, f, f, f, f, 3, 3, f, f, f],
                [1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, f, 2, 2, 2, 2, 2, 2, f, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [PORCH_KEY]: PORCH_CUBES
    }

export default CUBES

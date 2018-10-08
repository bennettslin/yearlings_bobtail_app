import { VAN_NUYS_QUAD_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA,
    LAWN_HSLA,
    CEILING_HSLA,
    WALL_HSLA,
    PLATFORM_HSLA
} from '../../hslaKeys'

import {
    f,
    k
} from 'scene/cubesConstants'

const
    D = DEFAULT_HSLA,
    L = LAWN_HSLA,
    C = CEILING_HSLA,
    W = WALL_HSLA,
    P = PLATFORM_HSLA,

    VAN_NUYS_QUAD_CUBES = {
        ceiling: {
            hslaColours: [
                [D, D, C],
                [D, D, C],
                [D, D, C],
                [D]
            ],
            zIndices: [
                [k, k, f],
                [k, k, f],
                [k, k, f],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [L, L, P, P, P, P, P, P, P, P, P, P],
                [L, L, P, P, P, W, W, W, W, W, W, P],
                [L, L, P, P, P, P, P, P, P, P, P, P],
                [L]
            ],
            zIndices: [
                [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [1, 1, 2, 2, 2, f, f, f, f, f, f, 2],
                [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [1]
            ]
        }
    },

    CUBES = {
        [VAN_NUYS_QUAD_KEY]: VAN_NUYS_QUAD_CUBES
    }

export default CUBES

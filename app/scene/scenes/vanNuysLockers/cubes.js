import { VAN_NUYS_LOCKERS_KEY } from '../../cubesKeys'

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
} from '../../cubesConstants'

const
    D = DEFAULT_HSLA,
    L = LAWN_HSLA,
    C = CEILING_HSLA,
    W = WALL_HSLA,
    P = PLATFORM_HSLA,

    VAN_NUYS_LOCKERS_CUBES = {
        ceiling: {
            hslaColours: [
                [D],
                [D],
                [C, C, C, C, C, C, C, C, C, C, D],
                [C, C, C, C, C, C, C, C, C, C, D],
                [C, C, C, C, C, C, C, C, C, C, D],
                [C, C, C, C, C, C, C, C, C, C, D]
            ],
            zIndices: [
                [k],
                [k],
                [f, f, f, f, f, f, f, f, f, f, k],
                [f, f, f, f, f, f, f, f, f, f, k],
                [f, f, f, f, f, f, f, f, f, f, k],
                [f, f, f, f, f, f, f, f, f, f, k]
            ]
        },
        floor: {
            hslaColours: [
                [L],
                [L],
                [P, P, P, P, P, P, P, P, P, P, L],
                [P, W, W, W, W, W, W, P, P, P, L],
                [P, P, P, P, P, P, P, P, P, P, L]
            ],
            zIndices: [
                [1],
                [1],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                [2, f, f, f, f, f, f, 2, 2, 2, 1],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1]
            ]
        }
    },

    CUBES = {
        [VAN_NUYS_LOCKERS_KEY]: VAN_NUYS_LOCKERS_CUBES
    }

export default CUBES

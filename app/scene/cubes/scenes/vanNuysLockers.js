import { VAN_NUYS_LOCKERS_KEY } from '../../cubesKeys'

import {
    DEFAULT_HSLA,
    GROUND_HSLA,
    PAVEMENT_HSLA,
    CEILING_HSLA,
    WALL_HSLA,
    PLATFORM_HSLA
} from '../../hslaKeys'

import {
    f,
    k
} from '../../zIndexKeys'

const
    D = DEFAULT_HSLA,
    G = GROUND_HSLA,
    V = PAVEMENT_HSLA,
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
                [D]
            ],
            zIndices: [
                [k],
                [k],
                [f, f, f, f, f, f, f, f, f, f, k],
                [f, f, f, f, f, f, f, f, f, f, k],
                [f, f, f, f, f, f, f, f, f, f, k],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [G],
                [V],
                [P, W, W, W, W, W, W, P, P, P, V],
                [P, P, P, P, P, P, P, P, P, P, V],
                [P, P, P, P, P, P, P, P, P, P, V],
                [V]
            ],
            zIndices: [
                [0],
                [1],
                [2, f, f, f, f, f, f, 2, 2, 2, 1],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [VAN_NUYS_LOCKERS_KEY]: VAN_NUYS_LOCKERS_CUBES
    }

export default CUBES

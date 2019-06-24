import { VAN_NUYS_QUAD_KEY } from 'constants/scene/scenes'

import {
    DEFAULT_HSLA,
    GROUND_HSLA,
    PAVEMENT_HSLA,
    CEILING_HSLA,
    WALL_HSLA,
    PLATFORM_HSLA
} from '../../cubes/keys/hsla'

import {
    f,
    k
} from '../../cubes/keys/zIndex'

const
    D = DEFAULT_HSLA,
    G = GROUND_HSLA,
    V = PAVEMENT_HSLA,
    C = CEILING_HSLA,
    W = WALL_HSLA,
    P = PLATFORM_HSLA,

    VAN_NUYS_QUAD_CUBES = {
        ceiling: {
            hslaColours: [
                [D, D, C],
                [D, D, C],
                [D, D, C],
                [D, D, C],
                [D]
            ],
            zIndices: [
                [k, k, f],
                [k, k, f],
                [k, k, f],
                [k, k, f],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [G],
                [V, V, P, P, P, P, P, P, P, P, P, P],
                [V, V, P, P, P, W, W, W, W, W, W, P],
                [V, V, P, P, P, P, P, P, P, P, P, P],
                [V]
            ],
            zIndices: [
                [0],
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

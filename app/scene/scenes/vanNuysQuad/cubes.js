import { VAN_NUYS_QUAD_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR,
    GROUND_COLOUR,
    PAVEMENT_COLOUR,
    CEILING_COLOUR,
    WALL_COLOUR,
    PLATFORM_COLOUR
} from '../../cubes/colours'

import {
    f,
    k
} from '../../cubes/zIndices'

const
    D = DEFAULT_COLOUR,
    G = GROUND_COLOUR,
    V = PAVEMENT_COLOUR,
    C = CEILING_COLOUR,
    W = WALL_COLOUR,
    P = PLATFORM_COLOUR,

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

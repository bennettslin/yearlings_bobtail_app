import { VAN_NUYS_LOCKERS_KEY } from '../../../constants/scene/scenes'

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

import { BERKELEY_CAMPANILE_KEY } from 'constants/scene/scenes'

import {
    DEFAULT_HSLA,
    GROUND_HSLA,
    PAVEMENT_HSLA,
    GATE_HSLA,
    WALL_HSLA,
    PLATFORM_HSLA
} from '../../cubes/keys/hsla'

import {
    g,
    k
} from '../../cubes/keys/zIndex'

const
    D = DEFAULT_HSLA,
    G = GROUND_HSLA,
    V = PAVEMENT_HSLA,
    A = GATE_HSLA,
    W = WALL_HSLA,
    P = PLATFORM_HSLA,

    CAMPANILE_CUBES = {
        ceiling: {
            hslaColours: [
                [D],
                [D],
                [W, W, W, D],
                [D]
            ],
            zIndices: [
                [k],
                [k],
                [g, g, g, k],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [G],
                [V],
                [W, W, W, A, V],
                [P, A, A, A, V],
                [P, V],
                [V]
            ],
            zIndices: [
                [0],
                [1],
                [g, g, g, 9, 1],
                [3, 9, 9, 9, 1],
                [2, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [BERKELEY_CAMPANILE_KEY]: CAMPANILE_CUBES
    }

export default CUBES

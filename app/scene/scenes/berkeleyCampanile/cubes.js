import { BERKELEY_CAMPANILE_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR,
    GROUND_COLOUR,
    PAVEMENT_COLOUR,
    GATE_COLOUR,
    WALL_COLOUR,
    PLATFORM_COLOUR
} from '../../cubes/keys/hsla'

import {
    g,
    k
} from '../../cubes/keys/zIndex'

const
    D = DEFAULT_COLOUR,
    G = GROUND_COLOUR,
    V = PAVEMENT_COLOUR,
    A = GATE_COLOUR,
    W = WALL_COLOUR,
    P = PLATFORM_COLOUR,

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

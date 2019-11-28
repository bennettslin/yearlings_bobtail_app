import { BERKELEY_BANCROFT_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR,
    GROUND_COLOUR,
    PAVEMENT_COLOUR,
    GATE_COLOUR,
    WALL_COLOUR,
    DOOR_COLOUR,
    PLATFORM_COLOUR
} from '../../cubes/colours'

import {
    f,
    g,
    k
} from '../../cubes/zIndices'

const
    D = DEFAULT_COLOUR,
    G = GROUND_COLOUR,
    V = PAVEMENT_COLOUR,
    A = GATE_COLOUR,
    W = WALL_COLOUR,
    E = DOOR_COLOUR,
    P = PLATFORM_COLOUR,

    BANCROFT_LIBRARY_CUBES = {
        ceiling: {
            hslaColours: [
                [D],
                [D],
                [D, D, D, D, D, W],
                [D]
            ],
            zIndices: [
                [k],
                [k],
                [k, k, k, k, k, g, g, g, f, f, f, g],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [G],
                [V],
                [V, V, V, V, A, W, W, W, E, E, E, W],
                [V, V, V, V, A, A, A, P, P, P, P, P],
                [V, V, V, V, V, V, V, P, P, P, P, P],
                [V]
            ],
            zIndices: [
                [0],
                [1],
                [1, 1, 1, 1, 9, g, g, g, f, f, f, g],
                [1, 1, 1, 1, 9, 9, 9, 3, 3, 3, 3, 3],
                [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
                [1]
            ]
        }
    },

    CUBES = {
        [BERKELEY_BANCROFT_KEY]: BANCROFT_LIBRARY_CUBES
    }

export default CUBES

import { PORCH_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR,
    LAWN_COLOUR,
    CEILING_COLOUR,
    PLATFORM_COLOUR,
    WALL_COLOUR,
    DOOR_COLOUR
} from '../../cubes/colours'

import {
    e,
    f,
    k
} from '../../cubes/zIndices'

const
    D = DEFAULT_COLOUR,
    L = LAWN_COLOUR,
    C = CEILING_COLOUR,
    W = WALL_COLOUR,
    E = DOOR_COLOUR,
    P = PLATFORM_COLOUR,

    PORCH_CUBES = {
        ceiling: {
            hslaColours: [
                [C, C, C, C, C, W, W, W, C],
                [C],
                [D, D, C, C, C, C, C, C, C, C, C, D]
            ],
            zIndices: [
                [f, f, f, f, f, e, e, e, f],
                [f],
                [k, k, f, f, f, f, f, f, f, f, f, k]
            ]
        },
        floor: {
            hslaColours: [
                [W, W, W, W, W, E, E, E, W],
                [L, L, L, P, P, P, P, P, P, P, L],
                [L, L, L, P, P, P, P, P, P, P, L],
                [L, L, L, P, P, P, P, P, P, P, L],
                [L, L, L, W, P, P, P, P, P, W, L],
                [L]
            ],
            zIndices: [
                [f, f, f, f, f, e, e, e, f, f],
                [1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, 1, f, 2, 2, 2, 2, 2, f, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [PORCH_KEY]: PORCH_CUBES
    }

export default CUBES

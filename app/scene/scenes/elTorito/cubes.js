import { EL_TORITO_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR,
    PAVEMENT_COLOUR,
    CEILING_COLOUR,
    FLOOR_COLOUR,
    WALL_COLOUR,
    DOOR_COLOUR,
    PLATFORM_COLOUR
} from '../../cubes/keys/hsla'

import {
    e,
    f,
    g,
    k
} from '../../cubes/keys/zIndex'

const
    D = DEFAULT_COLOUR,
    V = PAVEMENT_COLOUR,
    C = CEILING_COLOUR,
    F = FLOOR_COLOUR,
    W = WALL_COLOUR,
    E = DOOR_COLOUR,
    P = PLATFORM_COLOUR,

    EL_TORITO_CUBES = {
        ceiling: {
            hslaColours: [
                [C],
                [C],
                [C, C, C, W, W, W, W, W, W, C],
                [C],
                [C],
                [D]
            ],
            zIndices: [
                [g],
                [g],
                [f, f, f, e, e, e, e, e, e, f],
                [f],
                [f],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [F],
                [W, W, W, E, E, E, F, F, F, W],
                [V, V, V, P, P, P, P, P, P, V],
                [V, W, V, V, V, V, V, V, V, V, W, V],
                [V]
            ],
            zIndices: [
                [g],
                [2],
                [f, f, f, e, e, e, 2, 2, 2, f],
                [1, 1, 1, 2, 2, 2, 2, 2, 2, 1],
                [1, f, 1, 1, 1, 1, 1, 1, 1, 1, f, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [EL_TORITO_KEY]: EL_TORITO_CUBES
    }

export default CUBES

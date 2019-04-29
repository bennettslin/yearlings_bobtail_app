import { EL_TORITO_KEY } from '../../cubesKeys'

import {
    DEFAULT_HSLA,
    PAVEMENT_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    DOOR_HSLA,
    PLATFORM_HSLA
} from '../../hslaKeys'

import {
    e,
    f,
    g,
    k
} from '../../zIndexKeys'

const
    D = DEFAULT_HSLA,
    V = PAVEMENT_HSLA,
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,
    E = DOOR_HSLA,
    P = PLATFORM_HSLA,

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

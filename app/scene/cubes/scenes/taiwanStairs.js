import { TAIWAN_STAIRS_KEY } from '../../keys/cubes'

import {
    DEFAULT_HSLA,
    PAVEMENT_HSLA,
    GATE_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    DOOR_HSLA,
    PLATFORM_HSLA
} from '../../keys/hsla'

import {
    e,
    g,
    k
} from '../../keys/zIndex'

const
    D = DEFAULT_HSLA,
    V = PAVEMENT_HSLA,
    A = GATE_HSLA,
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,
    E = DOOR_HSLA,
    P = PLATFORM_HSLA,

    TAIWAN_STAIRS_CUBES = {
        ceiling: {
            hslaColours: [
                [D],
                [D],
                [D],
                [W],
                [W, W, C, C, C, C, C, C, C, C, W]
            ],
            zIndices: [
                [k],
                [k],
                [k],
                [g, g, g, e, e, e, e, g],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [A],
                [A, A, A, E, E, E, A],
                [V],
                [W],
                [W, W, P, P, P, P, P, P, F, F, W]
            ],
            zIndices: [
                [0],
                [6, 6, 6, 6, 6, 6, 6],
                [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6],
                [g, g, g, 5, 5, 5, 5, g],
                [g, g, 0, 0, 1, 2, 3, 4, 5, 5, g],
                [g, g, 0, 0, 1, 2, 3, 4, 5, 5, g]
            ]
        }
    },

    CUBES = {
        [TAIWAN_STAIRS_KEY]: TAIWAN_STAIRS_CUBES
    }

export default CUBES

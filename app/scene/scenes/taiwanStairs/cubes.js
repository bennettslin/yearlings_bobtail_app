import { TAIWAN_STAIRS_KEY } from '../../cubesKeys'

import {
    DEFAULT_HSLA,
    PAVEMENT_HSLA,
    GATE_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    PLATFORM_HSLA
} from '../../hslaKeys'

import {
    e,
    g,
    k
} from '../../cubesConstants'

const
    D = DEFAULT_HSLA,
    V = PAVEMENT_HSLA,
    G = GATE_HSLA,
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,
    P = PLATFORM_HSLA,

    TAIWAN_STAIRS_CUBES = {
        ceiling: {
            hslaColours: [
                [D],
                [D],
                [C, C, C, C, C, W, W, W, C],
                [C],
                [C],
                [C, C, C, C, C, C, C, C, C, C]
            ],
            zIndices: [
                [k],
                [k],
                [g, g, g, g, g, e, e, e, g],
                [g],
                [g],
                [g, g, g, g, g, g, g, g, g, g]
            ]
        },
        floor: {
            hslaColours: [
                [G, G, G, G, V, V, V, G, G],
                [G, V],
                [W, W, W, W, W, W, W, W, W],
                [W, F, F, F, P, P, P, P, P, P, P, W],
                [W, F, F, F, F, F, F, F, F, W, W, W],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [6, 6, 6, 6, 1, 1, 1, 6, 6],
                [6, 1],
                [g, g, g, g, g, 5, 5, 5, g],
                [g, 5, 5, 5, 4, 3, 2, 1, 0, 0, 0, g],
                [g, 5, 5, 5, 5, 5, 5, 5, 5, g, g, g],
                [g, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, g]
            ]
        }
    },

    CUBES = {
        [TAIWAN_STAIRS_KEY]: TAIWAN_STAIRS_CUBES
    }

export default CUBES

import {
    LIZ_BED_KEY,
    LIZ_BED_OPEN_KEY
} from 'scene/cubesKeys'

import {
    DEFAULT_HSLA,
    GROUND_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    FURNITURE_HSLA,
    SEAT_HSLA
} from '../../hslaKeys'

import {
    e,
    g,
    k
} from 'scene/cubesConstants'

const
    D = DEFAULT_HSLA,
    G = GROUND_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,
    R = FURNITURE_HSLA,
    S = SEAT_HSLA,

    LIZ_BED_CUBES = {
        ceiling: {
            hslaColours: [
                [W],
                [W, W, R, S, S, S, S, S, W],
                [W]
            ],
            zIndices: [
                [g],
                [g, g, e, 4, 4, 4, 4, 4, g],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [W, F, F, F, F, F, F, F, F, F, F, W],
                [W, F, F, S, S, S, S, S, F, F, F, W],
                [W, F, F, S, S, S, S, S, F, F, F, W],
                [W, F, F, S, S, S, S, S, F, F, F, W],
                [W, F, R, S, S, S, S, S, F, F, F, W],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [g],
                [g, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, g],
                [g, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, g],
                [g, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, g],
                [g, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    LIZ_BED_OPEN_CUBES = {
        ceiling: {
            hslaColours: [
                [D, W, W, W, W, W, W, W, W, W, W, D],
                [D, D, R, S, S, S, S, S, D],
                [D]
            ],
            zIndices: [
                [k, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, k],
                [k, k, e, 4, 4, 4, 4, 4, k],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [G],
                [G, F, F, S, S, S, S, S, F, F, F, G],
                [G, F, F, S, S, S, S, S, F, F, F, G],
                [G, F, F, S, S, S, S, S, F, F, F, G],
                [G, F, R, S, S, S, S, S, F, F, F, G],
                [G, F, F, F, F, F, F, F, F, F, F, G]
            ],
            zIndices: [
                [0],
                [0, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 0],
                [0, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 0],
                [0, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 0],
                [0, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },

    CUBES = {
        [LIZ_BED_KEY]: LIZ_BED_CUBES,
        [LIZ_BED_OPEN_KEY]: LIZ_BED_OPEN_CUBES
    }

export default CUBES

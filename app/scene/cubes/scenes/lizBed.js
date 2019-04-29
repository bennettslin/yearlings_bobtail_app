import {
    LIZ_BED_KEY,
    LIZ_BED_OPEN_KEY,
    LIZ_BED_OPEN_PHONE_KEY
} from '../../cubesKeys'

import {
    DEFAULT_HSLA,
    GROUND_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    FURNITURE_HSLA,
    UPHOLSTERY_HSLA,
    SEAT_HSLA
} from '../../hslaKeys'

import {
    e,
    g,
    k
} from '../../zIndexKeys'

const
    D = DEFAULT_HSLA,
    G = GROUND_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,
    R = FURNITURE_HSLA,
    U = UPHOLSTERY_HSLA,
    S = SEAT_HSLA,

    LIZ_BED_CUBES = {
        ceiling: {
            hslaColours: [
                [W],
                [W, W, R, U, U, U, U, U, W],
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
                [W, F, F, U, U, U, U, U, F, F, F, W],
                [W, F, F, U, U, U, U, U, F, F, F, W],
                [W, F, F, U, U, U, U, U, F, F, F, W],
                [W, F, R, U, U, U, U, U, F, F, F, W],
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
                [D, F, F, F, F, F, F, F, F, F, F, D],
                [D, D, R, U, U, U, U, U, D],
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
                [G, F, F, U, U, U, U, U, F, F, F, G],
                [G, F, F, U, U, U, U, U, F, F, F, G],
                [G, F, F, U, U, U, U, U, F, F, F, G],
                [G, F, R, U, U, U, U, U, F, F, F, G],
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
    LIZ_BED_OPEN_PHONE_CUBES = {
        ceiling: {
            hslaColours: [
                [D, F, F, F, F, F, F, F, F, F, F, D],
                [D, D, R, U, U, U, U, U, D],
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
                [G, F, F, U, U, U, U, U, F, F, F, G],
                [G, F, F, U, U, U, U, U, F, F, F, G],
                [G, F, F, U, U, U, U, U, F, F, F, G],
                [G, F, R, U, U, U, U, U, F, S, F, G],
                [G, F, F, F, F, F, F, F, F, F, F, G]
            ],
            zIndices: [
                [0],
                [0, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 0],
                [0, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 0],
                [0, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 0],
                [0, 1, 3, 3, 3, 3, 3, 3, 1, 3, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },

    CUBES = {
        [LIZ_BED_KEY]: LIZ_BED_CUBES,
        [LIZ_BED_OPEN_KEY]: LIZ_BED_OPEN_CUBES,
        [LIZ_BED_OPEN_PHONE_KEY]: LIZ_BED_OPEN_PHONE_CUBES
    }

export default CUBES

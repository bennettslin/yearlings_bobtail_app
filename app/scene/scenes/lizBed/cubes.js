import {
    LIZ_BED_KEY,
    LIZ_BED_OPEN_KEY,
    LIZ_BED_OPEN_PHONE_KEY
} from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR,
    GROUND_COLOUR,
    FLOOR_COLOUR,
    WALL_COLOUR,
    FURNITURE_COLOUR,
    UPHOLSTERY_COLOUR,
    SEAT_COLOUR
} from '../../cubes/colours'

import {
    e,
    g,
    k
} from '../../cubes/zIndices'

const
    D = DEFAULT_COLOUR,
    G = GROUND_COLOUR,
    F = FLOOR_COLOUR,
    W = WALL_COLOUR,
    R = FURNITURE_COLOUR,
    U = UPHOLSTERY_COLOUR,
    S = SEAT_COLOUR,

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
                [g, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, g],
                [g, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, g],
                [g, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, g],
                [g, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, g],
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
                [0, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 0],
                [0, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 0],
                [0, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 0],
                [0, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 0],
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
                [G, F, R, U, U, U, U, U, F, F, S, G],
                [G, F, F, F, F, F, F, F, F, F, F, G]
            ],
            zIndices: [
                [0],
                [0, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 0],
                [0, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 0],
                [0, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 0],
                [0, 1, 4, 4, 4, 4, 4, 4, 1, 1, 3, 0],
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

import {
    BATHROOM_KEY,
    BATHROOM_OPEN_KEY
} from 'scene/cubesKeys'

import {
    DEFAULT_HSLA,
    GROUND_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
} from '../../hslaKeys'

import {
    f
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    // Ground.
    G = GROUND_HSLA,

    // Ceiling.
    C = CEILING_HSLA,

    // Floor.
    F = FLOOR_HSLA,

    // Wall.
    W = WALL_HSLA,

    BATHROOM = {
        ceiling: {
            hslaColours: [
                [W, W, C, C, C, C, C, C, C, C, W, W]
            ],
            zIndices: [
                [f]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, W, F, F, F, F, F, F, F, F, W, W],
                [W, W, F, D, D, D, D, F, F, F, W, W],
                [W, W, F, D, D, D, D, F, F, F, W, W],
                [W, W, F, F, F, F, F, F, F, F, W, W]
            ],
            zIndices: [
                [f, f, f, f, f, f, f, f, f, f, f],
                [f, f, 1, 1, 1, 1, 1, 1, 1, 1, f],
                [f, f, 1, 2, 2, 2, 2, 1, 1, 1, f],
                [f, f, 1, 2, 2, 2, 2, 1, 1, 1, f],
                [f, f, 1, 1, 1, 1, 1, 1, 1, 1, f]
            ]
        }
    },

    BATHROOM_OPEN = {
        floor: {
            hslaColours: [
                [G],
                [G, G, F, F, F, F, F, F, F, F, G, G],
                [G, G, F, D, D, D, D, F, F, F, G, G],
                [G, G, F, D, D, D, D, F, F, F, G, G],
                [G, G, F, F, F, F, F, F, F, F, G, G]
            ],
            zIndices: [
                [0],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 1, 2, 2, 2, 2, 1, 1, 1, 0],
                [0, 0, 1, 2, 2, 2, 2, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },

    CUBES = {
        [BATHROOM_KEY]: BATHROOM,
        [BATHROOM_OPEN_KEY]: BATHROOM_OPEN
    }

export default CUBES

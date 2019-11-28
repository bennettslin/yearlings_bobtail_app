import {
    BATHROOM_KEY,
    BATHROOM_OPEN_KEY
} from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR,
    CEILING_COLOUR,
    FLOOR_COLOUR,
    WALL_COLOUR,
    FURNITURE_COLOUR
} from '../../cubes/colours'

import {
    f
} from '../../cubes/zIndices'

const
    G = GROUND_COLOUR,
    C = CEILING_COLOUR,
    F = FLOOR_COLOUR,
    W = WALL_COLOUR,
    R = FURNITURE_COLOUR,

    BATHROOM = {
        ceiling: {
            hslaColours: [
                [C]
            ],
            zIndices: [
                [f]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, W, F, F, F, F, F, F, F, F, W, W],
                [W, W, F, R, R, R, R, F, F, F, W, W],
                [W, W, F, R, R, R, R, F, F, F, W, W],
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
                [G, G, F, R, R, R, R, F, F, F, G, G],
                [G, G, F, R, R, R, R, F, F, F, G, G],
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

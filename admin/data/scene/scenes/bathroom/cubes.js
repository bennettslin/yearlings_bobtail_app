import {
    BATHROOM_KEY,
    BATHROOM_OPEN_KEY
} from '../../../../../app/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    LINOLEUM_FLOOR_COLOUR as F,
    SOFT_WALL_COLOUR as W
} from '../../../../../app/constants/scene/cubes/colours'

import { f, k } from '../../../../../app/constants/scene/cubes/zIndices'

export default {
    [BATHROOM_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [W]
            ],
            zIndices: [
                [k],
                [1],
                [1, f, f, f, f, f, f, f, f, f, f, 1]
            ]
        },
        floor: {
            hslaColours: [
                [G],
                [F],
                [F],
                [F, F, F, D, D, D, D, F],
                [F],
                [F]
            ],
            zIndices: [
                [0],
                [1],
                [1],
                [1, 1, 1, 2, 2, 2, 2, 1],
                [1]
            ]
        }
    },
    [BATHROOM_OPEN_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G],
                [G, F, F, F, F, F, F, F, F, F, F, G],
                [G, F, F, D, D, D, D, F, F, F, F, G],
                [G, F, F, F, F, F, F, F, F, F, F, G]
            ],
            zIndices: [
                [0],
                [0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    }
}

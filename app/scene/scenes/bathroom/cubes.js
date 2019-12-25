import {
    BATHROOM_KEY,
    BATHROOM_OPEN_KEY
} from '../../../constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    LINOLEUM_FLOOR_COLOUR as F,
    LINOLEUM_FLOOR_DARK_COLOUR as L,
    SOFT_WALL_COLOUR as W
} from '../../cubes/colours'

import { f, k } from '../../cubes/zIndices'

const CUBES = {
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
                [L, F, L, F, L, F, L, F, L, F, L, F],
                [F, L, F, L, F, L, F, L, F, L, F, L],
                [L, F, L, D, D, D, D, F, L, F, L, F],
                [F, L, F, L, F, L, F, L, F, L, F, L],
                [L, F, L, F, L, F, L, F, L, F, L, F]
            ],
            zIndices: [
                [0],
                [1],
                [1],
                [1, 1, 1, 3, 3, 3, 3, 1, 1, 1, 1, 1],
                [1]
            ]
        }
    },
    [BATHROOM_OPEN_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G],
                [G, L, F, L, F, L, F, L, F, L, F, G],
                [G, F, L, D, D, D, D, F, L, F, L, G],
                [G, L, F, L, F, L, F, L, F, L, F, G],
                [G, F, L, F, L, F, L, F, L, F, L, G]
            ],
            zIndices: [
                [0],
                [0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 3, 3, 3, 3, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    }
}

export default CUBES

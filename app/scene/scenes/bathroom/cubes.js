import {
    BATHROOM_KEY,
    BATHROOM_OPEN_KEY
} from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR as G,
    CEILING_COLOUR as C,
    LINOLEUM_FLOOR_COLOUR as F,
    LINOLEUM_FLOOR_DARK_COLOUR as L,
    BATHROOM_WALL_COLOUR as W,
    FURNITURE_COLOUR as R
} from '../../cubes/colours'

import { f } from '../../cubes/zIndices'

const CUBES = {
    [BATHROOM_KEY]: {
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
                [W, F, L, F, L, F, L, F, L, F, L, W],
                [W, L, F, R, R, R, R, L, F, L, F, W],
                [W, F, L, R, R, R, R, F, L, F, L, W],
                [W, L, F, L, F, L, F, L, F, L, F, W],
                [W, F, L, F, L, F, L, F, L, F, L, W]
            ],
            zIndices: [
                [f, f, f, f, f, f, f, f, f, f, f],
                [f, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, f],
                [f, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, f],
                [f, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, f],
                [f, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, f]
            ]
        }
    },
    [BATHROOM_OPEN_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G, F, L, F, L, F, L, F, L, F, L, G],
                [G, L, F, R, R, R, R, L, F, L, F, G],
                [G, F, L, R, R, R, R, F, L, F, L, G],
                [G, L, F, L, F, L, F, L, F, L, F, G],
                [G, F, L, F, L, F, L, F, L, F, L, G]
            ],
            zIndices: [
                [0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 0],
                [0, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    }
}

export default CUBES

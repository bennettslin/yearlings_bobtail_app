import {
    BATHROOM_KEY,
    BATHROOM_OPEN_KEY
} from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    GROUND_COLOUR as G,
    CEILING_COLOUR as C,
    LINOLEUM_FLOOR_COLOUR as F,
    LINOLEUM_FLOOR_DARK_COLOUR as L,
    BATHROOM_WALL_COLOUR as W,
    FURNITURE_COLOUR as R
} from '../../cubes/colours'

import { f, k } from '../../cubes/zIndices'

const CUBES = {
    [BATHROOM_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [W],
                [W, C, C, C, C, C, C, C, C, C, C, W]
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
                [L, F, L, R, R, R, R, F, L, F, L, F],
                [F, L, F, L, F, L, F, L, F, L, F, L],
                [L, F, L, F, L, F, L, F, L, F, L, F]
            ],
            zIndices: [
                [0],
                [1],
                [1],
                [1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1],
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
                [G, F, L, R, R, R, R, F, L, F, L, G],
                [G, L, F, L, F, L, F, L, F, L, F, G],
                [G, F, L, F, L, F, L, F, L, F, L, G]
            ],
            zIndices: [
                [0],
                [0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    }
}

export default CUBES

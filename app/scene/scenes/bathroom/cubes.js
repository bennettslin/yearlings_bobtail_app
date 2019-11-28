import {
    BATHROOM_KEY,
    BATHROOM_OPEN_KEY
} from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR as G,
    CEILING_COLOUR as C,
    FLOOR_COLOUR as F,
    WALL_COLOUR as W,
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
    [BATHROOM_OPEN_KEY]: {
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
    }
}

export default CUBES

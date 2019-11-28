import {
    BATHROOM_KEY,
    BATHROOM_OPEN_KEY
} from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR as G,
    CEILING_COLOUR as C,
    BATHROOM_FLOOR_COLOUR as F,
    BATHROOM_FLOOR_DARK_COLOUR as Z,
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
                [W, F, Z, F, Z, F, Z, F, Z, F, Z, W],
                [W, Z, F, R, R, R, R, Z, F, Z, F, W],
                [W, F, Z, R, R, R, R, F, Z, F, Z, W],
                [W, Z, F, Z, F, Z, F, Z, F, Z, F, W],
                [W, F, Z, F, Z, F, Z, F, Z, F, Z, W]
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
                [G, F, Z, F, Z, F, Z, F, Z, F, Z, G],
                [G, Z, F, R, R, R, R, Z, F, Z, F, G],
                [G, F, Z, R, R, R, R, F, Z, F, Z, G],
                [G, Z, F, Z, F, Z, F, Z, F, Z, F, G],
                [G, F, Z, F, Z, F, Z, F, Z, F, Z, G]
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

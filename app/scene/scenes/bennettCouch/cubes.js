import {
    BENNETT_COUCH_KEY,
    BENNETT_COUCH_THOUGHT_KEY
} from '../../../constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    CEILING_COLOUR as C,
    BENNETT_FLOOR_COLOUR as F,
    BENNETT_FLOOR_DARK_COLOUR as L,
    BENNETT_WALL_COLOUR as W,
    FURNITURE_COLOUR as R,
    BENNETT_COUCH_COLOUR as U
} from '../../cubes/colours'

import { g } from '../../cubes/zIndices'

const CUBES = {
    [BENNETT_COUCH_KEY]: {
        ceiling: {
            hslaColours: [
                [W],
                [W, C, C, C, C, C, C, C, C, C, C, W]
            ],
            zIndices: [
                [1],
                [1, g, g, g, g, g, g, g, g, g, g, 1]
            ]
        },
        floor: {
            hslaColours: [
                [F],
                [F, R, U, U, U, U, U, U, R, R, F, F],
                [F, R, U, U, U, U, U, U, L, F, L, F],
                [F, L, U, U, U, U, U, U, F, L, F, F],
                [F, F, L, F, L, F, L, F, L, F, L, F],
                [F, L, F, L, F, L, F, L, F, L, F, F]
            ],
            zIndices: [
                [1],
                [1, 5, 7, 7, 7, 7, 7, 7, 4, 4, 1, 1],
                [1, 5, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1],
                [1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        }
    },
    [BENNETT_COUCH_THOUGHT_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G, R, U, U, U, U, U, U, R, R, F, G],
                [G, R, U, U, U, U, U, U, L, F, L, G],
                [G, L, U, U, U, U, U, U, F, L, F, G],
                [G, F, L, F, L, F, L, F, L, F, L, G],
                [G]
            ],
            zIndices: [
                [0],
                [0, 5, 7, 7, 7, 7, 7, 7, 4, 4, 1, 0],
                [0, 5, 4, 4, 4, 4, 4, 4, 1, 1, 1, 0],
                [0, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    }
}

export default CUBES

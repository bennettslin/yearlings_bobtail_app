import {
    BENNETT_COUCH_KEY,
    BENNETT_COUCH_THOUGHT_KEY
} from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR as G,
    CEILING_COLOUR as C,
    FLOOR_COLOUR as F,
    WALL_COLOUR as W,
    FURNITURE_COLOUR as R,
    UPHOLSTERY_COLOUR as U
} from '../../cubes/colours'

import { g } from '../../cubes/zIndices'

const CUBES = {
    [BENNETT_COUCH_KEY]: {
        ceiling: {
            hslaColours: [
                [C]
            ],
            zIndices: [
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, R, U, U, U, U, U, U, R, R, F, W],
                [W, R, U, U, U, U, U, U, F, F, F, W],
                [W, F, U, U, U, U, U, U, F, F, F, W],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [g],
                [g, 5, 7, 7, 7, 7, 7, 7, 4, 4, 1, g],
                [g, 5, 4, 4, 4, 4, 4, 4, 1, 1, 1, g],
                [g, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    [BENNETT_COUCH_THOUGHT_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G, R, U, U, U, U, U, U, R, R, F, G],
                [G, R, U, U, U, U, U, U, F, F, F, G],
                [G, F, U, U, U, U, U, U, F, F, F, G],
                [G, F, F, F, F, F, F, F, F, F, F, G],
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

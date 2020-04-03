import {
    BENNETT_COUCH_KEY,
    BENNETT_COUCH_KEYBOARD_KEY,
    BENNETT_COUCH_THOUGHT_KEY
} from '../../../constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    BENNETT_FLOOR_COLOUR as F,
    BENNETT_WALL_COLOUR as W,
    FURNITURE_COLOUR as R,
    BENNETT_COUCH_COLOUR as U
} from '../../cubes/colours'

import { g } from '../../cubes/zIndices'

export const DEFAULT_CEILING = {
    hslaColours: [
        [W]
    ],
    zIndices: [
        [1],
        [1, g, g, g, g, g, g, g, g, g, g, 1]
    ]
}

const CUBES = {
    [BENNETT_COUCH_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [F],
                [F, R, U, U, U, U, U, F, R, R, F],
                [F, R, U, U, U, U, U, F],
                [F, F, U, U, U, U, U, F],
                [F]
            ],
            zIndices: [
                [1],
                [1, 5, 7, 7, 7, 7, 7, 1, 4, 4, 1],
                [1, 5, 3, 3, 3, 3, 3, 1],
                [1, 1, 3, 3, 3, 3, 3, 1],
                [1]
            ]
        }
    },
    [BENNETT_COUCH_KEYBOARD_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [F],
                [F, R, U, U, U, U, U, F, R, R, F],
                [F, R, U, U, U, U, U, F],
                [F, F, U, U, U, U, U, F],
                [F, F, F, F, F, R, F, F, F, R, F],
                [F]
            ],
            zIndices: [
                [1],
                [1, 5, 7, 7, 7, 7, 7, 1, 4, 4, 1],
                [1, 5, 3, 3, 3, 3, 3, 1],
                [1, 1, 3, 3, 3, 3, 3, 1],
                [1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1],
                [1]
            ]
        }
    },
    [BENNETT_COUCH_THOUGHT_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G, R, U, U, U, U, U, F, R, R, F, G],
                [G, R, U, U, U, U, U, F, F, F, F, G],
                [G, F, U, U, U, U, U, F, F, F, F, G],
                [G, F, F, F, F, F, F, F, F, F, F, G]
            ],
            zIndices: [
                [0],
                [0, 5, 7, 7, 7, 7, 7, 1, 4, 4, 1, 0],
                [0, 5, 3, 3, 3, 3, 3, 1, 1, 1, 1, 0],
                [0, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    }
}

export default CUBES

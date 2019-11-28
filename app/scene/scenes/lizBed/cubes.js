import {
    LIZ_BED_KEY,
    LIZ_BED_OPEN_KEY,
    LIZ_BED_OPEN_PHONE_KEY
} from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    GROUND_COLOUR as G,
    FLOOR_COLOUR as F,
    WALL_COLOUR as W,
    FURNITURE_COLOUR as R,
    UPHOLSTERY_COLOUR as U,
    SEAT_COLOUR as S
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { e, g, k } from '../../cubes/zIndices'

const DEFAULT_CEILING = {
    hslaColours: [
        [D, F, F, F, F, F, F, F, F, F, F, D],
        [D, D, R, U, U, U, U, U, D],
        [D]
    ],
    zIndices: [
        [k, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, k],
        [k, k, e, 4, 4, 4, 4, 4, k],
        [k]
    ]
}

const CUBES = {
    [LIZ_BED_KEY]: {
        ceiling: {
            hslaColours: [
                [W],
                [W, W, R, U, U, U, U, U, W],
                [W]
            ],
            zIndices: [
                [g],
                [g, g, e, 4, 4, 4, 4, 4, g],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [W, F, F, F, F, F, F, F, F, F, F, W],
                [W, F, F, U, U, U, U, U, F, F, F, W],
                [W, F, F, U, U, U, U, U, F, F, F, W],
                [W, F, F, U, U, U, U, U, F, F, F, W],
                [W, F, R, U, U, U, U, U, F, F, F, W],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [g],
                [g, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, g],
                [g, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, g],
                [g, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, g],
                [g, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    [LIZ_BED_OPEN_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [G],
                [G, F, F, U, U, U, U, U, F, F, F, G],
                [G, F, F, U, U, U, U, U, F, F, F, G],
                [G, F, F, U, U, U, U, U, F, F, F, G],
                [G, F, R, U, U, U, U, U, F, F, F, G],
                [G, F, F, F, F, F, F, F, F, F, F, G]
            ],
            zIndices: [
                [0],
                [0, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 0],
                [0, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 0],
                [0, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 0],
                [0, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },
    [LIZ_BED_OPEN_PHONE_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [G],
                [G, F, F, U, U, U, U, U, F, F, F, G],
                [G, F, F, U, U, U, U, U, F, F, F, G],
                [G, F, F, U, U, U, U, U, F, F, F, G],
                [G, F, R, U, U, U, U, U, F, F, S, G],
                [G, F, F, F, F, F, F, F, F, F, F, G]
            ],
            zIndices: [
                [0],
                [0, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 0],
                [0, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 0],
                [0, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 0],
                [0, 1, 4, 4, 4, 4, 4, 4, 1, 1, 3, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    }
}

export default CUBES

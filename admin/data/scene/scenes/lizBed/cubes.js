import {
    LIZ_BED_KEY,
    LIZ_BED_OPEN_KEY,
    LIZ_BED_PHONE_KEY,
    LIZ_BED_DARK_KEY
} from '../../../../../app/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    LIZ_FLOOR_COLOUR as F,
    LIZ_WALL_COLOUR as W,
    NIGHT_COLOUR as Y,
    FURNITURE_COLOUR as R,
    LIZ_BED_COLOUR as U,
    SEAT_COLOUR as S
} from '../../../../../app/constants/scene/cubes/colours'

// eslint-disable-next-line object-curly-newline
import { e, g, k } from '../../../../../app/constants/scene/cubes/zIndices'

const DEFAULT_CEILING = {
    hslaColours: [
        [W, F, F, F, F, F, F, F, F, F, F, W],
        [W, W, R, U, U, U, U, U, W],
        [W]
    ],
    zIndices: [
        [1],
        [1, g, e, 4, 4, 4, 4, 4, g, g, g, 1],
        [1, g, g, g, g, g, g, g, g, g, g, 1]
    ]
}

const DEFAULT_FLOOR = {
    hslaColours: [
        [F],
        [F, F, F, U, U, U, U, U, F],
        [F, F, F, U, U, U, U, U, F],
        [F, F, F, U, U, U, U, U, F],
        [F, F, R, U, U, U, U, U, F],
        [F]
    ],
    zIndices: [
        [1],
        [1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1],
        [1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1],
        [1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1],
        [1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1],
        [1]
    ]
}

const OPEN_CEILING = {
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

export default {
    [LIZ_BED_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: DEFAULT_FLOOR
    },
    [LIZ_BED_OPEN_KEY]: {
        ceiling: OPEN_CEILING,
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
    [LIZ_BED_PHONE_KEY]: {
        ceiling: OPEN_CEILING,
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
    },
    [LIZ_BED_DARK_KEY]: {
        ceiling: {
            hslaColours: [
                [Y]
            ],
            zIndices: DEFAULT_CEILING.zIndices
        },
        floor: {
            hslaColours: [
                [Y]
            ],
            zIndices: DEFAULT_FLOOR.zIndices
        }
    }
}
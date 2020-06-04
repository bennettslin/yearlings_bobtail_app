import {
    BENNETT_BED_KEY,
    BENNETT_BED_DARK_KEY
} from '../../../constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    PAVEMENT_COLOUR as V,
    BENNETT_FLOOR_COLOUR as F,
    BENNETT_WALL_COLOUR as W,
    NIGHT_COLOUR as Y,
    APARTMENT_EXTERIOR_COLOUR as X,
    BENNETT_BED_COLOUR as U
} from '../../../constants/scene/cubes/colours'

// eslint-disable-next-line object-curly-newline
import { d, g, k } from '../../../constants/scene/cubes/zIndices'

const DEFAULT_CEILING = {
    hslaColours: [
        [X],
        [D, D, D, D, D, D, D, D, D, X],
        [W]
    ],
    zIndices: [
        [1],
        [k, k, k, k, k, k, k, k, k, k, 1],
        [1, 1, d, d, d, 1, d, d, d, d, 1],
        [1, g, g, g, g, g, g, g, g, g, g, 1]
    ]
}

const DEFAULT_FLOOR = {
    hslaColours: [
        [V],
        [V],
        [V, V, F, F, F, V, W, W, W, W, V],
        [F],
        [F, F, F, F, F, U, U, U, U, U, U, F],
        [F]
    ],
    zIndices: [
        [1],
        [1],
        [1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 1],
        [1],
        [1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1],
        [1]
    ]
}

/**
 * Blinds and door should match in courtyard.
 * Bed should match in basement.
 */
export default {
    [BENNETT_BED_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: DEFAULT_FLOOR
    },
    [BENNETT_BED_DARK_KEY]: {
        ceiling: {
            hslaColours: [
                [X],
                [D, D, D, D, D, D, D, D, D, X],
                [Y]
            ],
            zIndices: DEFAULT_CEILING.zIndices
        },
        floor: {
            hslaColours: [
                [V],
                [V],
                [V, V, Y, Y, Y, Y, Y, Y, Y, Y, V],
                [Y]
            ],
            zIndices: DEFAULT_FLOOR.zIndices
        }
    }
}

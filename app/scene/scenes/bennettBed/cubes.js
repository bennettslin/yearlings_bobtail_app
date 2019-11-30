import {
    BENNETT_BED_KEY,
    BENNETT_BED_DARK_KEY
} from '../../../constants/scene/scenes'

import {
    PAVEMENT_COLOUR as V,
    CEILING_COLOUR as C,
    BENNETT_FLOOR_COLOUR as F,
    BENNETT_FLOOR_DARK_COLOUR as L,
    DARK_FLOOR_COLOUR as Y,
    BENNETT_WALL_COLOUR as W,
    BENNETT_EXTERIOR_COLOUR as X,
    DARK_WALL_COLOUR as Z,
    BENNETT_BED_COLOUR as U
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { d, f, g } from '../../cubes/zIndices'

const DEFAULT_CEILING = {
    hslaColours: [
        [X],
        [C],
        [W],
        [W, C, C, C, C, C, C, C, C, C, C, W]
    ],
    zIndices: [
        [1],
        [f],
        [1, 1, d, d, d, 1, d, d, d, d, 1],
        [1, g, g, g, g, g, g, g, g, g, g, 1]
    ]
}

const DEFAULT_FLOOR = {
    hslaColours: [
        [V],
        [V],
        [F, F, F, F, F, F, W, W, W, W, F],
        [L, F, L, F, L, U, U, U, U, U, U, F],
        [F, L, F, L, F, U, U, U, U, U, U, L],
        [L, F, L, F, L, F, L, F, L, F, L, F]
    ],
    zIndices: [
        [1],
        [1],
        [1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 1],
        [1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1],
        [1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1],
        [1]
    ]
}

/**
 * Blinds and door should match in courtyard.
 * Bed should match in basement.
 */
const CUBES = {
    [BENNETT_BED_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: DEFAULT_FLOOR
    },
    [BENNETT_BED_DARK_KEY]: {
        ceiling: {
            hslaColours: [
                [X],
                [C],
                [Y]
            ],
            zIndices: DEFAULT_CEILING.zIndices
        },
        floor: {
            hslaColours: [
                [V],
                [V],
                [Y, Y, Y, Y, Y, Y, Z, Z, Z, Z, Y],
                [Y]
            ],
            zIndices: DEFAULT_FLOOR.zIndices
        }
    }
}

export default CUBES

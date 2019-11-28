import {
    BENNETT_BED_KEY,
    BENNETT_BED_OPEN_KEY
} from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    PAVEMENT_COLOUR as V,
    CEILING_COLOUR as C,
    FLOOR_COLOUR as F,
    WALL_COLOUR as W,
    DOOR_COLOUR as E,
    UPHOLSTERY_COLOUR as U
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { d, g, k } from '../../cubes/zIndices'

/**
 * Blinds and door should match in courtyard.
 * Bed should match in basement.
 */
const DEFAULT_CEILING = {
    hslaColours: [
        [C],
        [D],
        [C, C, W, W, W, C, W, W, W, W, C],
        [C]
    ],
    zIndices: [
        [g],
        [k],
        [g, g, d, d, d, g, d, d, d, d, g],
        [g]
    ]
}

const CUBES = {
    [BENNETT_BED_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [W],
                [V, V, V, V, V, V, V, V, V, V, V, W],
                [W, W, E, E, E, W],
                [W, F, F, F, F, U, U, U, U, U, U, W],
                [W, F, F, F, F, U, U, U, U, U, U, W],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [g],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [g, g, d, d, d, g, 6, 6, 6, 6, g],
                [g, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, g],
                [g, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    [BENNETT_BED_OPEN_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [W],
                [V, V, V, V, V, V, V, V, V, V, V, W],
                [W, W, F, F, F, W],
                [W, F, F, F, F, U, U, U, U, U, U, W],
                [W, F, F, F, F, U, U, U, U, U, U, W],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [g],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [g, g, 1, 1, 1, g, 6, 6, 6, 6, g],
                [g, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, g],
                [g, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    }
}

export default CUBES

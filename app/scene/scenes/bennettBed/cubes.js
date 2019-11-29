import { BENNETT_BED_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    PAVEMENT_COLOUR as V,
    CEILING_COLOUR as C,
    BENNETT_FLOOR_COLOUR as F,
    BENNETT_FLOOR_DARK_COLOUR as L,
    BENNETT_WALL_COLOUR as W,
    UPHOLSTERY_COLOUR as U
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { d, g, k } from '../../cubes/zIndices'

/**
 * Blinds and door should match in courtyard.
 * Bed should match in basement.
 */
const CUBES = {
    [BENNETT_BED_KEY]: {
        ceiling: {
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
        },
        floor: {
            hslaColours: [
                [W],
                [V, V, V, V, V, V, V, V, V, V, V, W],
                [W, W, F, L, F, W],
                [W, F, L, F, L, U, U, U, U, U, U, W],
                [W, L, F, L, F, U, U, U, U, U, U, W],
                [W, F, L, F, L, F, L, F, L, F, L, W]
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

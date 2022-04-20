import { COURTYARD_KEY } from '../../../../../src/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    PAVEMENT_COLOUR as V,
    ROOF_COLOUR as C,
    BENNETT_FLOOR_COLOUR as F,
    BENNETT_WALL_COLOUR as W,
    APARTMENT_EXTERIOR_COLOUR as X,
} from '../../../../../src/constants/scene/cubes/colours'

import { d, f, k } from '../../../../../src/constants/scene/cubes/zIndices'

/**
 * Blinds and door should match in bennettBed.
 * Gate should match in bennettGate.
 */
export default {
    [COURTYARD_KEY]: {
        ceiling: {
            hslaColours: [
                [W, W, W, W, W, W, W, W, W, W, X, C],
                [X, X, X, X, X, X, X, X, X, X, X, C],
                [X, C],
                [X, C, D],
                [X, C, D],
                [X, C, D],
            ],
            zIndices: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, f],
                [1, 1, d, d, d, d, 1, d, d, d, 1, f],
                [1, f, f],
                [d, f, k],
                [d, f, k],
                [1, f, k],
            ],
        },
        floor: {
            hslaColours: [
                [G],
                [V, F, X, X, X, X, F, F, F, F, F, V],
                [V],
                [V],
                [V],
                [V],
            ],
            zIndices: [
                [0],
                [1, 1, 5, 5, 5, 5, 1],
                [1],
                [1],
                [1],
                [1],
            ],
        },
    },
}

import { COURTYARD_KEY } from '../../../../../app/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    PAVEMENT_COLOUR as V,
    ROOF_COLOUR as C,
    BENNETT_FLOOR_COLOUR as F,
    BENNETT_WALL_COLOUR as W,
    APARTMENT_EXTERIOR_COLOUR as X
} from '../../../../../app/constants/scene/cubes/colours'

import { d, f, k } from '../../../../../app/constants/scene/cubes/zIndices'

/**
 * Blinds and door should match in bennettBed.
 * Gate should match in bennettGate.
 */
export default {
    [COURTYARD_KEY]: {
        ceiling: {
            hslaColours: [
                [W],
                [X],
                [X, C],
                [X, C, D],
                [X, C, D],
                [X, C, D]
            ],
            zIndices: [
                [0],
                [1, 1, d, d, d, d, 1, d, d, d, 1],
                [1, f, f],
                [d, f, k],
                [d, f, k],
                [1, f, k]
            ]
        },
        floor: {
            hslaColours: [
                [G],
                [V, F, X, X, X, X, F],
                [V],
                [V],
                [V],
                [V]
            ],
            zIndices: [
                [0],
                [1, 1, 6, 6, 6, 6, 1],
                [1],
                [1],
                [1],
                [1]
            ]
        }
    }
}

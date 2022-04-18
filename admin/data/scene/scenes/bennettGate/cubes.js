import { BENNETT_GATE_KEY } from '../../../../../src/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    PAVEMENT_COLOUR as V,
    APARTMENT_EXTERIOR_COLOUR as X,
    ROOF_COLOUR as C,
} from '../../../../../src/constants/scene/cubes/colours'

import { d, f, k } from '../../../../../src/constants/scene/cubes/zIndices'

/**
 * Gate should match in courtyard.
 */
export default {
    [BENNETT_GATE_KEY]: {
        ceiling: {
            hslaColours: [
                [C, X, X, X, X, X, X, X, X, X, X, C],
                [C, X, X, X, X, X, X, X, X, X, X, C],
                [C, X, X, C, C, C, C, C, C, C, X, C],
                [C],
                [C],
                [D],
            ],
            zIndices: [
                [f, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, f],
                [f, 1, 1, 1, 1, 1, d, d, d, 1, 1, f],
                [f, 1, 1, f, f, f, f, f, f, f, 1, f],
                [f],
                [f],
                [k],
            ],
        },
        floor: {
            hslaColours: [
                [G],
                [V],
            ],
            zIndices: [
                [0],
                [1],
            ],
        },
    },
}

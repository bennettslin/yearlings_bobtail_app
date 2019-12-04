import {
    LIZ_GATE_KEY,
    LIZ_GATE_STREET_KEY
} from '../../../constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    STREET_COLOUR as T,
    PAVEMENT_COLOUR as V,
    LIZ_GATE_COLOUR as A,
    ROOF_COLOUR as C,
    LIZ_WALL_COLOUR as W,
    LIZ_EXTERIOR_COLOUR as X
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { d, f, k } from '../../cubes/zIndices'

/**
 * Blinds and gate should match in lizCouch.
 */
const CUBES = {
    [LIZ_GATE_KEY]: {
        ceiling: {
            hslaColours: [
                [W],
                [X],
                [C],
                [D]
            ],
            zIndices: [
                [1],
                [1, 1, 1, 1, 1, d, d, d, d, d, 1],
                [f],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [V, V, V, V, V, V, V, V, V, V, V, A],
                [V, V, V, V, X, X, X, X, X, V, V, A],
                [V, V, V, V, V, V, V, V, V, V, V, A],
                [A, A, A, A, A, A, V, V, V, A],
                [V]
            ],
            zIndices: [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7],
                [1, 1, 1, 1, 6, 6, 6, 6, 6, 1, 1, 7],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7],
                [7, 7, 7, 7, 7, 7, 1, 1, 1, 7],
                [1]
            ]
        }
    },
    [LIZ_GATE_STREET_KEY]: {
        ceiling: {
            hslaColours: [
                [W, W, W, W, W, W, W, W, C, D],
                [X, X, X, X, X, X, X, X, C, D],
                [C, C, C, C, C, C, C, C, C, D],
                [D]
            ],
            zIndices: [
                [1, 1, 1, 1, 1, 1, 1, 1, f, k],
                [1, d, d, d, d, d, 1, 1, f, k],
                [f, f, f, f, f, f, f, f, f, k],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [V, V, V, V, V, V, V, V, A, V],
                [V, X, X, X, X, X, V, V, A, V],
                [V, V, V, V, V, V, V, V, A, T, V],
                [A, A, V, V, V, A, A, A, A, T, V],
                [V, V, V, V, V, V, V, V, V, T]
            ],
            zIndices: [
                [1, 1, 1, 1, 1, 1, 1, 1, 7, 1],
                [1, 6, 6, 6, 6, 6, 1, 1, 7, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 7, 0, 1],
                [7, 7, 1, 1, 1, 7, 7, 7, 7, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    }
}

export default CUBES

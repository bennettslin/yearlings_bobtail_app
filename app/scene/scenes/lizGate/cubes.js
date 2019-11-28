import {
    LIZ_GATE_KEY,
    LIZ_GATE_STREET_KEY
} from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    STREET_COLOUR as T,
    PAVEMENT_COLOUR as V,
    GATE_COLOUR as A,
    CEILING_COLOUR as C,
    WALL_COLOUR as W,
    DOOR_COLOUR as E
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
                [D],
                [C, C, C, C, W, W, W, W, W, C, C, C],
                [C],
                [D]
            ],
            zIndices: [
                [k],
                [f, f, f, f, d, d, d, d, d, f, f, f],
                [f],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [W, W, W, W, W, W, W, W, W, W, W, A],
                [W, W, W, W, W, W, W, W, W, W, W, A],
                [V, V, V, V, V, V, V, V, V, V, V, A],
                [A, A, A, A, A, V, V, V, A],
                [V]
            ],
            zIndices: [
                [f, f, f, f, f, f, f, f, f, f, f, 7],
                [f, f, f, f, 6, 6, 6, 6, 6, f, f, 7],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7],
                [7, 7, 7, 7, 7, 1, 1, 1, 7],
                [1]
            ]
        }
    },
    [LIZ_GATE_STREET_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [C, W, W, W, W, W, C, C, C, D],
                [C, C, C, C, C, C, C, C, C, D],
                [D]
            ],
            zIndices: [
                [k],
                [f, d, d, d, d, d, f, f, f, k],
                [f, f, f, f, f, f, f, f, f, k],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [W, W, W, W, W, W, W, W, A, V, V, T],
                [W, W, W, W, W, W, W, W, A, V, V, T],
                [V, V, V, V, V, V, V, V, A, V, V, T],
                [A, A, E, E, E, A, A, A, A, V, V, T],
                [V, V, V, V, V, V, V, V, V, V, V, T]
            ],
            zIndices: [
                [f, f, f, f, f, f, f, f, 7, 1, 1, 0],
                [f, 6, 6, 6, 6, 6, f, f, 7, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 0],
                [7, 7, 6, 6, 6, 7, 7, 7, 7, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    }
}

export default CUBES

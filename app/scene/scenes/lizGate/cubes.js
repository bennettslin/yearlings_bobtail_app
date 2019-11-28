import {
    LIZ_GATE_KEY,
    LIZ_GATE_STREET_KEY
} from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR,
    STREET_COLOUR,
    PAVEMENT_COLOUR,
    GATE_COLOUR,
    CEILING_COLOUR,
    WALL_COLOUR,
    DOOR_COLOUR
} from '../../cubes/keys/hsla'

import {
    d,
    f,
    k
} from '../../cubes/keys/zIndex'

/**
 * Blinds and gate should match in lizCouch.
 */

const
    D = DEFAULT_COLOUR,
    T = STREET_COLOUR,
    V = PAVEMENT_COLOUR,
    A = GATE_COLOUR,
    C = CEILING_COLOUR,
    W = WALL_COLOUR,
    E = DOOR_COLOUR,

    LIZ_GATE_CUBES = {
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
    LIZ_GATE_STREET_CUBES = {
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
    },

    CUBES = {
        [LIZ_GATE_KEY]: LIZ_GATE_CUBES,
        [LIZ_GATE_STREET_KEY]: LIZ_GATE_STREET_CUBES
    }

export default CUBES

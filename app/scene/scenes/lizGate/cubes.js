import {
    LIZ_GATE_KEY,
    LIZ_GATE_STREET_KEY
} from 'scene/cubesKeys'

import {
    d,
    f,
    k
} from 'scene/cubesConstants'

/**
 * Blinds and gate should match in lizCouch.
 */

const
    LIZ_GATE_CUBES = {
        ceiling: {
            zIndices: [
                [k],
                [f, f, f, f, d, d, d, d, d, f, f, f],
                [f],
                [k]
            ]
        },
        floor: {
            zIndices: [
                [0],
                [f, f, f, f, 6, 6, 6, 6, 6, f, f, 7],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7],
                [7, 7, 7, 7, 7, 1, 1, 1, 7],
                [1],
                [1]
            ]
        }
    },
    LIZ_GATE_STREET_CUBES = {
        ceiling: {
            zIndices: [
                [k],
                [f, d, d, d, d, d, f, f, f, k],
                [f, f, f, f, f, f, f, f, f, k],
                [k]
            ]
        },
        floor: {
            zIndices: [
                [0],
                [f, 6, 6, 6, 6, 6, f, f, 7, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 0],
                [7, 7, 1, 1, 1, 7, 7, 7, 7, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },

    CUBES = {
        [LIZ_GATE_KEY]: LIZ_GATE_CUBES,
        [LIZ_GATE_STREET_KEY]: LIZ_GATE_STREET_CUBES
    }

export default CUBES

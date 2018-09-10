import {
    LIZ_GATE_KEY,
    LIZ_GATE_STREET_KEY
} from 'scene/cubesKeys'

import {
    e,
    g,
    k
} from 'scene/cubesConstants'

const
    LIZ_GATE_CUBES = {
        ceiling: {
            zIndices: [
                [k],
                [g, e, e, e, e, e, g, g, g, g, g, k],
                [k]
            ]
        },
        floor: {
            zIndices: [
                [0],
                [g, 6, 6, 6, 6, 6, g, g, g, g, g, 7],
                [7, 7, 7, 7, 7, 7, 7, 1, 1, 1, 7, 7],
                [1],
                [1],
                [0]
            ]
        }
    },
    LIZ_GATE_STREET_CUBES = {
        ceiling: {
            zIndices: [
                [k]
            ]
        },
        floor: {
            zIndices: [
                [0],
                [g, g, g, g, g, 7, 1, 1, 0],
                [7, 1, 1, 1, 7, 7, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [LIZ_GATE_KEY]: LIZ_GATE_CUBES,
        [LIZ_GATE_STREET_KEY]: LIZ_GATE_STREET_CUBES
    }

export default CUBES

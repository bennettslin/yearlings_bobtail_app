import {
    LIZ_GATE_KEY,
    LIZ_GATE_STREET_KEY
} from 'scene/cubesKeys'

import {
    g
} from 'scene/cubesConstants'

const
    LIZ_GATE_CUBES = {
        // Outdoor wall is 8'.
        floor: {
            zIndices: [
                [g, g, g, g, g, g, g, g, g, g, 1, 7],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7],
                [7, 7, 7, 7, 7, 7, 1, 1, 1, 7, 7, 7],
                [1],
                [1],
                [0]
            ]
        }
    },
    LIZ_GATE_STREET_CUBES = {
        floor: {
            zIndices: [
                [g, g, g, g, g, 1, 7, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 7, 1, 1, 0],
                [7, 1, 1, 1, 7, 7, 7, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [LIZ_GATE_KEY]: LIZ_GATE_CUBES,
        [LIZ_GATE_STREET_KEY]: LIZ_GATE_STREET_CUBES
    }

export default CUBES

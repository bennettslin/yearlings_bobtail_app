import { TAIWAN_GATE_KEY } from 'scene/cubesKeys'

import {
    d,
    g
} from 'scene/cubesConstants'

const
    TAIWAN_GATE_CUBES = {
        // House wall is 6'.
        floor: {
            zIndices: [
                [d, d, d, d, d, 1, 1, 0, 0, 0, 0, 1],
                [g, g, g, 1, d, 1, 1, 0, 0, 0, 0, 1],
                [g, g, g, 1, d, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, d, 1, 1, 0, 0, 0, 0, 1],
                [d, 1, 1, 1, d, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1]
            ]
        }
    },

    CUBES = {
        [TAIWAN_GATE_KEY]: TAIWAN_GATE_CUBES
    }

export default CUBES

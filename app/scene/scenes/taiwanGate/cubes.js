import { TAIWAN_GATE_KEY } from 'scene/cubesKeys'

import {
    d
} from 'scene/cubesConstants'

const
    TAIWAN_GATE_CUBES = {
        // House wall is 6'.
        floor: {
            zIndices: [
                [1, 1, d, 1, 1, 1, 0],
                [1, 1, d, 1, 1, 1, 0],
                [1, 1, d, 1, 1, 1, 0],
                [1, 1, d, 1, 1, 1, 0],
                [1, 1, d, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },

    CUBES = {
        [TAIWAN_GATE_KEY]: TAIWAN_GATE_CUBES
    }

export default CUBES

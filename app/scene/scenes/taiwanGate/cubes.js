import { TAIWAN_GATE_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    d,
    g
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    TAIWAN_GATE_CUBES = {
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [0],
                [g, g, g, 1, d, 1, 0, 0, 0, 0, 1, 1],
                [g, g, g, 1, d, 1, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, d, 1, 0, 0, 0, 0, 1, 1],
                [d, 1, 1, 1, d, 1, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1]
            ]
        }
    },

    CUBES = {
        [TAIWAN_GATE_KEY]: TAIWAN_GATE_CUBES
    }

export default CUBES

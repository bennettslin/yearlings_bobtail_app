import { VAN_NUYS_QUAD_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    f,
    k
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    VAN_NUYS_QUAD_CUBES = {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [k, k, f],
                [k, k, f],
                [k, k, f],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [1, 1, 2, 2, 2, f, f, f, f, f, f, 2],
                [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [1]
            ]
        }
    },

    CUBES = {
        [VAN_NUYS_QUAD_KEY]: VAN_NUYS_QUAD_CUBES
    }

export default CUBES

import { VAN_NUYS_LOCKERS_KEY } from 'scene/cubesKeys'

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

    VAN_NUYS_LOCKERS_CUBES = {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [k],
                [k],
                [f, f, f, f, f, f, f, f, f, f, k],
                [f, f, f, f, f, f, f, f, f, f, k],
                [f, f, f, f, f, f, f, f, f, f, k],
                [f, f, f, f, f, f, f, f, f, f, k]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [1],
                [1],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                [2, f, f, f, f, f, f, 2, 2, 2, 1],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1]
            ]
        }
    },

    CUBES = {
        [VAN_NUYS_LOCKERS_KEY]: VAN_NUYS_LOCKERS_CUBES
    }

export default CUBES

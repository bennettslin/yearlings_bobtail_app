import { VAN_NUYS_LOCKERS_KEY } from 'scene/cubesKeys'

import {
    f,
    k
} from 'scene/cubesConstants'

const
    VAN_NUYS_LOCKERS_CUBES = {
        ceiling: {
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

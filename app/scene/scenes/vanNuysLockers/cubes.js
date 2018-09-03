import { VAN_NUYS_LOCKERS_KEY } from 'scene/cubesKeys'

import {
    f,
    g
} from 'scene/cubesConstants'

const
    VAN_NUYS_LOCKERS_CUBES = {
        // Overall height of lockers is 6.5'.
        ceiling: {
            zIndices: [
                [g],
                [g],
                [g, g, g, g, g, g, g, g, g, g, g]
            ]
        },
        floor: {
            zIndices: [
                [1],
                [1],
                [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                [1, 1, 2, f, f, f, f, 2, 2, 2, 1],
                [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1]
            ]
        }
    },

    CUBES = {
        [VAN_NUYS_LOCKERS_KEY]: VAN_NUYS_LOCKERS_CUBES
    }

export default CUBES

import { VAN_NUYS_HALLWAY_KEY } from 'scene/cubesKeys'

import {
    g,
    k
} from 'scene/cubesConstants'

const
    VAN_NUYS_HALLWAY_CUBES = {
        // Indoor wall is 7.5'.
        ceiling: {
            zIndices: [
                [k, g, g, g, g, g, g, g, g, g, g, k]
            ]
        },
        floor: {
            zIndices: [
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, g, 1, 1, 1, g, g, g, g, g, g, 0],
                [0, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },

    CUBES = {
        [VAN_NUYS_HALLWAY_KEY]: VAN_NUYS_HALLWAY_CUBES
    }

export default CUBES

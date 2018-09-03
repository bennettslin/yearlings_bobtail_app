import { TAIWAN_STAIRS_KEY } from 'scene/cubesKeys'

import {
    b,
    g
} from 'scene/cubesConstants'

const
    TAIWAN_STAIRS_CUBES = {
        // Windowsill height of 3'.
        floor: {
            zIndices: [
                [g, g, g, b, b, b, b, b, b, g],
                [g, 5, 5, 4, 3, 2, 1, 0],
                [g, 5, 5, 4, 3, 2, 1, 0],
                [g, 5, 5, 4, 3, 2, 1, 0],
                [g, 5, 5]
            ]
        }
    },

    CUBES = {
        [TAIWAN_STAIRS_KEY]: TAIWAN_STAIRS_CUBES
    }

export default CUBES

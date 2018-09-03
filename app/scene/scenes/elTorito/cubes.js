import { EL_TORITO_KEY } from 'scene/cubesKeys'

import {
    g
} from 'scene/cubesConstants'

const
    EL_TORITO_CUBES = {
        // Outdoor wall is 8'.
        floor: {
            zIndices: [
                [g, g, g, g, 1, 1, 1, 1, g],
                [1],
                [1, g, 1, 1, 1, 1, 1, 1, 1, 1, g, 1],
                [1],
                [1],
                [0]
            ]
        }
    },

    CUBES = {
        [EL_TORITO_KEY]: EL_TORITO_CUBES
    }

export default CUBES

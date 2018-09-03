import { BENNETT_COURTYARD_KEY } from 'scene/cubesKeys'

import {
    g
} from 'scene/cubesConstants'

const
    BENNETT_COURTYARD_CUBES = {
        // Outdoor wall is 8'. Windowsill height is 3'.
        floor: {
            zIndices: [
                [1, g],
                [1, g, 1],
                [1, g, 7, 7, 7, 7, g, 1, 1, 1, g],
                [1]
            ]
        }
    },

    CUBES = {
        [BENNETT_COURTYARD_KEY]: BENNETT_COURTYARD_CUBES
    }

export default CUBES

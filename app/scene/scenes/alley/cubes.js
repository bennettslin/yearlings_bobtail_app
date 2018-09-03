import { ALLEY_KEY } from 'scene/cubesKeys'

import {
    g
} from 'scene/cubesConstants'

const
    ALLEY_CUBES = {
        // Outdoor wall is 8'.
        floor: {
            zIndices: [
                [g],
                [1]
            ]
        }
    },

    CUBES = {
        [ALLEY_KEY]: ALLEY_CUBES
    }

export default CUBES

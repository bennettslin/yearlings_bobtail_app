import { OCEAN_DEPTHS_KEY } from 'scene/cubesKeys'

import {
    RIGHT
} from 'scene/cubesConstants'

const
    OCEAN_DEPTHS_CUBES = {
        slantDirection: RIGHT,
        floor: {
            zIndices: [
                [0]
            ]
        }
    },

    CUBES = {
        [OCEAN_DEPTHS_KEY]: OCEAN_DEPTHS_CUBES
    }

export default CUBES

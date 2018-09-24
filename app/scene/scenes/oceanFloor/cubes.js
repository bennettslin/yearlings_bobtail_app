import { OCEAN_FLOOR_KEY } from 'scene/cubesKeys'

import {
    RIGHT
} from 'scene/cubesConstants'

const
    OCEAN_FLOOR_CUBES = {
        slantDirection: RIGHT,
        floor: {
            zIndices: [
                [0]
            ]
        }
    },

    CUBES = {
        [OCEAN_FLOOR_KEY]: OCEAN_FLOOR_CUBES
    }

export default CUBES

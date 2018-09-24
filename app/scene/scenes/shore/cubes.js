import { SHORE_KEY } from 'scene/cubesKeys'

import {
    RIGHT
} from 'scene/cubesConstants'

const
    SHORE_CUBES = {
        slantDirection: RIGHT,
        floor: {
            zIndices: [
                [0]
            ]
        }
    },

    CUBES = {
        [SHORE_KEY]: SHORE_CUBES
    }

export default CUBES

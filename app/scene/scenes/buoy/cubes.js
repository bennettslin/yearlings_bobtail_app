import { BUOY_KEY } from 'scene/cubesKeys'

import {
    a,
    RIGHT
} from 'scene/cubesConstants'

const
    BUOY_CUBES = {
        slantDirection: RIGHT,
        floor: {
            zIndices: [
                [a, a, a, a, a, a, a, a, a, a, a, a],
                [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
                [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
                [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ]
        }
    },

    CUBES = {
        [BUOY_KEY]: BUOY_CUBES
    }

export default CUBES

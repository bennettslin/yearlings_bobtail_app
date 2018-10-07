import { BUOY_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    a,
    RIGHT
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    BUOY_CUBES = {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [D]
            ],
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

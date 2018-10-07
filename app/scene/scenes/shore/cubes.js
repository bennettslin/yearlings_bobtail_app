import { SHORE_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    RIGHT
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    SHORE_CUBES = {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [0]
            ]
        }
    },

    CUBES = {
        [SHORE_KEY]: SHORE_CUBES
    }

export default CUBES

import { OUTDOOR_WEDDING_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    RIGHT
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    OUTDOOR_WEDDING_CUBES = {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [4]
            ]
        }
    },

    CUBES = {
        [OUTDOOR_WEDDING_KEY]: OUTDOOR_WEDDING_CUBES
    }

export default CUBES

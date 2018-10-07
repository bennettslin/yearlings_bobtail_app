import {
    RICKSHAW_KEY
} from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    RIGHT
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    RICKSHAW_CUBES = {
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
        [RICKSHAW_KEY]: RICKSHAW_CUBES
    }

export default CUBES

import { CEMETERY_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    LEFT
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    CEMETERY_CUBES = {
        slantDirection: LEFT,
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [0],
                [0],
                [2]
            ]
        }
    },

    CUBES = {
        [CEMETERY_KEY]: CEMETERY_CUBES
    }

export default CUBES

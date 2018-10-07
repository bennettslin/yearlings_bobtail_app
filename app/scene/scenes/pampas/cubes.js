import { PAMPAS_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    RIGHT
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    PAMPAS_CUBES = {
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
        [PAMPAS_KEY]: PAMPAS_CUBES
    }

export default CUBES

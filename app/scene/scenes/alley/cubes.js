import { ALLEY_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    g
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    ALLEY_CUBES = {
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [g],
                [1]
            ]
        }
    },

    CUBES = {
        [ALLEY_KEY]: ALLEY_CUBES
    }

export default CUBES

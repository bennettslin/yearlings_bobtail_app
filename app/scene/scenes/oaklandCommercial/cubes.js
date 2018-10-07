import { OAKLAND_COMMERCIAL_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

const
    // Default.
    D = DEFAULT_HSLA,

    OAKLAND_COMMERCIAL_CUBES = {
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [1],
                [1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [0]
            ]
        }
    },

    CUBES = {
        [OAKLAND_COMMERCIAL_KEY]: OAKLAND_COMMERCIAL_CUBES
    }

export default CUBES

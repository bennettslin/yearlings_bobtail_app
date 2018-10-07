import { OAKLAND_RESIDENTIAL_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

const
    // Default.
    D = DEFAULT_HSLA,

    OAKLAND_RESIDENTIAL_CUBES = {
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [0],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 1, 1, 0, 1],
                [1, 1, 1, 0, 0, 1, 1, 0, 0, 1],
                [0]
            ]
        }
    },

    CUBES = {
        [OAKLAND_RESIDENTIAL_KEY]: OAKLAND_RESIDENTIAL_CUBES
    }

export default CUBES

import { OAKLAND_PUBLIC_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

const
    // Default.
    D = DEFAULT_HSLA,

    OAKLAND_PUBLIC_CUBES = {
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [0]
            ]
        }
    },

    CUBES = {
        [OAKLAND_PUBLIC_KEY]: OAKLAND_PUBLIC_CUBES
    }

export default CUBES

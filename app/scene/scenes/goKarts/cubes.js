import { GO_KARTS_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

const
    // Default.
    D = DEFAULT_HSLA,

    GO_KARTS_CUBES = {
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [0],
                [0],
                [0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [GO_KARTS_KEY]: GO_KARTS_CUBES
    }

export default CUBES

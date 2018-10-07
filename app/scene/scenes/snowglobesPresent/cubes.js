import { SNOWGLOBES_PRESENT_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

const
    // Default.
    D = DEFAULT_HSLA,

    SNOWGLOBES_PRESENT_CUBES = {
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [0],
                [0],
                [0, 7, 3, 3, 0, 0, 7, 7, 7, 7, 7, 0],
                [0, 7, 3, 3, 0, 0, 3, 3, 3, 3, 3, 0],
                [0, 7, 3, 3, 0, 0, 3, 3, 3, 3, 3, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [SNOWGLOBES_PRESENT_KEY]: SNOWGLOBES_PRESENT_CUBES
    }

export default CUBES

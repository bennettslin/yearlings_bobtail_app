import { SNOWGLOBES_PAST_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

const
    // Default.
    D = DEFAULT_HSLA,

    SNOWGLOBES_PAST_CUBES = {
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [0],
                [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0],
                [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0],
                [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [SNOWGLOBES_PAST_KEY]: SNOWGLOBES_PAST_CUBES
    }

export default CUBES

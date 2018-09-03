import { SNOWGLOBES_PAST_KEY } from 'scene/cubesKeys'

import {
    g
} from 'scene/cubesConstants'

const
    SNOWGLOBES_PAST_CUBES = {
        floor: {
            zIndices: [
                [g],
                [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0],
                [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0],
                [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [SNOWGLOBES_PAST_KEY]: SNOWGLOBES_PAST_CUBES
    }

export default CUBES

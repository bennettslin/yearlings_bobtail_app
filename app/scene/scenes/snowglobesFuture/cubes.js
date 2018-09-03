import {
    SNOWGLOBES_FUTURE_KEY
} from 'scene/cubesKeys'

import {
    g
} from 'scene/cubesConstants'

const
    SNOWGLOBES_FUTURE_CUBES = {
        floor: {
            zIndices: [
                [g],
                [g, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0],
                [g, 8, 4, 4, 2, 2, 5, 5, 5, 5, 5, 0],
                [g, 8, 4, 4, 2, 2, 5, 5, 5, 5, 5, 0],
                [g, 8, 4, 4, 2, 2, 5, 5, 5, 5, 5, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [SNOWGLOBES_FUTURE_KEY]: SNOWGLOBES_FUTURE_CUBES
    }

export default CUBES

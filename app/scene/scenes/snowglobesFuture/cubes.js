import {
    SNOWGLOBES_FUTURE_KEY
} from 'scene/cubesKeys'

import {
    k
} from 'scene/cubesConstants'

/**
 * Couch should match in lizCouch.
 */

const
    SNOWGLOBES_FUTURE_CUBES = {
        ceiling: {
            zIndices: [
                [k]
            ]
        },
        floor: {
            zIndices: [
                [0],
                [0],
                [0, 7, 3, 3, 0],
                [0, 7, 3, 3, 0],
                [0, 7, 3, 3, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [SNOWGLOBES_FUTURE_KEY]: SNOWGLOBES_FUTURE_CUBES
    }

export default CUBES

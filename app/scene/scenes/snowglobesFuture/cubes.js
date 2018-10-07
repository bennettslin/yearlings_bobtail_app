import {
    SNOWGLOBES_FUTURE_KEY
} from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    k
} from 'scene/cubesConstants'

/**
 * Couch should match in lizCouch.
 */

const
    // Default.
    D = DEFAULT_HSLA,

    SNOWGLOBES_FUTURE_CUBES = {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [0],
                [0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 0],
                [0, 7, 3, 3, 0, 0, 0, 5, 5, 5, 5, 0],
                [0, 7, 3, 3, 0, 0, 0, 5, 5, 5, 5, 0],
                [0, 7, 3, 3, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [SNOWGLOBES_FUTURE_KEY]: SNOWGLOBES_FUTURE_CUBES
    }

export default CUBES

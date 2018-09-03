import {
    BANCROFT_LIBRARY_KEY,
    CAMPANILE_KEY
} from 'scene/cubesKeys'

import {
    g
} from 'scene/cubesConstants'

const
    BANCROFT_LIBRARY_CUBES = {
        // Outdoor wall is 8'. Platform is 1'.
        floor: {
            zIndices: [
                [1, 9, 3, g],
                [1, 9, 3],
                [1, 9, 9, 9, 9, 9, 9, 9, 3, 3, 3, 9],
                [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1],
                [1]
            ]
        }
    },
    CAMPANILE_CUBES = {
        floor: {
            zIndices: [
                [g, g, 3, 9, 1],
                [3, 3, 3, 9, 1],
                [9, 9, 9, 9, 1],
                [1],
                [1]
            ]
        }
    },

    CUBES = {
        [BANCROFT_LIBRARY_KEY]: BANCROFT_LIBRARY_CUBES,
        [CAMPANILE_KEY]: CAMPANILE_CUBES
    }

export default CUBES

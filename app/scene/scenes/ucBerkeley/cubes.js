import {
    BANCROFT_LIBRARY_KEY,
    CAMPANILE_KEY
} from 'scene/cubesKeys'

import {
    f,
    g,
    k
} from 'scene/cubesConstants'

const
    BANCROFT_LIBRARY_CUBES = {
        // Outdoor wall is 8'. Platform is 1'.
        ceiling: {
            zIndices: [
                [k],
                [k],
                [k, k, k, k, g, g, g, f, f, f, g],
                [k]
            ]
        },
        floor: {
            zIndices: [
                [1],
                [1],
                [1, 1, 9, 3, g, g, g, 3, 3, 3, g],
                [1, 1, 9, 9, 9, 9, 3, 3, 3, 3, 3, 9],
                [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1],
                [1]
            ]
        }
    },
    CAMPANILE_CUBES = {
        ceiling: {
            zIndices: [
                [k],
                [k],
                [g, g, g, k],
                [k]
            ]
        },
        floor: {
            zIndices: [
                [1],
                [1],
                [g, g, g, 3, 9, 1],
                [3, 9, 9, 9, 9, 1],
                [2, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [BANCROFT_LIBRARY_KEY]: BANCROFT_LIBRARY_CUBES,
        [CAMPANILE_KEY]: CAMPANILE_CUBES
    }

export default CUBES

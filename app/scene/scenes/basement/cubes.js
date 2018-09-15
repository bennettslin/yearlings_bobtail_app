import {
    BASEMENT_KEY,
    BASEMENT_BED_KEY,
    BASEMENT_MAGIC_KEY
} from 'scene/cubesKeys'

import {
    c,
    f,
    k
} from 'scene/cubesConstants'

const
    BASEMENT_CUBES = {
        ceiling: {
            zIndices: [
                [k],
                [f, c, c, f],
                [f]
            ]
        },
        floor: {
            zIndices: [
                [4],
                [f, 4, 4, f],
                [f, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, f],
                [f, 3, 3, 0, 0, 2, 0, 0, 2, 0, 0, f],
                [f, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, f],
                [f, 1, 1, 0, 0, 0, 0, 0, 0, 2, 0, f]
            ]
        }
    },
    BASEMENT_BED_CUBES = {
        // Basement wall is 6', depth is 2.5'. Bed is 1'.
        ceiling: {
            zIndices: [
                [k],
                [f, c, c, f],
                [f]
            ]
        },
        floor: {
            zIndices: [
                [4],
                [f, 4, 4, f],
                [f, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, f],
                [f, 3, 3, 0, 0, 3, 3, 3, 3, 3, 4, f],
                [f, 2, 2, 0, 0, 3, 3, 3, 3, 3, 4, f],
                [f, 1, 1, 0, 0, 3, 3, 3, 3, 3, 4, f]
            ]
        }
    },
    BASEMENT_MAGIC_CUBES = {
        // Basement wall is 6', depth is 2.5'. Bed is 1'.
        ceiling: {
            zIndices: [
                [k]
            ]
        },
        floor: {
            zIndices: [
                [0],
                [0],
                [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0],
                [0, 3, 3, 0, 0, 3, 3, 3, 3, 3, 4, 0],
                [0, 2, 2, 0, 0, 3, 3, 3, 3, 3, 4, 0],
                [0, 1, 1, 0, 0, 3, 3, 3, 3, 3, 4, 0]
            ]
        }
    },

    CUBES = {
        [BASEMENT_KEY]: BASEMENT_CUBES,
        [BASEMENT_BED_KEY]: BASEMENT_BED_CUBES,
        [BASEMENT_MAGIC_KEY]: BASEMENT_MAGIC_CUBES
    }

export default CUBES

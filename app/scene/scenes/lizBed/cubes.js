import {
    LIZ_BED_KEY,
    LIZ_BED_OPEN_KEY
} from 'scene/cubesKeys'

import {
    e,
    g,
    k
} from 'scene/cubesConstants'

const
    LIZ_BED_CUBES = {
        ceiling: {
            zIndices: [
                [g],
                [g, g, e, 4, 4, 4, 4, 4, g],
                [g]
            ]
        },
        floor: {
            zIndices: [
                [g],
                [g, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, g],
                [g, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, g],
                [g, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, g],
                [g, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    LIZ_BED_OPEN_CUBES = {
        ceiling: {
            zIndices: [
                [k, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, k],
                [k, k, e, 4, 4, 4, 4, 4, k],
                [k]
            ]
        },
        floor: {
            zIndices: [
                [0],
                [0, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 0],
                [0, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 0],
                [0, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 0],
                [0, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },

    CUBES = {
        [LIZ_BED_KEY]: LIZ_BED_CUBES,
        [LIZ_BED_OPEN_KEY]: LIZ_BED_OPEN_CUBES
    }

export default CUBES

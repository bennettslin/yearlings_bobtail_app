import { ATTIC_KEY } from 'scene/cubesKeys'

import {
    c,
    d,
    e,
    f,
    g
} from 'scene/cubesConstants'

const
    ATTIC_CUBES = {
        ceiling: {
            zIndices: [
                [d, d, e, e, f, f, g]
            ]
        },
        floor: {
            zIndices: [
                [g],
                [7, 7, c, c, c, c, 7, 6, 6, 1],
                [7, 7, 9, 9, 9, 9, 7, 6, 6, 1],
                [7, 7, 9, 9, 9, 9, 7, 5, 5, 1],
                [7, 7, 7, 7, 7, 7, 7, 4, 4, 3, 2, 1],
                [7, 7, 7, 7, 7, 7, 7, 4, 4, 3, 2, 1]
            ]
        }
    },

    CUBES = {
        [ATTIC_KEY]: ATTIC_CUBES
    }

export default CUBES

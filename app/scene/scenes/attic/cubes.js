import { ATTIC_KEY } from 'scene/cubesKeys'

import {
    c,
    e,
    f,
    g
} from 'scene/cubesConstants'

const
    ATTIC_CUBES = {
        ceiling: {
            zIndices: [
                [g, e, e, f, f, g, g, g, f, f, f, g]
            ]
        },
        floor: {
            zIndices: [
                [g],
                [g, 7, 7, 7, 7, 7, 7, g, 1, 1, 1, g],
                [g, 7, c, c, c, c, 7, g, 1, 1, 1, g],
                [g, 7, 9, 9, 9, 9, 7, g, 1, 1, 1, g],
                [g, 7, 7, 7, 7, 7, 7, g, 3, 2, 1, g],
                [g, 7, 7, 9, 9, 7, 7, g, 3, 2, 1, g]
            ]
        }
    },

    CUBES = {
        [ATTIC_KEY]: ATTIC_CUBES
    }

export default CUBES

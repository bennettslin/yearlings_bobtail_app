import { ATTIC_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    c,
    e,
    f,
    g
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    ATTIC_CUBES = {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [g, e, e, f, f, g, g, g, f, f, f, g]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
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

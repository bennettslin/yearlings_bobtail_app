import { EL_TORITO_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    e,
    f,
    g,
    k
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    EL_TORITO_CUBES = {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [g],
                [g],
                [f, f, f, e, e, e, e, e, e, f],
                [f],
                [f],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [g],
                [2],
                [f, f, f, 2, 2, 2, 2, 2, 2, f],
                [1, 1, 1, 2, 2, 2, 2, 2, 2, 1],
                [1, f, 1, 1, 1, 1, 1, 1, 1, 1, f, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [EL_TORITO_KEY]: EL_TORITO_CUBES
    }

export default CUBES

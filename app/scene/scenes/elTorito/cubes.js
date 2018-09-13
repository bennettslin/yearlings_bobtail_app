import { EL_TORITO_KEY } from 'scene/cubesKeys'

import {
    e,
    f,
    g,
    k
} from 'scene/cubesConstants'

const
    EL_TORITO_CUBES = {
        ceiling: {
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

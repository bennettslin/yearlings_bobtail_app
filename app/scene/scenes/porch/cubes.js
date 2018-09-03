import { PORCH_KEY } from 'scene/cubesKeys'

import {
    e,
    f,
    k
} from 'scene/cubesConstants'

const
    PORCH_CUBES = {
        ceiling: {
            zIndices: [
                [f, f, f, f, f, e, e, f],
                [f],
                [k, f, f, f, f, f, f, f, f, f, f, k]
            ]
        },
        floor: {
            zIndices: [
                [f, f, f, f, f, 3, 3, f, f, f],
                [1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 1, f, 2, 2, 2, 2, 2, 2, f, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [PORCH_KEY]: PORCH_CUBES
    }

export default CUBES

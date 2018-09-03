import { LIZ_BED_KEY } from 'scene/cubesKeys'

import {
    a
} from 'scene/cubesConstants'

const
    LIZ_BED_CUBES = {
        floor: {
            zIndices: [
                [1, 7, 7, 7, 9, 9, 9, 9, 7, 7, 7, 1],
                [1, 7, 7, 7, 9, 9, 9, 9, 7, 7, 7, 1],
                [1, 7, 7, 7, 9, 9, 9, 9, 7, 7, 7, 1],
                [1, 7, 7, a, 9, 9, 9, 9, 7, 7, 7, 1],
                [1, 7, 7, a, 9, 9, 9, 9, 7, 7, 7, 1],
                [1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1]
            ]
        }
    },

    CUBES = {
        [LIZ_BED_KEY]: LIZ_BED_CUBES
    }

export default CUBES

import { LIZ_BED_KEY } from 'scene/cubesKeys'

import {

} from 'scene/cubesConstants'

const
    LIZ_BED_CUBES = {
        floor: {
            zIndices: [
                [1, 4, 4, 7, 7, 7, 7, 7, 4, 4, 4, 1],
                [1, 4, 4, 7, 7, 7, 7, 7, 4, 4, 4, 1],
                [1, 4, 4, 7, 7, 7, 7, 7, 4, 4, 4, 1],
                [1, 4, 4, 7, 7, 7, 7, 7, 4, 4, 4, 1],
                [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [LIZ_BED_KEY]: LIZ_BED_CUBES
    }

export default CUBES

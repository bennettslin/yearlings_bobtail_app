import { BACKSTAGE_KEY } from 'scene/cubesKeys'

import {
    g
} from 'scene/cubesConstants'

const
    BACKSTAGE_CUBES = {
        ceiling: {
            zIndices: [
                [g]
            ]
        },
        floor: {
            zIndices: [
                [g],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },

    CUBES = {
        [BACKSTAGE_KEY]: BACKSTAGE_CUBES
    }

export default CUBES

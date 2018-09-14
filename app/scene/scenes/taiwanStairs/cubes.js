import { TAIWAN_STAIRS_KEY } from 'scene/cubesKeys'

import {
    e,
    // f,
    g,
    k
} from 'scene/cubesConstants'

const
    TAIWAN_STAIRS_CUBES = {
        ceiling: {
            zIndices: [
                [k],
                [k],
                [g, g, g, g, g, e, e, e, g],
                [g],
                [g],
                [g, g, g, g, g, g, g, g, g, g]
            ]
        },
        floor: {
            zIndices: [
                [6, 6, 6, 6, 1, 1, 1, 6, 6],
                [6, 1],
                [g, g, g, g, g, 5, 5, 5, g],
                [g, 5, 5, 5, 4, 3, 2, 1, 0, 0, 0, g],
                [g, 5, 5, 5, 5, 5, 5, 5, 5, g, g, g],
                [g, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, g]
            ]
        }
    },

    CUBES = {
        [TAIWAN_STAIRS_KEY]: TAIWAN_STAIRS_CUBES
    }

export default CUBES

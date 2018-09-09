import { TAIWAN_STAIRS_KEY } from 'scene/cubesKeys'

import {
    e,
    f,
    g,
    k
} from 'scene/cubesConstants'

const
    TAIWAN_STAIRS_CUBES = {
        ceiling: {
            zIndices: [
                [k],
                [k],
                [g, g, e, e, e, e, e, g],
                [g],
                [g],
                [g, g, g, g, g, g, g, g, f, g]
            ]
        },
        floor: {
            zIndices: [
                [0],
                [0],
                [g, g, 6, 6, 6, 6, 6, g],
                [g, 4, 4, 3, 2, 1, 0, 0, 0, 0, 0, g],
                [g, 4, 4, 4, 4, 4, 4, 4, g],
                [g, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, g]
            ]
        }
    },

    CUBES = {
        [TAIWAN_STAIRS_KEY]: TAIWAN_STAIRS_CUBES
    }

export default CUBES

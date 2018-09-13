import { MUSEUM_KEY } from 'scene/cubesKeys'

import {
    d,
    g
} from 'scene/cubesConstants'

const
    MUSEUM_CUBES = {
        ceiling: {
            zIndices: [
                [g],
                [g],
                [d, g],
                [d, g],
                [d, g],
                [g]
            ]
        },
        floor: {
            zIndices: [
                [g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, g],
                [1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },

    CUBES = {
        [MUSEUM_KEY]: MUSEUM_CUBES
    }

export default CUBES

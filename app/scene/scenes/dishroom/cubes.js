import { DISHROOM_KEY } from 'scene/cubesKeys'

import {
    b,
    f,
    g
} from 'scene/cubesConstants'

const
    DISHROOM_CUBES = {
        ceiling: {
            zIndices: [
                [g, g, f, f, f, f, f, g],
                [g]
            ]
        },
        floor: {
            zIndices: [
                [g, g, b, b, b, b, b, g, g, g, 6],
                [1, 1, 7, 7, 7, 7, 7, 1, 1, g, 5],
                [1, 1, 7, 7, 7, 7, 7, 1, 1, g, 4],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, g, 3],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, g, 2],
                [1]
            ]
        }
    },

    CUBES = {
        [DISHROOM_KEY]: DISHROOM_CUBES
    }

export default CUBES

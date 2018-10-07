import { DISHROOM_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    b,
    f,
    g
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    DISHROOM_CUBES = {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [g, g, f, f, f, f, f, g],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [g, g, b, b, b, b, b, g, g, 5, 5, g],
                [g, 1, 7, 7, 7, 7, 7, 1, g, 5, 5, g],
                [g, 1, 7, 7, 7, 7, 7, 1, g, 4, 4, g],
                [g, 1, 1, 1, 1, 1, 1, 1, g, 3, 3, g],
                [g, 1, 1, 1, 1, 1, 1, 1, g, 2, 2, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },

    CUBES = {
        [DISHROOM_KEY]: DISHROOM_CUBES
    }

export default CUBES

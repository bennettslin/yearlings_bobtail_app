import { BUOY_KEY } from '../../cubesKeys'

import {
    OCEAN_HSLA
} from '../../hslaKeys'

import {
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    k,
    RIGHT
} from '../../cubesConstants'

const
    // Default.
    O = OCEAN_HSLA,

    BUOY_CUBES = {
        slantDirection: RIGHT,
        ceiling: {
            hslaColours: [
                [O]
            ],
            zIndices: [
                [k],
                [d, d, c, c, b, b, a, a, 9, 9, 8, 8],
                [e, e, d, d, c, c, b, b, a, a, 9, 9],
                [f, f, e, e, d, d, c, c, b, b, a, a],
                [g, f, f, e, e, d, d, c, c, b, b, a],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [O]
            ],
            zIndices: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8],
                [2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7],
                [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
                [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ]
        }
    },

    CUBES = {
        [BUOY_KEY]: BUOY_CUBES
    }

export default CUBES

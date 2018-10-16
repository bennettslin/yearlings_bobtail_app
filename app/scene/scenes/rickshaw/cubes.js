import {
    RICKSHAW_KEY
} from '../../cubesKeys'

import {
    SAND_HSLA,
    STREET_HSLA
} from '../../hslaKeys'

import {
    LEFT
} from '../../cubesConstants'

const
    N = SAND_HSLA,
    T = STREET_HSLA,

    RICKSHAW_CUBES = {
        slantDirection: LEFT,
        floor: {
            hslaColours: [
                [N, N, N, N, N, N, N, N, N, T],
                [N, N, N, N, N, N, N, T],
                [N, N, N, N, N, N, T],
                [N, N, N, N, T],
                [N, N, T],
                [N, T],
            ],
            zIndices: [
                [0]
            ]
        }
    },

    CUBES = {
        [RICKSHAW_KEY]: RICKSHAW_CUBES
    }

export default CUBES

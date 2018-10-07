import {
    CINEMA_KEY,
    CINEMA_STREET_KEY
} from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    e,
    f,
    k
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    CINEMA_CUBES = {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [f, f, f, e, e, e, e, e, e, f],
                [f],
                [f],
                [f],
                [f],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [f, f, f, 1, 1, 1, 1, 1, 1, f],
                [f, f, f, 1, 1, 1, 1, 1, 1, f],
                [f, f, f, 1, 1, 1, 1, 1, 1, f],
                [1],
                [1],
                [0]
            ]
        }
    },
    CINEMA_STREET_CUBES = {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [k],
                [f, f, f, f, k],
                [f, f, f, f, k],
                [f, f, f, f, k],
                [f, f, f, f, k],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [0],
                [f, f, f, 1, 1, 0],
                [f, f, f, 1, 1, 0],
                [1, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [CINEMA_KEY]: CINEMA_CUBES,
        [CINEMA_STREET_KEY]: CINEMA_STREET_CUBES
    }

export default CUBES

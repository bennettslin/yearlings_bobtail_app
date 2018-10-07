import { CLUB_LOADING } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    d,
    f,
    k
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    CLUB_LOADING_CUBES = {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [f],
                [f],
                [f, f, f, f, d, d, d, f],
                [f],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [1, f],
                [1, f, 1],
                [1, f, f, f, 1, 1, 1, f],
                [1]
            ]
        }
    },

    CUBES = {
        [CLUB_LOADING]: CLUB_LOADING_CUBES
    }

export default CUBES

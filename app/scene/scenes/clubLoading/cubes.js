import { CLUB_LOADING } from 'scene/cubesKeys'

import {
    d,
    f,
    k
} from 'scene/cubesConstants'

const
    CLUB_LOADING_CUBES = {
        ceiling: {
            zIndices: [
                [f],
                [f],
                [f, f, f, f, d, d, d, f],
                [f],
                [k]
            ]
        },
        floor: {
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

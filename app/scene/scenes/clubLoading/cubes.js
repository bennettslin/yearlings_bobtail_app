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
                [k, f],
                [k, f],
                [k, f, f, d, d, d, f],
                [k, f],
                [k]
            ]
        },
        floor: {
            zIndices: [
                [1, 1, f],
                [1, 1, f, 1],
                [1, 1, f, 1, 1, 1, f],
                [1, 1, 1, 1, 1, 1, 7, 1],
                [1, 1, 1, 1, 1, 1, 7, 1],
                [1, 1, 1, 1, 1, 1, 1, 1]
            ]
        }
    },

    CUBES = {
        [CLUB_LOADING]: CLUB_LOADING_CUBES
    }

export default CUBES

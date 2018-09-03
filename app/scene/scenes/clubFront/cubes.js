import {
    CLUB_FRONT_KEY,
    CLUB_FRONT_FAR_KEY
} from 'scene/cubesKeys'

import {
    f
} from 'scene/cubesConstants'

const
    CLUB_FRONT_CUBES = {
        // Indoor wall of club is 9'. Club stage is 2.5'.
        floor: {
            zIndices: [
                [f],
                [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [1]
            ]
        }
    },
    CLUB_FRONT_FAR_CUBES = {
        // Indoor wall of club is 9'. Club stage is 2.5'.
        ceiling: {
            zIndices: [
                [f]
            ]
        },
        floor: {
            zIndices: [
                [f],
                [1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [CLUB_FRONT_KEY]: CLUB_FRONT_CUBES,
        [CLUB_FRONT_FAR_KEY]: CLUB_FRONT_FAR_CUBES
    }

export default CUBES

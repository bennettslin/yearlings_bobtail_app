import {
    CLUB_FRONT_KEY,
    CLUB_FRONT_FAR_KEY
} from 'scene/cubesKeys'

import {
    f,
    g
} from 'scene/cubesConstants'

const
    CLUB_FRONT_CUBES = {
        ceiling: {
            zIndices: [
                [g],
                [g],
                [f, g],
                [f, g],
                [g]
            ]
        },
        floor: {
            zIndices: [
                [g],
                [g, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, g],
                [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, g],
                [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, g],
                [g, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    CLUB_FRONT_FAR_CUBES = {
        // Indoor wall of club is 9'. Club stage is 2.5'.
        ceiling: {
            zIndices: [
                [g]
            ]
        },
        floor: {
            zIndices: [
                [g],
                [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [CLUB_FRONT_KEY]: CLUB_FRONT_CUBES,
        [CLUB_FRONT_FAR_KEY]: CLUB_FRONT_FAR_CUBES
    }

export default CUBES

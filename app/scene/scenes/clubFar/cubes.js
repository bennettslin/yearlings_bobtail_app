import {
    CLUB_FAR_KEY
} from 'scene/cubesKeys'

import {
    g
} from 'scene/cubesConstants'

const
    CLUB_FAR_CUBES = {
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
        [CLUB_FAR_KEY]: CLUB_FAR_CUBES
    }

export default CUBES

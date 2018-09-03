import { CLUB_LOADING } from 'scene/cubesKeys'

import {
    g
} from 'scene/cubesConstants'

const
    CLUB_LOADING_CUBES = {
        // Outdoor wall is 8'.
        floor: {
            zIndices: [
                [1, 1, g],
                [1, 1, g, 1],
                [1, 1, g, 1, 1, 1, g],
                [1, 1, 1, 1, 1, 1, 7, 1],
                [1, 1, 1, 1, 1, 1, 7, 1],
                [1, 1, 1, 1, 1, 1, 7, 1]
            ]
        }
    },

    CUBES = {
        [CLUB_LOADING]: CLUB_LOADING_CUBES
    }

export default CUBES

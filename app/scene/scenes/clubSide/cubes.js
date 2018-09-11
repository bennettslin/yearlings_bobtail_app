import {
    CLUB_SIDE_CROWD_KEY,
    CLUB_SIDE_STAGE_KEY
} from 'scene/cubesKeys'

import {
    f,
    g
} from 'scene/cubesConstants'

const
    CLUB_SIDE_CROWD_CUBES = {
        ceiling: {
            zIndices: [
                [g]
            ]
        },
        floor: {
            zIndices: [
                [g],
                [3, 3, 3, 1],
                [3, 3, 3, 1],
                [3, 3, 3, 1],
                [3, 3, 3, 1],
                [1]
            ]
        }
    },
    CLUB_SIDE_STAGE_CUBES = {
        ceiling: {
            zIndices: [
                [g],
                [f, g],
                [f, g],
                [f, g],
                [g]
            ]
        },
        floor: {
            zIndices: [
                [g],
                [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [g, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [CLUB_SIDE_CROWD_KEY]: CLUB_SIDE_CROWD_CUBES,
        [CLUB_SIDE_STAGE_KEY]: CLUB_SIDE_STAGE_CUBES
    }

export default CUBES

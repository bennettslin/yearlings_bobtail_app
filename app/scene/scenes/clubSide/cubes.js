import {
    CLUB_SIDE_CROWD_KEY,
    CLUB_SIDE_STAGE_KEY
} from 'scene/cubesKeys'

import {
    f
} from 'scene/cubesConstants'

const
    CLUB_SIDE_CROWD_CUBES = {
        ceiling: {
            zIndices: [
                [f]
            ]
        },
        floor: {
            zIndices: [
                [f],
                [4, 4, 4, 1],
                [4, 4, 4, 1],
                [4, 4, 4, 1],
                [4, 4, 4, 1],
                [1]
            ]
        }
    },
    CLUB_SIDE_STAGE_CUBES = {
        ceiling: {
            zIndices: [
                [f]
            ]
        },
        floor: {
            zIndices: [
                [f],
                [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
                [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
                [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
                [f, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [CLUB_SIDE_CROWD_KEY]: CLUB_SIDE_CROWD_CUBES,
        [CLUB_SIDE_STAGE_KEY]: CLUB_SIDE_STAGE_CUBES
    }

export default CUBES

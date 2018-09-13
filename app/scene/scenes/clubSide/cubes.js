import {
    CLUB_SIDE_CROWD_KEY,
    CLUB_SIDE_STAGE_KEY
} from 'scene/cubesKeys'

import {
    d,
    e,
    g
} from 'scene/cubesConstants'

const
    CLUB_SIDE_CROWD_CUBES = {
        ceiling: {
            zIndices: [
                [g],
                [g],
                [g],
                [g, g, g, g, g, g, g, g, g, g, g, d],
                [g, g, g, g, g, g, g, g, g, g, g, d],
                [g]
            ]
        },
        floor: {
            zIndices: [
                [g],
                [3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [3, 3, 3, 1],
                [3, 3, 3, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    CLUB_SIDE_STAGE_CUBES = {
        ceiling: {
            zIndices: [
                [g],
                [g],
                [e, g],
                [e, g],
                [g]
            ]
        },
        floor: {
            zIndices: [
                [g],
                [g, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [g, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [g, 1]
            ]
        }
    },

    CUBES = {
        [CLUB_SIDE_CROWD_KEY]: CLUB_SIDE_CROWD_CUBES,
        [CLUB_SIDE_STAGE_KEY]: CLUB_SIDE_STAGE_CUBES
    }

export default CUBES

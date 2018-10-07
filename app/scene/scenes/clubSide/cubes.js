import {
    CLUB_SIDE_CROWD_KEY,
    CLUB_SIDE_STAGE_KEY
} from 'scene/cubesKeys'

import {
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    PLATFORM_HSLA
} from '../../hslaKeys'

import {
    d,
    e,
    g
} from 'scene/cubesConstants'

const
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,
    P = PLATFORM_HSLA,

    CLUB_SIDE_CROWD_CUBES = {
        ceiling: {
            hslaColours: [
                [C],
                [C],
                [C],
                [C, C, C, C, C, C, C, C, C, C, C, W],
                [C, C, C, C, C, C, C, C, C, C, C, W],
                [C]
            ],
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
            hslaColours: [
                [W],
                [P, P, P, P, F, F, F, F, F, F, F, W],
                [P, P, P, P, F, F, F, F, F, F, F, W],
                [P, P, P, P, F],
                [P, P, P, P, F],
                [F, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [g],
                [3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, g],
                [3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, g],
                [3, 3, 3, 3, 1],
                [3, 3, 3, 3, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    CLUB_SIDE_STAGE_CUBES = {
        ceiling: {
            hslaColours: [
                [C],
                [C],
                [W, C],
                [W, C],
                [C]
            ],
            zIndices: [
                [g],
                [g],
                [e, g],
                [e, g],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, P, P, P, P, P, P, P, P, P, F],
                [F, P, P, P, P, P, P, P, P, P, F],
                [F, P, P, P, P, P, P, P, P, P, F],
                [W, P, P, P, P, P, P, P, P, P, F],
                [W, F]
            ],
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

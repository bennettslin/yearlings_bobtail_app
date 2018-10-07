import {
    CLUB_FRONT_KEY
} from 'scene/cubesKeys'

import {
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    PLATFORM_HSLA
} from '../../hslaKeys'

import {
    g
} from 'scene/cubesConstants'

const
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,
    P = PLATFORM_HSLA,

    CLUB_FRONT_CUBES = {
        ceiling: {
            hslaColours: [
                [C]
            ],
            zIndices: [
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, P, P, P, P, P, P, P, P, P, P, W],
                [W, P, P, P, P, P, P, P, P, P, P, W],
                [W, P, P, P, P, P, P, P, P, P, P, W],
                [W, P, P, P, P, P, P, P, P, P, P, W],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [g],
                [g, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, g],
                [g, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, g],
                [g, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, g],
                [g, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },

    CUBES = {
        [CLUB_FRONT_KEY]: CLUB_FRONT_CUBES
    }

export default CUBES

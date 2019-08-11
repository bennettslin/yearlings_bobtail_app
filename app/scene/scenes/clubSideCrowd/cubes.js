import { CLUB_SIDE_CROWD_KEY } from '../../../constants/scene/scenes'

import {
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    PLATFORM_HSLA
} from '../../cubes/keys/hsla'

import {
    d,
    g
} from '../../cubes/keys/zIndex'

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

    CUBES = {
        [CLUB_SIDE_CROWD_KEY]: CLUB_SIDE_CROWD_CUBES
    }

export default CUBES

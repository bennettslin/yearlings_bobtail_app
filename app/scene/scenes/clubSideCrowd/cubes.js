import { CLUB_SIDE_CROWD_KEY } from '../../../constants/scene/scenes'

import {
    OLD_FLOOR_COLOUR as F,
    CLUB_WALL_COLOUR as W,
    PLATFORM_COLOUR as P
} from '../../../constants/scene/cubes/colours'

import { d, g } from '../../../constants/scene/cubes/zIndices'

export default {
    [CLUB_SIDE_CROWD_KEY]: {
        ceiling: {
            hslaColours: [
                [W]
            ],
            zIndices: [
                [1],
                [g, g, g, g, g, g, g, g, g, g, g, 1],
                [g, g, g, g, g, g, g, g, g, g, g, 1],
                [g, g, g, g, g, g, g, g, g, g, g, d],
                [g, g, g, g, g, g, g, g, g, g, g, d],
                [g, g, g, g, g, g, g, g, g, g, g, 1]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [P, P, P, P, F],
                [P, P, P, P, F],
                [P, P, P, P, F],
                [P, P, P, P, F],
                [F]
            ],
            zIndices: [
                [1],
                [3, 3, 3, 3, 1],
                [3, 3, 3, 3, 1],
                [3, 3, 3, 3, 1],
                [3, 3, 3, 3, 1],
                [1]
            ]
        }
    }
}

import { CLUB_SIDE_CROWD_KEY } from '../../../../../app/constants/scene/scenes'

import {
    OLD_FLOOR_COLOUR as F,
    CLUB_SIDE_PRIMARY_COLOUR as B,
    CLUB_SIDE_SECONDARY_COLOUR as E,
    PLATFORM_COLOUR as P
} from '../../../../../app/constants/scene/cubes/colours'

import { d, g } from '../../../../../app/constants/scene/cubes/zIndices'

export default {
    [CLUB_SIDE_CROWD_KEY]: {
        ceiling: {
            hslaColours: [
                [B, E, B, E, B, E, B, E, B, E, B, B],
                [B, B, B, B, B, B, B, B, B, B, B, E],
                [B, B, B, B, B, B, B, B, B, B, B, B],
                [B, B, B, B, B, B, B, B, B, B, B, E],
                [B, B, B, B, B, B, B, B, B, B, B, B],
                [B, B, B, B, B, B, B, B, B, B, B, E]
            ],
            zIndices: [
                [1],
                [g, g, g, g, g, g, g, g, g, g, g, 1],
                [g, g, g, g, g, g, g, g, g, g, g, d],
                [g, g, g, g, g, g, g, g, g, g, g, d],
                [g, g, g, g, g, g, g, g, g, g, g, 1],
                [g, g, g, g, g, g, g, g, g, g, g, 1]
            ]
        },
        floor: {
            hslaColours: [
                [F],
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

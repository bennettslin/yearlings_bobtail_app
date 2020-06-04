import { CLUB_SIDE_STAGE_KEY } from '../../../../../app/constants/scene/scenes'

import {
    OLD_FLOOR_COLOUR as F,
    CLUB_WALL_COLOUR as W,
    PLATFORM_COLOUR as P
} from '../../../../../app/constants/scene/cubes/colours'

import { e, g } from '../../../../../app/constants/scene/cubes/zIndices'

export default {
    [CLUB_SIDE_STAGE_KEY]: {
        ceiling: {
            hslaColours: [
                [W]
            ],
            zIndices: [
                [1],
                [1, g],
                [e, g],
                [e, g],
                [1, g]
            ]
        },
        floor: {
            hslaColours: [
                [F],
                [F, P, P, P, P, P, P, P, P, P, F],
                [F, P, P, P, P, P, P, P, P, P, F],
                [F, P, P, P, P, P, P, P, P, P, F],
                [F, P, P, P, P, P, P, P, P, P, F],
                [F]
            ],
            zIndices: [
                [1],
                [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1]
            ]
        }
    }
}

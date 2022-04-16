import { CLUB_SIDE_STAGE_KEY } from '../../../../../src/constants/scene/scenes'

import {
    OLD_FLOOR_COLOUR as F,
    CLUB_SIDE_PRIMARY_COLOUR as B,
    CLUB_SIDE_SECONDARY_COLOUR as E,
    PLATFORM_COLOUR as P,
} from '../../../../../src/constants/scene/cubes/colours'

import { e, g } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [CLUB_SIDE_STAGE_KEY]: {
        ceiling: {
            hslaColours: [
                [B, B, E, B, E, B, E, B, E, B, E, B],
                [E, B, B, B, B, B, B, B, B, B, B, B],
                [B, B, B, B, B, B, B, B, B, B, B, B],
                [E, B, B, B, B, B, B, B, B, B, B, B],
                [B, B, B, B, B, B, B, B, B, B, B, B],
                [E, B, B, B, B, B, B, B, B, B, B, B],
            ],
            zIndices: [
                [1],
                [1, g],
                [e, g],
                [e, g],
                [1, g],
            ],
        },
        floor: {
            hslaColours: [
                [F],
                [F, P, P, P, P, P, P, P, P, F],
                [F, P, P, P, P, P, P, P, P, F],
                [F, P, P, P, P, P, P, P, P, F],
                [F, P, P, P, P, P, P, P, P, F],
                [F],
            ],
            zIndices: [
                [1],
                [1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 2, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 2, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1],
            ],
        },
    },
}

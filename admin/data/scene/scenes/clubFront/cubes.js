import { CLUB_FRONT_KEY } from '../../../../../src/constants/scene/scenes'

import {
    OLD_FLOOR_COLOUR as F,
    CLUB_FRONT_PRIMARY_COLOUR as B,
    CLUB_FRONT_SECONDARY_COLOUR as E,
    PLATFORM_COLOUR as P,
} from '../../../../../src/constants/scene/cubes/colours'

import { g } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [CLUB_FRONT_KEY]: {
        ceiling: {
            hslaColours: [
                [B, E, B, E, B, E, B, E, B, E, B, B],
                [B, B, B, B, B, B, B, B, B, B, B, E],
                [E, B, B, B, B, B, B, B, B, B, B, B],
                [B, B, B, B, B, B, B, B, B, B, B, E],
                [E, B, B, B, B, B, B, B, B, B, B, B],
                [B, B, B, B, B, B, B, B, B, B, B, E],
            ],
            zIndices: [
                [1],
                [1, g, g, g, g, g, g, g, g, g, g, 1],
            ],
        },
        floor: {
            hslaColours: [
                [F],
                [F, P, P, P, P, P, P, P, P, P, P, F],
                [F, P, P, P, P, P, P, P, P, P, P, F],
                [F, P, P, P, P, P, P, P, P, P, P, F],
                [F, P, P, P, P, P, P, P, P, P, P, F],
                [F],
            ],
            zIndices: [
                [1],
                [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
                [1],
            ],
        },
    },
}

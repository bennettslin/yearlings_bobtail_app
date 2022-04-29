import {
    CLUB_SIDE_CROWD_DARK_KEY,
    CLUB_SIDE_CROWD_KEY,
} from '../../../../../src/constants/scene/scenes'
import {
    OLD_FLOOR_COLOUR as F,
    CLUB_SIDE_PRIMARY_COLOUR as B,
    CLUB_SIDE_SECONDARY_COLOUR as E,
    DARK_ROOM_COLOUR as Z,
    PLATFORM_COLOUR as P,
} from '../../../../../src/constants/scene/cubes/colours'
import { d, g } from '../../../../../src/constants/scene/cubes/zIndices'

const DEFAULT_CEILING = {
    zIndices: [
        [1],
        [g, g, g, g, g, g, g, g, g, g, g, 1],
        [g, g, g, g, g, g, g, g, g, g, g, d],
        [g, g, g, g, g, g, g, g, g, g, g, d],
        [g, g, g, g, g, g, g, g, g, g, g, d],
        [g, g, g, g, g, g, g, g, g, g, g, 1],
    ],
}

const DEFAULT_FLOOR = {
    zIndices: [
        [1],
        [3, 3, 3, 3, 1],
        [3, 3, 3, 3, 1],
        [3, 3, 3, 3, 1],
        [3, 3, 3, 3, 1],
        [1],
    ],
}

export default {
    [CLUB_SIDE_CROWD_KEY]: {
        ceiling: {
            hslaColours: [
                [B, E, B, E, B, E, B, E, B, E, B, B],
                [B, B, B, B, B, B, B, B, B, B, B, E],
                [B, B, B, B, B, B, B, B, B, B, B, B],
                [B, B, B, B, B, B, B, B, B, B, B, E],
                [B, B, B, B, B, B, B, B, B, B, B, B],
                [B, B, B, B, B, B, B, B, B, B, B, E],
            ],
            zIndices: DEFAULT_CEILING.zIndices,
        },
        floor: {
            hslaColours: [
                [F],
                [P, P, P, P, F],
                [P, P, P, P, F],
                [P, P, P, P, F],
                [P, P, P, P, F],
                [F],
            ],
            zIndices: DEFAULT_FLOOR.zIndices,
        },
    },
    [CLUB_SIDE_CROWD_DARK_KEY]: {
        ceiling: {
            hslaColours: [
                [Z],
            ],
            zIndices: DEFAULT_CEILING.zIndices,
        },
        floor: {
            hslaColours: [
                [Z],
                [P, P, P, P, Z],
                [P, P, P, P, Z],
                [P, P, P, P, Z],
                [P, P, P, P, Z],
                [Z],
            ],
            zIndices: DEFAULT_FLOOR.zIndices,
        },
    },
}

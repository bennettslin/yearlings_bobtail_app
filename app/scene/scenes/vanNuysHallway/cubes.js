import { VAN_NUYS_HALLWAY_KEY } from '../../../constants/scene/scenes'

import {
    SCHOOL_FLOOR_COLOUR as F,
    SCHOOL_WALL_COLOUR as W,
    SEAT_COLOUR as S
} from '../../../constants/scene/cubes/colours'

import { d, g } from '../../cubes/zIndices'

export default {
    [VAN_NUYS_HALLWAY_KEY]: {
        ceiling: {
            hslaColours: [
                [W]
            ],
            zIndices: [
                [1],
                [1, g, g, g, g, g, g, g, g, g, g, 1],
                [1, g, g, g, g, g, g, g, g, g, g, 1],
                [1, 1, d, d, d, 1],
                [1, g, g, g, g, g, g, g, g, g, g, 1]
            ]
        },
        floor: {
            hslaColours: [
                [F],
                [F],
                [F],
                [F],
                [F, F, F, F, F, F, S, S, S, S, F],
                [F]
            ],
            zIndices: [
                [1],
                [1],
                [1],
                [1],
                [1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 1],
                [1]
            ]
        }
    }
}

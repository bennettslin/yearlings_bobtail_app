import { BACKSTAGE_KEY } from '../../../../../src/constants/scene/scenes'

import {
    OLD_FLOOR_COLOUR as F,
    SCHOOL_WALL_COLOUR as W,
} from '../../../../../src/constants/scene/cubes/colours'

import { e, g } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [BACKSTAGE_KEY]: {
        ceiling: {
            hslaColours: [
                [W],
            ],
            zIndices: [
                [1],
                [1, g, g, g, g, g, g, g, g, g, g, 1],
                [e, g, g, g, g, g, g, g, g, g, g, e],
                [e, g, g, g, g, g, g, g, g, g, g, e],
                [e, g, g, g, g, g, g, g, g, g, g, e],
                [1, g, g, g, g, g, g, g, g, g, g, 1],
            ],
        },
        floor: {
            hslaColours: [
                [F],
                [F],
            ],
            zIndices: [
                [1],
                [1],
            ],
        },
    },
}

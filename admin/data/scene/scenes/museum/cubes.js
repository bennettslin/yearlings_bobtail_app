import { MUSEUM_KEY } from '../../../../../app/constants/scene/scenes'

import {
    WOOD_FLOOR_COLOUR as F,
    FANCY_WALL_COLOUR as W,
    PLATFORM_COLOUR as P,
} from '../../../../../app/constants/scene/cubes/colours'

import { d, g } from '../../../../../app/constants/scene/cubes/zIndices'

export default {
    [MUSEUM_KEY]: {
        ceiling: {
            hslaColours: [
                [W],
            ],
            zIndices: [
                [1],
                [1, g, g, g, g, g, g, g, g, g, g, 1],
                [d, g, g, g, g, g, g, g, g, g, g, 1],
                [d, g, g, g, g, g, g, g, g, g, g, 1],
                [d, g, g, g, g, g, g, g, g, g, g, 1],
                [1, g, g, g, g, g, g, g, g, g, g, 1],
            ],
        },
        floor: {
            hslaColours: [
                [W],
                [F],
                [F],
                [F, F, F, F, F, F, F, F, P, P, F],
                [F, F, F, F, F, F, F, F, P, P, F],
                [F],
            ],
            zIndices: [
                [1],
                [1],
                [1],
                [1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1],
                [1],
            ],
        },
    },
}

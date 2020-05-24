import { BACKSTAGE_KEY } from '../../../constants/scene/scenes'

import {
    OLD_FLOOR_COLOUR as F,
    SCHOOL_WALL_COLOUR as W
} from '../../cubes/colours'

import { d, g } from '../../cubes/zIndices'

export default {
    [BACKSTAGE_KEY]: {
        ceiling: {
            hslaColours: [
                [W]
            ],
            zIndices: [
                [1],
                [1, g, g, g, g, g, g, g, g, g, g, 1],
                [d, g, g, g, g, g, g, g, g, g, g, d],
                [d, g, g, g, g, g, g, g, g, g, g, d],
                [d, g, g, g, g, g, g, g, g, g, g, d],
                [1, g, g, g, g, g, g, g, g, g, g, 1]
            ]
        },
        floor: {
            hslaColours: [
                [F],
                [F]
            ],
            zIndices: [
                [1],
                [1]
            ]
        }
    }
}

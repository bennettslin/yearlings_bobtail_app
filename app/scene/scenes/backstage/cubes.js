import { BACKSTAGE_KEY } from '../../../constants/scene/scenes'

import {
    CEILING_COLOUR as C,
    OLD_FLOOR_COLOUR as F,
    BACKSTAGE_WALL_COLOUR as W
} from '../../cubes/colours'

import { g } from '../../cubes/zIndices'

const CUBES = {
    [BACKSTAGE_KEY]: {
        ceiling: {
            hslaColours: [
                [W],
                [W, C, C, C, C, C, C, C, C, C, C, W]
            ],
            zIndices: [
                [1],
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

export default CUBES

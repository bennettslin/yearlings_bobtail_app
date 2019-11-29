import { MUSEUM_KEY } from '../../../constants/scene/scenes'

import {
    CEILING_COLOUR as C,
    WOOD_FLOOR_COLOUR as F,
    MUSEUM_WALL_COLOUR as W,
    FURNITURE_COLOUR as R
} from '../../cubes/colours'

import { d, g } from '../../cubes/zIndices'

const CUBES = {
    [MUSEUM_KEY]: {
        ceiling: {
            hslaColours: [
                [W],
                [W, C, C, C, C, C, C, C, C, C, C, W]
            ],
            zIndices: [
                [1],
                [1, g, g, g, g, g, g, g, g, g, g, 1],
                [d, g, g, g, g, g, g, g, g, g, g, 1],
                [d, g, g, g, g, g, g, g, g, g, g, 1],
                [d, g, g, g, g, g, g, g, g, g, g, 1],
                [1, g, g, g, g, g, g, g, g, g, g, 1]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [F],
                [F],
                [F, F, F, F, F, F, F, F, R, R, F],
                [F, F, F, F, F, F, F, F, R, R, F],
                [F]
            ],
            zIndices: [
                [g],
                [1],
                [1],
                [1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1],
                [1]
            ]
        }
    }
}

export default CUBES

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
                [C],
                [C],
                [W, C],
                [W, C],
                [W, C],
                [C]
            ],
            zIndices: [
                [g],
                [g],
                [d, g],
                [d, g],
                [d, g],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, F, F, F, F, F, F, F, F, F, F, W],
                [F, F, F, F, F, F, F, F, F, F, F, W],
                [F, F, F, F, F, F, F, F, R, R, F, W],
                [F, F, F, F, F, F, F, F, R, R, F, W],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, g],
                [1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    }
}

export default CUBES

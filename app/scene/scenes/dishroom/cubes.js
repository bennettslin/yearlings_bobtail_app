import { DISHROOM_KEY } from '../../../constants/scene/scenes'

import {
    CEILING_COLOUR as C,
    LINOLEUM_FLOOR_COLOUR as F,
    LINOLEUM_FLOOR_DARK_COLOUR as L,
    DISHROOM_WALL_COLOUR as W,
    CONCRETE_PLATFORM_COLOUR as P,
    FURNITURE_COLOUR as R
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { b, f, g } from '../../cubes/zIndices'

const CUBES = {
    [DISHROOM_KEY]: {
        ceiling: {
            hslaColours: [
                [W],
                [W, C, C, C, C, C, C, C, C, C, C, W]
            ],
            zIndices: [
                [1, 1, f, f, f, f, f, 1, f, f, f, 1],
                [1, g, g, g, g, g, g, g, g, g, g, 1]
            ]
        },
        floor: {
            hslaColours: [
                [F, F, W, W, W, W, W, F, P, P, P, F],
                [F, F, R, R, R, R, R, F, P, P, P, F],
                [F, L, R, R, R, R, R, L, P, P, P, F],
                [F, F, L, F, L, F, L, F, P, P, P, F],
                [F, L, F, L, F, L, F, L, P, P, P, F],
                [F, F, L, F, L, F, L, F, L, F, L, F]
            ],
            zIndices: [
                [1, 1, b, b, b, b, b, 1, 5, 5, 5, 1],
                [1, 1, 7, 7, 7, 7, 7, 1, 5, 5, 5, 1],
                [1, 1, 7, 7, 7, 7, 7, 1, 4, 4, 4, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        }
    }
}

export default CUBES

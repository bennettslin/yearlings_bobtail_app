import { DISHROOM_KEY } from '../../../constants/scene/scenes'

import {
    CEILING_COLOUR as C,
    LINOLEUM_FLOOR_COLOUR as F,
    DISHROOM_WALL_COLOUR as W,
    PLATFORM_COLOUR as P,
    FURNITURE_COLOUR as R
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { b, f, g } from '../../cubes/zIndices'

const CUBES = {
    [DISHROOM_KEY]: {
        ceiling: {
            hslaColours: [
                [C, C, W, W, W, W, W, W, W, W, W, C],
                [C]
            ],
            zIndices: [
                [g, g, f, f, f, f, f, g, f, f, f, g],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [W, W, W, W, W, W, W, W, P, P, P, W],
                [W, F, R, R, R, R, R, F, P, P, P, W],
                [W, F, R, R, R, R, R, F, P, P, P, W],
                [W, F, F, F, F, F, F, F, P, P, P, W],
                [W, F, F, F, F, F, F, F, P, P, P, W],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [g, g, b, b, b, b, b, g, 5, 5, 5, g],
                [g, 1, 7, 7, 7, 7, 7, 1, 5, 5, 5, g],
                [g, 1, 7, 7, 7, 7, 7, 1, 4, 4, 4, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    }
}

export default CUBES

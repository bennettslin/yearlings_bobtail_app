import { ATTIC_KEY } from '../../../constants/scene/scenes'

import {
    CEILING_COLOUR as C,
    FLOOR_COLOUR as F,
    WALL_COLOUR as W,
    PLATFORM_COLOUR as P,
    UPHOLSTERY_COLOUR as U
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { a, c, e, f, g } from '../../cubes/zIndices'

const CUBES = {
    [ATTIC_KEY]: {
        ceiling: {
            hslaColours: [
                [W, C, C, C, C, C, C, W, C, C, C, W]
            ],
            zIndices: [
                [g, e, e, f, f, g, g, g, f, f, f, g]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, F, U, U, U, U, F, W, F, F, F, W],
                [W, F, U, U, U, U, F, W, F, F, F, W],
                [W, F, U, U, U, U, F, W, F, F, F, W],
                [W, F, F, F, F, F, F, W, P, P, F, W],
                [W, F, F, F, F, F, F, W, P, P, F, W]
            ],
            zIndices: [
                [g],
                [g, 7, c, c, c, c, 7, g, 1, 1, 1, g],
                [g, 7, a, a, a, a, 7, g, 1, 1, 1, g],
                [g, 7, a, a, a, a, 7, g, 1, 1, 1, g],
                [g, 7, 7, 7, 7, 7, 7, g, 3, 2, 1, g],
                [g, 7, 7, 7, 7, 7, 7, g, 3, 2, 1, g]
            ]
        }
    }
}

export default CUBES

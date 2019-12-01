import { DISHROOM_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    CEILING_COLOUR as C,
    LINOLEUM_FLOOR_COLOUR as F,
    LINOLEUM_FLOOR_DARK_COLOUR as L,
    SCHOOL_WALL_COLOUR as W,
    CONCRETE_PLATFORM_COLOUR as P
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { a, f, g } from '../../cubes/zIndices'

const CUBES = {
    [DISHROOM_KEY]: {
        ceiling: {
            hslaColours: [
                [W],
                [W],
                [W, C, C, C, C, C, C, C, C, C, C, W]
            ],
            zIndices: [
                [0],
                [0, 0, f, f, f, f, f, 0],
                [0, g, g, g, g, g, g, g, g, g, g, 0]
            ]
        },
        floor: {
            hslaColours: [
                [F, L, F, L, F, L, F, L, F, L, F, L],
                [L, F, W, W, W, W, W, F, L, F, L, F],
                [F, L, D, D, D, D, D, L, P, P, P, L],
                [F, F, L, F, L, F, L, F, P, P, P, F],
                [F, L, F, L, F, L, F, L, P, P, P, L],
                [F, F, L, F, L, F, L, F, P, P, P, F]
            ],
            zIndices: [
                [0],
                [0, 0, a, a, a, a, a, 0],
                [0, 0, 6, 6, 6, 6, 6, 0, 4, 4, 4, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0]
            ]
        }
    }
}

export default CUBES

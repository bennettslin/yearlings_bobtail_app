import { DISHROOM_KEY } from '../../../constants/scene/scenes'

import {
    CEILING_COLOUR as C,
    GROUND_COLOUR as G,
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
                [0, 0, f, f, f, f, f, 0, f, f, f, 0],
                [0, g, g, g, g, g, g, g, g, g, g, 0]
            ]
        },
        floor: {
            hslaColours: [
                [G, G, G, G, G, G, G, G, P, P, P, G],
                [G, F, R, R, R, R, R, F, P, P, P, G],
                [G, L, R, R, R, R, R, L, P, P, P, G],
                [G, F, L, F, L, F, L, F, P, P, P, G],
                [G, L, F, L, F, L, F, L, P, P, P, G],
                [G, F, L, F, L, F, L, F, L, F, L, G]
            ],
            zIndices: [
                [0, 0, b, b, b, b, b, 0, 5, 5, 5, 0],
                [0, 1, 7, 7, 7, 7, 7, 1, 5, 5, 5, 0],
                [0, 1, 7, 7, 7, 7, 7, 1, 4, 4, 4, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    }
}

export default CUBES

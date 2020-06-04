import { BASEMENT_KEY } from '../../../../../app/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    PAVEMENT_COLOUR as V,
    DIRT_FLOOR_COLOUR as F,
    UNDERGROUND_WALL_COLOUR as W,
    SEAT_COLOUR as S
} from '../../../../../app/constants/scene/cubes/colours'

// eslint-disable-next-line object-curly-newline
import { a, e, k } from '../../../../../app/constants/scene/cubes/zIndices'

export const DEFAULT_CEILING = {
    hslaColours: [
        [D],
        [W, W, W, W, W],
        [W]
    ],
    zIndices: [
        [k],
        [2, 2, a, a, 2],
        [2, e, e, e, e, e, e, e, e, e, e, 2]
    ]
}

export default {
    [BASEMENT_KEY]: {
        ceiling: DEFAULT_CEILING,
        floor: {
            hslaColours: [
                [G],
                [V],
                [V, F, V, V, F, F, F, F, F, F, F, V],
                [V, F, V, V, F, F, F, F, F, F, F, V],
                [V, F, F, F, S, F, F, S, F, F, F, V],
                [V, F, F, S, F, F, F, F, F, S, F, V]
            ],
            zIndices: [
                [0],
                [2],
                [2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2],
                [2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2],
                [2, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 2],
                [2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2]
            ]
        }
    }
}

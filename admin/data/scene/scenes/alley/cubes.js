import { ALLEY_KEY } from '../../../../../app/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    PAVEMENT_COLOUR as V,
    INDUSTRIAL_WALL_COLOUR as W,
    GENERIC_EXTERIOR_COLOUR as X,
    PLATFORM_COLOUR as P,
} from '../../../../../app/constants/scene/cubes/colours'

import { d, e, k } from '../../../../../app/constants/scene/cubes/zIndices'

export default {
    [ALLEY_KEY]: {
        ceiling: {
            hslaColours: [
                [W],
                [X],
                [D, D, D, D, D, D, D, X, D, D, D, X],
                [D, D, D, D, D, D, D, X, X, X, X, X],
                [D],
            ],
            zIndices: [
                [0],
                [4, e, e, e, e, e, 4, 1],
                [k, k, k, k, k, k, k, d, k, k, k, d],
                [k, k, k, k, k, k, k, d, d, d, d, d],
                [k],
            ],
        },
        floor: {
            hslaColours: [
                [G],
                [P, P, P, P, P, P, P, V],
                [P, P, P, P, P, P, P, V],
                [V],
            ],
            zIndices: [
                [0],
                [4, 4, 4, 4, 4, 4, 4, 1],
                [4, 4, 4, 4, 4, 4, 4, 1],
                [1],
            ],
        },
    },
}

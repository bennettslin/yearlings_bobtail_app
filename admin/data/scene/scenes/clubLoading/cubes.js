import { CLUB_LOADING } from '../../../../../src/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    PAVEMENT_COLOUR as V,
    ROOF_COLOUR as C,
    OLD_FLOOR_COLOUR as F,
    CLUB_SIDE_PRIMARY_COLOUR as B,
    CLUB_SIDE_SECONDARY_COLOUR as E,
    GENERIC_EXTERIOR_COLOUR as X,
} from '../../../../../src/constants/scene/cubes/colours'

import { d, f, k } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [CLUB_LOADING]: {
        ceiling: {
            hslaColours: [
                [C, B, E, B, E, B, E, B, E, B, E, C],
                [C, X, C, C, C, C, C, C, C, C, X, C],
                [C, X, X, X, X, X, X, X, X, X, X, C],
                [C],
                [C],
                [D],
            ],
            zIndices: [
                [f, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, f],
                [f, 1, f, f, f, f, f, f, f, f, 1, f],
                [f, 1, 1, 1, d, d, d, 1, 1, 1, 1, f],
                [f],
                [f],
                [k],
            ],
        },
        floor: {
            hslaColours: [
                [G],
                [V, F, F, F, F, F, F, F, F, F, F, V],
                [V, F, F, F, F, F, F, F, F, F, F, V],
                [V],
            ],
            zIndices: [
                [0],
                [1],
            ],
        },
    },
}

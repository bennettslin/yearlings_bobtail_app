import { CINEMA_STREET_KEY } from '../../../../../app/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    STREET_COLOUR as T,
    PAVEMENT_COLOUR as V,
    ROOF_COLOUR as C,
    VELVET_FLOOR_COLOUR as F,
    CINEMA_EXTERIOR_COLOUR as X,
} from '../../../../../app/constants/scene/cubes/colours'

import { f, k } from '../../../../../app/constants/scene/cubes/zIndices'

export default {
    [CINEMA_STREET_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [C, C, C, C, D],
                [C, C, X, C, D],
                [X, X, X, C, D],
                [C, C, C, C, D],
            ],
            zIndices: [
                [k],
                [f, f, f, f, k],
                [f, f, 1, f, k],
                [1, 1, 1, f, k],
                [f, f, f, f, k],
            ],
        },
        floor: {
            hslaColours: [
                [G],
                [V],
                [F, F, F, V, T, T, T, T, V],
                [F, F, F, V, T, T, T, T, T, V],
                [V, V, V, V, T, T, T, T, T, T, V],
                [V, V, V, V, T],
            ],
            zIndices: [
                [0],
                [1],
                [1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0],
            ],
        },
    },
}

import { CLUB_LOADING_KEY } from '../../../../../src/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    PAVEMENT_NIGHT_COLOUR as V,
    ROOF_NIGHT_COLOUR as C,
    DARK_ROOM_COLOUR as Z,
    GENERIC_NIGHT_COLOUR as X,
} from '../../../../../src/constants/scene/cubes/colours'

import { d, f, k } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [CLUB_LOADING_KEY]: {
        ceiling: {
            hslaColours: [
                [C, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, C],
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
                [V, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, V],
                [V, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, V],
                [V],
            ],
            zIndices: [
                [0],
                [1],
            ],
        },
    },
}

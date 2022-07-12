import { TAIWAN_GATE_KEY } from '../../../../../src/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    STREET_NIGHT_COLOUR as T,
    PAVEMENT_NIGHT_COLOUR as V,
    ROOF_NIGHT_COLOUR as C,
    TAIWAN_GATE_NIGHT_COLOUR as A,
    TAIWAN_WALL_NIGHT_COLOUR as X,
    DARK_ROOM_COLOUR as Z,
} from '../../../../../src/constants/scene/cubes/colours'

import { c, e, f, k } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [TAIWAN_GATE_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [C, C, C, C, D],
                [Z, Z, X, C, D],
                [X, X, X, C, D],
                [C, C, C, C, D],
                [D],
            ],
            zIndices: [
                [k],
                [f, f, f, f, k],
                [1, 1, 1, f, k],
                [e, e, 1, f, k],
                [f, f, f, f, k],
                [k],
            ],
        },
        floor: {
            hslaColours: [
                [T],
                [T],
                [V, V, V, A, V, T, T, T, T, T, V],
                [X, X, V, A, V, T, T, T, T, T, T, V],
                [V, V, V, A, V, T],
                [V, V, V, V, V, T],
            ],
            zIndices: [
                [0],
                [0],
                [1, 1, 1, c, 1, 0, 0, 0, 0, 0, 1],
                [7, 7, 1, c, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, c, 1, 0],
                [1, 1, 1, 1, 1, 0],
            ],
        },
    },
}

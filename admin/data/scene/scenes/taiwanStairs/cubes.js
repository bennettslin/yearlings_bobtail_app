import { TAIWAN_STAIRS_KEY } from '../../../../../src/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    PAVEMENT_NIGHT_COLOUR as V,
    TAIWAN_GATE_NIGHT_COLOUR as A,
    DARK_ROOM_COLOUR as Z,
} from '../../../../../src/constants/scene/cubes/colours'

import { f, g, k } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [TAIWAN_STAIRS_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [D],
                [D],
                [Z],
            ],
            zIndices: [
                [k],
                [k],
                [k],
                [0, 0, f, f, f, f, 0],
                [0, g, g, g, g, g, g, g, g, g, g, 5],
                [0, g, g, g, g, g, g, g, g, g, g, 5],
            ],
        },
        floor: {
            hslaColours: [
                [A],
                [A, A, V, V, V, A],
                [A, V, V, V, V, V, V, V, V, V, A],
                [Z],
            ],
            zIndices: [
                [1],
                [7, 7, 2, 2, 2, 7],
                [2],
                [0, 0, 6, 6, 6, 6, 0],
                [0, 0, 0, 0, 1, 2, 3, 4, 5],
                [0, 0, 0, 0, 1, 2, 3, 4, 5],
            ],
        },
    },
}

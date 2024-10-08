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
                [Z],
            ],
            zIndices: [
                [k],
                [k],
                [0, 0, f, f, f, f, 0],
                [0, g, g, g, g, g, g, g, g, g, g, 5],
            ],
        },
        floor: {
            hslaColours: [
                [A],
                [V, V, V, A],
                [Z],
            ],
            zIndices: [
                [2],
                [3, 3, 3, 8],
                [0, 0, 6, 6, 6, 6, 0],
                [0, 0, 0, 0, 1, 2, 3, 4, 5],
            ],
        },
    },
}

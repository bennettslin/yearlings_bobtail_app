import { OAKLAND_COMMERCIAL_KEY } from '../../../../../src/constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    STREET_NIGHT_COLOUR as T,
    PAVEMENT_NIGHT_COLOUR as V,
} from '../../../../../src/constants/scene/cubes/colours'

export default {
    [OAKLAND_COMMERCIAL_KEY]: {
        floor: {
            hslaColours: [
                [D],
                [V],
                [V, V, V, V, T, T, T, T, V],
                [V, V, V, T, T, T, T, T, T, V],
                [V, V, T, T, T, T, T, T, T, T, V],
                [T],
            ],
            zIndices: [
                [0],
                [1],
                [1, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [0],
            ],
        },
    },
}

import { TAIWAN_GATE_KEY } from '../../../constants/scene/scenes'

import {
    STREET_COLOUR as T,
    PAVEMENT_COLOUR as V,
    TAIWAN_GATE_COLOUR as A,
    GENERIC_EXTERIOR_COLOUR as X
} from '../../../constants/scene/cubes/colours'

import { b, g } from '../../../constants/scene/cubes/zIndices'

export default {
    [TAIWAN_GATE_KEY]: {
        floor: {
            hslaColours: [
                [T],
                [T],
                [X, X, X, A, V, T, T, T, T, T, V],
                [V, V, V, A, V, T],
                [V, V, V, A, V, T],
                [V, V, V, V, V, T]
            ],
            zIndices: [
                [0],
                [0],
                [g, g, g, b, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, b, 1, 0],
                [1, 1, 1, b, 1, 0],
                [1, 1, 1, 1, 1, 0]
            ]
        }
    }
}

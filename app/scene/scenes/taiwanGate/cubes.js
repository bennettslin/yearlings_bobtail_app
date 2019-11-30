import { TAIWAN_GATE_KEY } from '../../../constants/scene/scenes'

import {
    STREET_COLOUR as T,
    PAVEMENT_COLOUR as V,
    TAIWAN_GATE_COLOUR as A,
    EXTERIOR_COLOUR as X
} from '../../cubes/colours'

import { b, g } from '../../cubes/zIndices'

const CUBES = {
    [TAIWAN_GATE_KEY]: {
        floor: {
            hslaColours: [
                [T],
                [T],
                [X, X, X, V, A, V, T, T, T, T, V, V],
                [V, V, V, V, A, V, T],
                [A, V, V, V, A, V, T],
                [V, V, V, V, V, V, T]
            ],
            zIndices: [
                [0],
                [0],
                [g, g, g, 1, b, 1, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, b, 1, 0],
                [b, 1, 1, 1, b, 1, 0],
                [1, 1, 1, 1, 1, 1, 0]
            ]
        }
    }
}

export default CUBES

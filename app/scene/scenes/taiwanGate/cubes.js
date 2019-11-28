import { TAIWAN_GATE_KEY } from '../../../constants/scene/scenes'

import {
    STREET_COLOUR as T,
    PAVEMENT_COLOUR as V,
    GATE_COLOUR as A,
    WALL_COLOUR as W
} from '../../cubes/colours'

import { d, g } from '../../cubes/zIndices'

const CUBES = {
    [TAIWAN_GATE_KEY]: {
        floor: {
            hslaColours: [
                [T],
                [T],
                [W, W, W, V, A, V, T, T, T, T, V, V],
                [V, V, V, V, A, V, T],
                [A, V, V, V, A, V, T],
                [V, V, V, V, V, V, T]
            ],
            zIndices: [
                [0],
                [0],
                [g, g, g, 1, d, 1, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, d, 1, 0],
                [d, 1, 1, 1, d, 1, 0],
                [1, 1, 1, 1, 1, 1, 0]
            ]
        }
    }
}

export default CUBES

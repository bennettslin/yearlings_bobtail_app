import { BERKELEY_CAMPANILE_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    ROOF_COLOUR as C,
    PAVEMENT_COLOUR as V,
    BANCROFT_GATE_COLOUR as A,
    BANCROFT_EXTERIOR_COLOUR as X,
    CONCRETE_PLATFORM_COLOUR as P
} from '../../cubes/colours'

import { g, k } from '../../cubes/zIndices'

export default {
    [BERKELEY_CAMPANILE_KEY]: {
        ceiling: {
            hslaColours: [
                [C, C, C, D],
                [X, X, C, D],
                [X, X, C, D],
                [C, C, C, D],
                [D]
            ],
            zIndices: [
                [g, g, g, k],
                [3, 3, g, k],
                [3, 3, g, k],
                [g, g, g, k],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [G],
                [V],
                [P, P, A, V],
                [A, A, A, V],
                [V]
            ],
            zIndices: [
                [0],
                [1],
                [3, 3, 9, 1],
                [9, 9, 9, 1],
                [1]
            ]
        }
    }
}

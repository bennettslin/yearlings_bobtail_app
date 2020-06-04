import { BERKELEY_BANCROFT_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    ROOF_COLOUR as C,
    PAVEMENT_COLOUR as V,
    BANCROFT_GATE_COLOUR as A,
    BANCROFT_EXTERIOR_COLOUR as X,
    CONCRETE_PLATFORM_COLOUR as P
} from '../../../constants/scene/cubes/colours'

// eslint-disable-next-line object-curly-newline
import { f, g, k } from '../../cubes/zIndices'

export default {
    [BERKELEY_BANCROFT_KEY]: {
        ceiling: {
            hslaColours: [
                [D, D, D, D, C],
                [D, D, D, D, C, X],
                [D, D, D, D, C, X],
                [D, D, D, D, C],
                [D]
            ],
            zIndices: [
                [k, k, k, k, g],
                [k, k, k, k, g, 3],
                [k, k, k, k, g, 3, 3, 3, f, f, f, 3],
                [k, k, k, k, g],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [G],
                [V],
                [V, V, V, V, A, P],
                [V, V, V, V, A, A, A, P, P, P, P, P],
                [V, V, V, V, V, V, V, P, P, P, P, P],
                [V]
            ],
            zIndices: [
                [0],
                [1],
                [1, 1, 1, 1, 9, 3],
                [1, 1, 1, 1, 9, 9, 9, 3],
                [1, 1, 1, 1, 1, 1, 1, 2],
                [1]
            ]
        }
    }
}

import { BERKELEY_BANCROFT_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    GROUND_COLOUR as G,
    PAVEMENT_COLOUR as V,
    BANCROFT_GATE_COLOUR as A,
    BANCROFT_EXTERIOR_COLOUR as X,
    CONCRETE_PLATFORM_COLOUR as P
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { f, k } from '../../cubes/zIndices'

const CUBES = {
    [BERKELEY_BANCROFT_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [D, D, D, D, D, X],
                [D, D, D, D, D, X],
                [D]
            ],
            zIndices: [
                [k],
                [k, k, k, k, k, 3],
                [k, k, k, k, k, 3, 3, 3, f, f, f, 3],
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

export default CUBES

import { BERKELEY_CAMPANILE_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    PAVEMENT_COLOUR as V,
    BANCROFT_GATE_COLOUR as A,
    BANCROFT_EXTERIOR_COLOUR as X,
    CONCRETE_PLATFORM_COLOUR as P
} from '../../cubes/colours'

import { k } from '../../cubes/zIndices'

const CUBES = {
    [BERKELEY_CAMPANILE_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [X, X, X, D],
                [X, X, X, D],
                [D]
            ],
            zIndices: [
                [k],
                [3, 3, 3, k],
                [3, 3, 3, k],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [G],
                [V],
                [P, P, P, A, V],
                [P, A, A, A, V],
                [P, V],
                [V]
            ],
            zIndices: [
                [0],
                [1],
                [3, 3, 3, 9, 1],
                [3, 9, 9, 9, 1],
                [2, 1],
                [1]
            ]
        }
    }
}

export default CUBES

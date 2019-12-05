import { CINEMA_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    PAVEMENT_COLOUR as V,
    ROOF_COLOUR as C,
    VELVET_FLOOR_COLOUR as F,
    CINEMA_EXTERIOR_COLOUR as X
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { e, f, k } from '../../cubes/zIndices'

const CUBES = {
    [CINEMA_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [C, C, X, X, X, X, X, X, X, X, C],
                [C, C, X, C, C, C, C, C, C, X, C],
                [X, X, X, C, C, C, C, C, C, X],
                [C]

            ],
            zIndices: [
                [k],
                [f, f, 1, 1, e, e, e, e, 1, 1, f],
                [f, f, 1, f, f, f, f, f, f, 1, f],
                [1, 1, 1, f, f, f, f, f, f, 1],
                [f]
            ]
        },
        floor: {
            hslaColours: [
                [G],
                [F],
                [F],
                [F],
                [V]
            ],
            zIndices: [
                [0],
                [1]
            ]
        }
    }
}

export default CUBES

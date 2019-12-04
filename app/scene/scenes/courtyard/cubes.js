import { COURTYARD_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    GROUND_CLEAR_COLOUR as G,
    PAVEMENT_COLOUR as V,
    ROOF_COLOUR as C,
    BENNETT_FLOOR_COLOUR as F,
    BENNETT_FLOOR_DARK_COLOUR as L,
    BENNETT_WALL_COLOUR as W,
    BENNETT_EXTERIOR_COLOUR as X
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { d, f, k } from '../../cubes/zIndices'

/**
 * Blinds and door should match in bennettBed.
 * Gate should match in bennettGate.
 */
const CUBES = {
    [COURTYARD_KEY]: {
        ceiling: {
            hslaColours: [
                [W],
                [X],
                [X, C],
                [X, C, D],
                [X, C, D],
                [X, C, D]
            ],
            zIndices: [
                [0],
                [1, 1, d, d, d, d, 1, d, d, d, 1],
                [1, f, f],
                [d, f, k],
                [d, f, k],
                [1, f, k]
            ]
        },
        floor: {
            hslaColours: [
                [G],
                [V, L, X, X, X, X, F, L, F, L, F, L],
                [V],
                [V],
                [V],
                [V]
            ],
            zIndices: [
                [0],
                [1, 1, 6, 6, 6, 6, 1],
                [1],
                [1],
                [1],
                [1]
            ]
        }
    }
}

export default CUBES

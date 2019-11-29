import { COURTYARD_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    PAVEMENT_COLOUR as V,
    ROOF_COLOUR as C,
    BENNETT_FLOOR_COLOUR as F,
    BENNETT_FLOOR_DARK_COLOUR as L,
    BENNETT_EXTERIOR_COLOUR as W
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
                [C],
                [C, C, W, W, W, W, C, W, W, W, C],
                [C, C, C],
                [W, C, D],
                [W, C, D],
                [C, C, D]
            ],
            zIndices: [
                [f],
                [f, f, d, d, d, d, f, d, d, d, f],
                [f, f, f],
                [d, f, k],
                [d, f, k],
                [f, f, k]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, W, W, W, W, W, W, F, L, F, W],
                [W, V],
                [V, V],
                [V, V],
                [W, V]
            ],
            zIndices: [
                [f],
                [f, f, 6, 6, 6, 6, f, 1, 1, 1, f],
                [f, 1],
                [1, 1],
                [1, 1],
                [f, 1]
            ]
        }
    }
}

export default CUBES

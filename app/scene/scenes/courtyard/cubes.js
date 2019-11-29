import { COURTYARD_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    PAVEMENT_COLOUR as V,
    ROOF_COLOUR as C,
    BENNETT_EXTERIOR_COLOUR as W,
    DOOR_COLOUR as E
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { d, e, f, k } from '../../cubes/zIndices'

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
                [e, f, k],
                [e, f, k],
                [f, f, k]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, W, W, W, W, W, W, E, E, E, W],
                [W, V],
                [E, V],
                [E, V],
                [W, V]
            ],
            zIndices: [
                [f],
                [f, f, 6, 6, 6, 6, f, d, d, d, f],
                [f, 1],
                [d, 1],
                [d, 1],
                [f, 1]
            ]
        }
    }
}

export default CUBES

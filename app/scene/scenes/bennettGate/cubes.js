import { BENNETT_GATE_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    PAVEMENT_COLOUR as V,
    BENNETT_EXTERIOR_COLOUR as X,
    ROOF_COLOUR as C
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { d, f, k } from '../../cubes/zIndices'

/**
 * Gate should match in courtyard.
 */
const CUBES = {
    [BENNETT_GATE_KEY]: {
        ceiling: {
            hslaColours: [
                [X],
                [X],
                [C],
                [C],
                [D]
            ],
            zIndices: [
                [1],
                [1, 1, 1, 1, 1, 1, 1, d, d, d, 1],
                [f],
                [f],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [V]
            ],
            zIndices: [
                [1]
            ]
        }
    }
}

export default CUBES

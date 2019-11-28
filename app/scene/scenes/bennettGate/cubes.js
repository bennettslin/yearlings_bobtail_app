import { BENNETT_GATE_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    PAVEMENT_COLOUR as V,
    GATE_COLOUR as A,
    CEILING_COLOUR as C,
    DOOR_COLOUR as E
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { d, e, f, g, k } from '../../cubes/zIndices'

/**
 * Gate should match in courtyard.
 */
const CUBES = {
    [BENNETT_GATE_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [C, C, C, C, C, C, C, A, A, A, C, C],
                [C],
                [D, D, D, D, D, C],
                [D, D, D, D, D, C],
                [D]
            ],
            zIndices: [
                [k],
                [g, g, g, g, g, g, g, e, e, e, g, g],
                [f],
                [k, k, k, k, k, f],
                [k, k, k, k, k, f],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [V],
                [A, A, A, A, A, A, A, E, E, E, A, A],
                [V]
            ],
            zIndices: [
                [1],
                [g, g, g, g, g, g, g, d, d, d, g, g],
                [1]
            ]
        }
    }
}

export default CUBES

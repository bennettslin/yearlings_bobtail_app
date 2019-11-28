import { BENNETT_GATE_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR,
    PAVEMENT_COLOUR,
    GATE_COLOUR,
    CEILING_COLOUR,
    DOOR_COLOUR
} from '../../cubes/keys/hsla'

import {
    d,
    e,
    f,
    g,
    k
} from '../../cubes/keys/zIndex'

/**
 * Gate should match in courtyard.
 */

const
    D = DEFAULT_COLOUR,
    V = PAVEMENT_COLOUR,
    A = GATE_COLOUR,
    C = CEILING_COLOUR,
    E = DOOR_COLOUR,

    BENNETT_GATE_CUBES = {
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
    },

    CUBES = {
        [BENNETT_GATE_KEY]: BENNETT_GATE_CUBES
    }

export default CUBES

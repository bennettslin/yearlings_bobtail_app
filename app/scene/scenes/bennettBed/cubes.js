import { BENNETT_BED_KEY } from '../../cubesKeys'

import {
    DEFAULT_HSLA,
    PAVEMENT_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    UPHOLSTERY_HSLA
} from '../../hslaKeys'

import {
    d,
    g,
    k
} from '../../zIndexKeys'

/**
 * Blinds and door should match in courtyard.
 * Bed should match in basement.
 */

const
    D = DEFAULT_HSLA,
    V = PAVEMENT_HSLA,
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,
    U = UPHOLSTERY_HSLA,

    BENNETT_BED_CUBES = {
        ceiling: {
            hslaColours: [
                [C],
                [D],
                [C, C, W, W, W, C, W, W, W, W, C],
                [C]
            ],
            zIndices: [
                [g],
                [k],
                [g, g, d, d, d, g, d, d, d, d, g],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [V, V, V, V, V, V, V, V, V, V, V, W],
                [W, W, F, F, F, W],
                [W, F, F, F, F, U, U, U, U, U, U, W],
                [W, F, F, F, F, U, U, U, U, U, U, W],
                [W, F, F, F, F, U, U, U, U, U, U, W]
            ],
            zIndices: [
                [g],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [g, g, 1, 1, 1, g, 6, 6, 6, 6, g],
                [g, 1, 1, 1, 1, 3, 3, 3, 3, 3, 4, g],
                [g, 1, 1, 1, 1, 3, 3, 3, 3, 3, 4, g],
                [g, 1, 1, 1, 1, 3, 3, 3, 3, 3, 4, g]
            ]
        }
    },

    CUBES = {
        [BENNETT_BED_KEY]: BENNETT_BED_CUBES
    }

export default CUBES

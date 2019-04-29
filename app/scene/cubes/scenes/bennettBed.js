import {
    BENNETT_BED_KEY,
    BENNETT_BED_OPEN_KEY
} from '../../cubesKeys'

import {
    DEFAULT_HSLA,
    PAVEMENT_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    DOOR_HSLA,
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
    E = DOOR_HSLA,
    U = UPHOLSTERY_HSLA,

    ceiling = {
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

    BENNETT_BED_CUBES = {
        ceiling,
        floor: {
            hslaColours: [
                [W],
                [V, V, V, V, V, V, V, V, V, V, V, W],
                [W, W, E, E, E, W],
                [W, F, F, F, F, U, U, U, U, U, U, W],
                [W, F, F, F, F, U, U, U, U, U, U, W],
                [W, F, F, F, F, U, U, U, U, U, U, W]
            ],
            zIndices: [
                [g],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [g, g, d, d, d, g, 6, 6, 6, 6, g],
                [g, 1, 1, 1, 1, 3, 3, 3, 3, 3, 4, g],
                [g, 1, 1, 1, 1, 3, 3, 3, 3, 3, 4, g],
                [g, 1, 1, 1, 1, 3, 3, 3, 3, 3, 4, g]
            ]
        }
    },

    BENNETT_BED_OPEN_CUBES = {
        ceiling,
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
        [BENNETT_BED_KEY]: BENNETT_BED_CUBES,
        [BENNETT_BED_OPEN_KEY]: BENNETT_BED_OPEN_CUBES
    }

export default CUBES

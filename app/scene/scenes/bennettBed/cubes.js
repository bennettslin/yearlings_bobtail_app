import {
    BENNETT_BED_KEY,
    BENNETT_BED_OPEN_KEY
} from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR,
    PAVEMENT_COLOUR,
    CEILING_COLOUR,
    FLOOR_COLOUR,
    WALL_COLOUR,
    DOOR_COLOUR,
    UPHOLSTERY_COLOUR
} from '../../cubes/keys/hsla'

import {
    d,
    g,
    k
} from '../../cubes/keys/zIndex'

/**
 * Blinds and door should match in courtyard.
 * Bed should match in basement.
 */

const
    D = DEFAULT_COLOUR,
    V = PAVEMENT_COLOUR,
    C = CEILING_COLOUR,
    F = FLOOR_COLOUR,
    W = WALL_COLOUR,
    E = DOOR_COLOUR,
    U = UPHOLSTERY_COLOUR,

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
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [g],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [g, g, d, d, d, g, 6, 6, 6, 6, g],
                [g, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, g],
                [g, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
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
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [g],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [g, g, 1, 1, 1, g, 6, 6, 6, 6, g],
                [g, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, g],
                [g, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },

    CUBES = {
        [BENNETT_BED_KEY]: BENNETT_BED_CUBES,
        [BENNETT_BED_OPEN_KEY]: BENNETT_BED_OPEN_CUBES
    }

export default CUBES

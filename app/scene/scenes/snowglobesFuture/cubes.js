import {
    SNOWGLOBES_FUTURE_KEY
} from 'scene/cubesKeys'

import {
    GROUND_HSLA,
    FLOOR_HSLA,
    PLATFORM_HSLA,
    UPHOLSTERY_HSLA,
} from '../../hslaKeys'

/**
 * Couch should match in lizCouch.
 */

const
    G = GROUND_HSLA,
    F = FLOOR_HSLA,
    P = PLATFORM_HSLA,
    Q = PLATFORM_HSLA, // Second globe.
    U = UPHOLSTERY_HSLA,

    SNOWGLOBES_FUTURE_CUBES = {
        floor: {
            hslaColours: [
                [G],
                [G, G, G, G, G, G, G, F, F, F, F, G],
                [G, U, U, U, P, P, G, F, F, F, F, G],
                [G, U, U, U, P, P, G, F, F, F, F, G],
                [G, U, U, U, P, P, G, Q, Q, Q, Q, G],
                [G, P, P, P, P, P, G]
            ],
            zIndices: [
                [0],
                [0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 0],
                [0, 7, 3, 3, 1, 1, 0, 5, 5, 5, 5, 0],
                [0, 7, 3, 3, 1, 1, 0, 5, 5, 5, 5, 0],
                [0, 7, 3, 3, 1, 1, 0, 4, 4, 4, 4, 0],
                [0, 1, 1, 1, 1, 1, 0]
            ]
        }
    },

    CUBES = {
        [SNOWGLOBES_FUTURE_KEY]: SNOWGLOBES_FUTURE_CUBES
    }

export default CUBES

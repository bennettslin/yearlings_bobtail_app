import {
    SNOWGLOBES_FUTURE_KEY
} from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR,
    FLOOR_COLOUR,
    PLATFORM_COLOUR,
    UPHOLSTERY_COLOUR
} from '../../cubes/colours'

/**
 * Couch should match in lizCouch.
 */

const
    G = GROUND_COLOUR,
    F = FLOOR_COLOUR,
    P = PLATFORM_COLOUR,
    Q = PLATFORM_COLOUR, // Second globe.
    U = UPHOLSTERY_COLOUR,

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

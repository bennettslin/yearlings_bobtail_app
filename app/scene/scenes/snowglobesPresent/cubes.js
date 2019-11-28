import { SNOWGLOBES_PRESENT_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR,
    PLATFORM_COLOUR,
    UPHOLSTERY_COLOUR
} from '../../cubes/colours'

const
    G = GROUND_COLOUR,
    P = PLATFORM_COLOUR,
    Q = PLATFORM_COLOUR, // Second globe.
    U = UPHOLSTERY_COLOUR,
    Z = UPHOLSTERY_COLOUR, // Second globe.

    SNOWGLOBES_PRESENT_CUBES = {
        floor: {
            hslaColours: [
                [G],
                [G, U, U, U, P, G],
                [G, U, U, U, P, G, Z, Z, Z, Z, Z, G],
                [G, U, U, U, P, G, Z, Z, Z, Z, Z, G],
                [G, P, P, P, P, G, Z, Z, Z, Z, Z, G],
                [G, G, G, G, G, G, Q, Q, Q, Q, Q, G]
            ],
            zIndices: [
                [0],
                [0, 7, 3, 3, 1, 0],
                [0, 7, 3, 3, 1, 0, 7, 7, 7, 7, 7, 0],
                [0, 7, 3, 3, 1, 0, 4, 4, 4, 4, 4, 0],
                [0, 1, 1, 1, 1, 0, 4, 4, 4, 4, 4, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0]
            ]
        }
    },

    CUBES = {
        [SNOWGLOBES_PRESENT_KEY]: SNOWGLOBES_PRESENT_CUBES
    }

export default CUBES

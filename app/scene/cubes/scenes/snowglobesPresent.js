import { SNOWGLOBES_PRESENT_KEY } from 'constants/scene/scenes'

import {
    GROUND_HSLA,
    PLATFORM_HSLA,
    UPHOLSTERY_HSLA
} from '../keys/hsla'

const
    G = GROUND_HSLA,
    P = PLATFORM_HSLA,
    Q = PLATFORM_HSLA, // Second globe.
    U = UPHOLSTERY_HSLA,
    Z = UPHOLSTERY_HSLA, // Second globe.

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

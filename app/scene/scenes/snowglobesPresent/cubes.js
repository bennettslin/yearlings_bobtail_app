import { SNOWGLOBES_PRESENT_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR as G,
    PLATFORM_COLOUR as P,
    UPHOLSTERY_COLOUR as U
} from '../../cubes/colours'

const
    Q = P, // Second globe.
    Z = U // Second globe.

const CUBES = {
    [SNOWGLOBES_PRESENT_KEY]: {
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
    }
}

export default CUBES

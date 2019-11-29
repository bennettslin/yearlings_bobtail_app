import { SNOWGLOBES_FUTURE_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR as G,
    PLATFORM_COLOUR as P,
    BENNETT_FLOOR_COLOUR as F,
    LIZ_COUCH_COLOUR as U
} from '../../cubes/colours'

/**
 * Couch should match in lizCouch.
 */
const CUBES = {
    [SNOWGLOBES_FUTURE_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G, G, G, G, G, G, G, F, F, F, F, G],
                [G, U, U, U, P, P, G, F, F, F, F, G],
                [G, U, U, U, P, P, G, F, F, F, F, G],
                [G, U, U, U, P, P, G, P, P, P, P, G],
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
    }
}

export default CUBES

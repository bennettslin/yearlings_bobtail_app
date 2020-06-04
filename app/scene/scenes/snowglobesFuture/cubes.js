import { SNOWGLOBES_FUTURE_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    SNOWGLOBE_PLATFORM_COLOUR as P,
    SNOW_FLOOR_COLOUR as F,
    LIZ_COUCH_COLOUR as U
} from '../../../constants/scene/cubes/colours'

/**
 * Couch should match in lizCouch.
 */
export default {
    [SNOWGLOBES_FUTURE_KEY]: {
        floor: {
            hslaColours: [
                [G, F, F, F, F, F, G, F, F, F, F, G],
                [G, U, U, U, F, F, G, F, F, F, F, G],
                [G, U, U, U, F, F, G, F, F, F, F, G],
                [G, F, F, F, F, F, G, P, P, P, P, G],
                [G, P, P, P, P, P, G],
                [G]
            ],
            zIndices: [
                [0, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 0],
                [0, 9, 5, 5, 3, 3, 0, 3, 3, 3, 3, 0],
                [0, 9, 5, 5, 3, 3, 0, 3, 3, 3, 3, 0],
                [0, 3, 3, 3, 3, 3, 0, 2, 2, 2, 2, 0],
                [0, 2, 2, 2, 2, 2, 0],
                [0]
            ]
        }
    }
}

import { SNOWGLOBES_PRESENT_KEY } from '../../../../../app/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    SNOW_FLOOR_COLOUR as F,
    PRESENT_PLATFORM_COLOUR as P,
    LIZ_COUCH_COLOUR as U,
    MIRIAM_COUCH_COLOUR as Z,
} from '../../../../../app/constants/scene/cubes/colours'

export default {
    [SNOWGLOBES_PRESENT_KEY]: {
        floor: {
            hslaColours: [
                [G, U, U, U, F, G, Z, Z, Z, Z, Z, G],
                [G, U, U, U, F, G, Z, Z, Z, Z, Z, G],
                [G, F, F, F, F, G, Z, Z, Z, Z, Z, G],
                [G, P, P, P, P, G, F, F, F, F, F, G],
                [G, G, G, G, G, G, P, P, P, P, P, G],
                [G],
            ],
            zIndices: [
                [0, 9, 5, 5, 3, 0, 8, 8, 8, 8, 8, 0],
                [0, 9, 5, 5, 3, 0, 5, 5, 5, 5, 5, 0],
                [0, 3, 3, 3, 3, 0, 5, 5, 5, 5, 5, 0],
                [0, 2, 2, 2, 2, 0, 3, 3, 3, 3, 3, 0],
                [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0],
                [0],
            ],
        },
    },
}

import { SNOWGLOBES_PAST_KEY } from '../../../../../app/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    SNOW_FLOOR_COLOUR as F,
    SNOWGLOBE_PLATFORM_COLOUR as P,
} from '../../../../../app/constants/scene/cubes/colours'

export default {
    [SNOWGLOBES_PAST_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G, G, G, G, G, F, F, F, F, F, G],
                [G, G, G, G, G, F, F, F, F, F, G],
                [G, G, G, G, G, F, F, F, F, F, G],
                [G, G, G, G, G, P, P, P, P, P, G],
                [G],
            ],
            zIndices: [
                [0],
                [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0],
                [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0],
                [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0],
                [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0],
                [0],
            ],
        },
    },
}

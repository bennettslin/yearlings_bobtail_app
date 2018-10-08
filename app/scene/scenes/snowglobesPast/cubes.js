import { SNOWGLOBES_PAST_KEY } from 'scene/cubesKeys'

import {
    GROUND_HSLA,
    FLOOR_HSLA,
    PLATFORM_HSLA
} from '../../hslaKeys'

const
    G = GROUND_HSLA,
    F = FLOOR_HSLA,
    P = PLATFORM_HSLA,

    SNOWGLOBES_PAST_CUBES = {
        floor: {
            hslaColours: [
                [G],
                [G, G, G, G, G, F, F, F, F, F, G],
                [G, G, G, G, G, F, F, F, F, F, G],
                [G, G, G, G, G, F, F, F, F, F, G],
                [G, G, G, G, G, P, P, P, P, P, G],
                [G]
            ],
            zIndices: [
                [0],
                [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0],
                [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0],
                [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0],
                [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [SNOWGLOBES_PAST_KEY]: SNOWGLOBES_PAST_CUBES
    }

export default CUBES

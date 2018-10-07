import { LOGUE_KEY } from 'scene/cubesKeys'

import {
    STAGE_FLOOR_HSLA,
    STAGE_PLATFORM_HSLA
} from '../../hslaKeys'

const
    G = STAGE_FLOOR_HSLA,
    P = STAGE_PLATFORM_HSLA,

    LOGUE = {
        floor: {
            hslaColours: [
                [G],
                [G, P, P, P, P, P, P, P, P, P, P, G],
                [G, P, P, P, P, P, P, P, P, P, P, G],
                [G, P, P, P, P, P, P, P, P, P, P, G],
                [G]
            ],
            zIndices: [
                [0],
                [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],
                [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [LOGUE_KEY]: LOGUE
    }

export default CUBES

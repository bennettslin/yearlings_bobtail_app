import { LOGUE_KEY } from 'scene/cubesKeys'

import {
    STAGE_FLOOR_HSLA,
    STAGE_PLATFORM_HSLA
} from '../../hslaKeys'

const
    // Floor.
    F = STAGE_FLOOR_HSLA,

    // Platform.
    P = STAGE_PLATFORM_HSLA,

    LOGUE = {
        floor: {
            hslaColours: [
                [F],
                [F, P, P, P, P, P, P, P, P, P, P, F],
                [F, P, P, P, P, P, P, P, P, P, P, F],
                [F, P, P, P, P, P, P, P, P, P, P, F],
                [F]
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

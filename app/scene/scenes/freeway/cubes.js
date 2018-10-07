import { FREEWAY_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA,
    STAGE_PLATFORM_HSLA
} from '../../hslaKeys'

const
    // Default.
    D = DEFAULT_HSLA,

    // Platform.
    P = STAGE_PLATFORM_HSLA,

    FREEWAY_CUBES = {
        floor: {
            hslaColours: [
                [D],
                [D],
                [P],
                [D],
                [P],
                [D]
            ],
            zIndices: [
                [0],
                [0],
                [4],
                [2],
                [4],
                [0]
            ]
        }
    },

    CUBES = {
        [FREEWAY_KEY]: FREEWAY_CUBES
    }

export default CUBES

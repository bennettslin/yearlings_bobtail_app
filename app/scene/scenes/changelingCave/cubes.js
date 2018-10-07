import { CHANGELING_CAVE_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

const
    // Default.
    D = DEFAULT_HSLA,

    CHANGELING_CAVE_CUBES = {
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [1],
                [0]
            ]
        }
    },

    CUBES = {
        [CHANGELING_CAVE_KEY]: CHANGELING_CAVE_CUBES
    }

export default CUBES

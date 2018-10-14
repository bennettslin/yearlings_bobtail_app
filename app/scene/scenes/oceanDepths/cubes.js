import { OCEAN_DEPTHS_KEY } from '../../cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    RIGHT
} from '../../cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    OCEAN_DEPTHS_CUBES = {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [0]
            ]
        }
    },

    CUBES = {
        [OCEAN_DEPTHS_KEY]: OCEAN_DEPTHS_CUBES
    }

export default CUBES

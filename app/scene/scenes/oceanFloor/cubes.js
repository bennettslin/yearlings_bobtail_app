import { OCEAN_FLOOR_KEY } from '../../cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    RIGHT
} from '../../cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    OCEAN_FLOOR_CUBES = {
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
        [OCEAN_FLOOR_KEY]: OCEAN_FLOOR_CUBES
    }

export default CUBES

import { ROYCE_HALL_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

const
    // Default.
    D = DEFAULT_HSLA,

    ROYCE_HALL_CUBES = {
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [0],
                [1]
            ]
        }
    },

    CUBES = {
        [ROYCE_HALL_KEY]: ROYCE_HALL_CUBES
    }

export default CUBES

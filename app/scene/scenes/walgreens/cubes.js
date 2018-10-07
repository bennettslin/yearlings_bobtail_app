import { WALGREENS_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

const
    // Default.
    D = DEFAULT_HSLA,

    WALGREENS_CUBES = {
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
        [WALGREENS_KEY]: WALGREENS_CUBES
    }

export default CUBES

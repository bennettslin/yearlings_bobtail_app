import { WALGREENS_KEY } from 'scene/cubesKeys'

import {
    g
} from 'scene/cubesConstants'

const
    WALGREENS_CUBES = {
        floor: {
            zIndices: [
                [g],
                [5],
                [0]
            ]
        }
    },

    CUBES = {
        [WALGREENS_KEY]: WALGREENS_CUBES
    }

export default CUBES

import { CEMETERY_KEY } from 'scene/cubesKeys'

import {
    LEFT
} from 'scene/cubesConstants'

const
    CEMETERY_CUBES = {
        slantDirection: LEFT,
        floor: {
            zIndices: [
                [0],
                [2]
            ]
        }
    },

    CUBES = {
        [CEMETERY_KEY]: CEMETERY_CUBES
    }

export default CUBES

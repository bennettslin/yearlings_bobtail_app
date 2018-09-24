import {
    RICKSHAW_KEY
} from 'scene/cubesKeys'

import {
    RIGHT
} from 'scene/cubesConstants'

const
    RICKSHAW_CUBES = {
        slantDirection: RIGHT,
        floor: {
            zIndices: [
                [0]
            ]
        }
    },

    CUBES = {
        [RICKSHAW_KEY]: RICKSHAW_CUBES
    }

export default CUBES

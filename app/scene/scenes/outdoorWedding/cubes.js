import { OUTDOOR_WEDDING_KEY } from 'scene/cubesKeys'

import {
    RIGHT
} from 'scene/cubesConstants'

const
    OUTDOOR_WEDDING_CUBES = {
        // TODO: Make more natural.
        // Grass.
        slantDirection: RIGHT,
        floor: {
            zIndices: [
                [4]
            ]
        }
    },

    CUBES = {
        [OUTDOOR_WEDDING_KEY]: OUTDOOR_WEDDING_CUBES
    }

export default CUBES

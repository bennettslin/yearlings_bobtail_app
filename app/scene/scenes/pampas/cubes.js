import { PAMPAS_KEY } from 'scene/cubesKeys'

import {
    RIGHT
} from 'scene/cubesConstants'

const
    PAMPAS_CUBES = {
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
        [PAMPAS_KEY]: PAMPAS_CUBES
    }

export default CUBES

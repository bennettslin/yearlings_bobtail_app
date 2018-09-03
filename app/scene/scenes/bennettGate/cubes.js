import { BENNETT_GATE_KEY } from 'scene/cubesKeys'

import {
    g
} from 'scene/cubesConstants'

const
    BENNETT_GATE_CUBES = {
        floor: {
            zIndices: [
                [g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [1],
                [1],
                [0]
            ]
        }
    },

    CUBES = {
        [BENNETT_GATE_KEY]: BENNETT_GATE_CUBES
    }

export default CUBES

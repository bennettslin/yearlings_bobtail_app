import { BENNETT_BED_KEY } from 'scene/cubesKeys'

import {
    g
} from 'scene/cubesConstants'

const
    BENNETT_BED_CUBES = {
        // Outdoor wall is 8'. Indoor wall is 7.5'. Bed is 7.5 long, 1' tall.
        floor: {
            zIndices: [
                [g],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [g, g, 1, 1, 1, g, 7, 7, 7, 7, g],
                [g, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, g],
                [g, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, g],
                [g, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, g]
            ]
        }
    },

    CUBES = {
        [BENNETT_BED_KEY]: BENNETT_BED_CUBES
    }

export default CUBES

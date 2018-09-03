import { STATION_WAGON_KEY } from 'scene/cubesKeys'

import {
    a
} from 'scene/cubesConstants'

const
    STATION_WAGON_CUBES = {
        floor: {
            zIndices: [
                [0],
                [0, a, a, a, a, a, a, a, a, 6, 6, 0],
                [0, 2, 2, 4, 4, 2, 4, 4, 2, 6, 6, 0],
                [0, 2, 2, 4, 4, 2, 4, 4, 2, 6, 6, 0],
                [0, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [STATION_WAGON_KEY]: STATION_WAGON_CUBES
    }

export default CUBES

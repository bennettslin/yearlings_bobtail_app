import { STATION_WAGON_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

const
    // Default.
    D = DEFAULT_HSLA,

    STATION_WAGON_CUBES = {
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [0],
                [0],
                [0, 2, 2, 4, 4, 2, 4, 4, 2, 2, 2, 0],
                [0, 2, 2, 4, 4, 2, 4, 4, 2, 2, 2, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [STATION_WAGON_KEY]: STATION_WAGON_CUBES
    }

export default CUBES

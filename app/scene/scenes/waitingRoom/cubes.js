import { WAITING_ROOM_KEY } from 'scene/cubesKeys'

import {
    g
} from 'scene/cubesConstants'

const
    WAITING_ROOM_CUBES = {
        floor: {
            zIndices: [
                [0, g, g, g, g, g, g, g, g, g, g, 0],
                [0, 1, 7, 7, 1, 7, 7, 1, 1, 1, g, 0],
                [0, 1, 3, 3, 1, 3, 3, 1, 1, 1, 1, 0],
                [0, 1, 3, 3, 1, 3, 3, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, g, 0]
            ]
        }
    },

    CUBES = {
        [WAITING_ROOM_KEY]: WAITING_ROOM_CUBES
    }

export default CUBES

import { TAIWAN_ROOM_KEY } from 'scene/cubesKeys'

import {
    g
} from 'scene/cubesConstants'

const
    TAIWAN_ROOM_CUBES = {
        // Indoor wall is 7.5'. Floor of 2' to imply second story.
        floor: {
            zIndices: [
                [5],
                [5],
                [5],
                [g, g, g, g, g, g, 5, 5, 5, g],
                [5],
                [5]
            ]
        }
    },

    CUBES = {
        [TAIWAN_ROOM_KEY]: TAIWAN_ROOM_CUBES
    }

export default CUBES

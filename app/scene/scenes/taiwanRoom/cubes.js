import { TAIWAN_ROOM_KEY } from 'scene/cubesKeys'

import {
    c,
    e,
    f,
    g
} from 'scene/cubesConstants'

const
    TAIWAN_ROOM_CUBES = {
        ceiling: {
            zIndices: [
                [g],
                [g],
                [g, g, g, g, g, g, g, g, g, g, g, e],
                [g, g, c, c, g, f, f, g, g, g, g, e],
                [g]
            ]
        },
        floor: {
            zIndices: [
                [g],
                [g, g, g, g, g, 4, 4, 4, 4, 4, 4, g],
                [g, g, g, g, g, 4, 4, 4, 4, 4, 4, 6],
                [g, g, 8, 8, g, 4, 4, g, g, 3, 3, 6],
                [g, 4, 4, 4, 4, 4, 4, 4, g, 2, 2, g],
                [g, 4, 4, 4, 4, 4, 4, 4, g, 1, 1, g]
            ]
        }
    },

    CUBES = {
        [TAIWAN_ROOM_KEY]: TAIWAN_ROOM_CUBES
    }

export default CUBES

import { WAITING_ROOM_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    d,
    g
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    WAITING_ROOM_CUBES = {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [g],
                [g],
                [g],
                [g, g, g, g, g, g, g, g, g, g, g, d],
                [g, g, g, g, g, g, g, g, g, g, g, d],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [1],
                [g, g, g, g, g, g, g, g, g, g, g, g],
                [g, 1, 7, 7, 1, 7, 7, 1, 1, 1, 1, g],
                [g, 1, 3, 3, 1, 3, 3, 1, 1, 1, 1, 1],
                [g, 1, 3, 3, 1, 3, 3, 1, 1, 1, 1, 1],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },

    CUBES = {
        [WAITING_ROOM_KEY]: WAITING_ROOM_CUBES
    }

export default CUBES

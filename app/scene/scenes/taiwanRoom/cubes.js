import { TAIWAN_ROOM_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    e,
    f,
    g
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    TAIWAN_ROOM_CUBES = {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [g],
                [g],
                [g],
                [g, g, g, g, f, f, f, g, g, g, g, e],
                [g, g, g, g, g, g, g, g, g, g, g, e],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [g],
                [g, 5, 5, g, 5, 5, 5, 5, 5, 5, 5, g],
                [g, 5, 5, g, 5, 5, 5, 5, 5, 4, 4, g],
                [g, g, g, g, 5, 5, 5, g, g, 3, 3, 5],
                [g, 8, 8, 8, 5, 5, 5, 5, g, 2, 2, 5],
                [g, 5, 5, 5, 5, 5, 5, 5, g, 1, 1, g]
            ]
        }
    },

    CUBES = {
        [TAIWAN_ROOM_KEY]: TAIWAN_ROOM_CUBES
    }

export default CUBES

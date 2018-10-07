import { VAN_NUYS_HALLWAY_KEY } from 'scene/cubesKeys'

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

    VAN_NUYS_HALLWAY_CUBES = {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [g],
                [g],
                [g],
                [g, g, d, d, d, g],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [g, g, 1, 1, 1, g, g, g, g, g, g, g],
                [g, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },

    CUBES = {
        [VAN_NUYS_HALLWAY_KEY]: VAN_NUYS_HALLWAY_CUBES
    }

export default CUBES

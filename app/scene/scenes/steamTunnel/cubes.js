import { STEAM_TUNNEL_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

import {
    b,
    d
} from 'scene/cubesConstants'

const
    // Default.
    D = DEFAULT_HSLA,

    STEAM_TUNNEL_CUBES = {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [d],
                [d],
                [d],
                [b, d, d, d, d, d, d, d, d, d, d, b],
                [b, d, d, d, d, d, d, d, d, d, d, b],
                [d]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [d],
                [d, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, d],
                [d, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, d],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [d, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, d],
            ]
        }
    },

    CUBES = {
        [STEAM_TUNNEL_KEY]: STEAM_TUNNEL_CUBES
    }

export default CUBES

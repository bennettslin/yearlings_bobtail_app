import { STEAM_TUNNEL_KEY } from 'scene/cubesKeys'

import {
    b,
    d
} from 'scene/cubesConstants'

const
    STEAM_TUNNEL_CUBES = {
        ceiling: {
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

import { STEAM_TUNNEL_KEY } from 'scene/cubesKeys'

import {
    g
} from 'scene/cubesConstants'

const
    STEAM_TUNNEL_CUBES = {
        floor: {
            zIndices: [
                [g],
                [5],
                [0]
            ]
        }
    },

    CUBES = {
        [STEAM_TUNNEL_KEY]: STEAM_TUNNEL_CUBES
    }

export default CUBES

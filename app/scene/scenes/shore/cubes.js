import { SHORE_KEY } from '../../cubesKeys'

import {
    SAND_HSLA,
    OCEAN_HSLA
} from '../../hslaKeys'

import {
    RIGHT
} from '../../cubesConstants'

const
    N = SAND_HSLA,
    O = OCEAN_HSLA,

    SHORE_CUBES = {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [N, N, N, N, N, O],
                [N, N, N, N, N, N, O],
                [N, N, N, N, N, N, N, N, O],
                [N, N, N, N, N, N, N, N, N, N, O],
                [N, N, N, N, N, N, N, N, N, N, N, O],
                [N]
            ],
            zIndices: [
                [0]
            ]
        }
    },

    CUBES = {
        [SHORE_KEY]: SHORE_CUBES
    }

export default CUBES

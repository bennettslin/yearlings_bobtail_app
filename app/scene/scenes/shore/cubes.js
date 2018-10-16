import { SHORE_KEY } from '../../cubesKeys'

import {
    SAND_HSLA
} from '../../hslaKeys'

import {
    LEFT
} from '../../cubesConstants'

const
    N = SAND_HSLA,

    SHORE_CUBES = {
        slantDirection: LEFT,
        floor: {
            hslaColours: [
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

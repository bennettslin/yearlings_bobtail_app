import { SHORE_KEY } from 'constants/scene/scenes'

import {
    SAND_HSLA,
    OCEAN_HSLA
} from '../../cubes/keys/hsla'

import {
    RIGHT
} from '../../cubes/keys/zIndex'

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

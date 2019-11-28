import { SHORE_KEY } from '../../../constants/scene/scenes'

import {
    SAND_COLOUR,
    OCEAN_COLOUR
} from '../../cubes/colours'

import {
    RIGHT
} from '../../cubes/zIndices'

const
    N = SAND_COLOUR,
    O = OCEAN_COLOUR,

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

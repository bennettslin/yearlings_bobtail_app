import { OCEAN_FLOOR_KEY } from '../../../constants/scene/scenes'

import {
    SAND_COLOUR
} from '../../cubes/colours'

import {
    RIGHT
} from '../../cubes/zIndices'

const
    S = SAND_COLOUR,

    OCEAN_FLOOR_CUBES = {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [S]
            ],
            zIndices: [
                [0]
            ]
        }
    },

    CUBES = {
        [OCEAN_FLOOR_KEY]: OCEAN_FLOOR_CUBES
    }

export default CUBES

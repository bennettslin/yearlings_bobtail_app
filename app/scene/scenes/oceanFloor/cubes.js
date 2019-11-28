import { OCEAN_FLOOR_KEY } from '../../../constants/scene/scenes'

import {
    SAND_COLOUR
} from '../../cubes/keys/hsla'

import {
    RIGHT
} from '../../cubes/keys/zIndex'

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

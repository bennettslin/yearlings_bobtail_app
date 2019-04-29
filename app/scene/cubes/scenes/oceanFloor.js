import { OCEAN_FLOOR_KEY } from '../../scenes/keys'

import {
    SAND_HSLA
} from '../keys/hsla'

import {
    RIGHT
} from '../keys/zIndex'

const
    S = SAND_HSLA,

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

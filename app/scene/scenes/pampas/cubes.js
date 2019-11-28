import { PAMPAS_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR,
    HILL_COLOUR,
    HILL_DARKER_COLOUR
} from '../../cubes/keys/hsla'

import {
    RIGHT
} from '../../cubes/keys/zIndex'

const
    G = GROUND_COLOUR,
    H = HILL_COLOUR,
    I = HILL_DARKER_COLOUR,

    PAMPAS_CUBES = {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [H, I, I, H, H, I, I, H, H, I, I, H],
                [I, H, H, I, I, H, H, I, I, H, H, I],
                [H, I, I, H, H, I, I, H, H, I, I, H],
                [H, H, I, I, H, H, I, I, H, H, I],
                [I, I, H, H, I, I, H, H, I, I, H]
            ],
            zIndices: [
                [0],
                [3]
            ]
        }
    },

    CUBES = {
        [PAMPAS_KEY]: PAMPAS_CUBES
    }

export default CUBES

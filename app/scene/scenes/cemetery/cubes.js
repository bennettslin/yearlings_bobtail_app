import { CEMETERY_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR,
    HILL_COLOUR,
    HILL_DARKER_COLOUR
} from '../../cubes/keys/hsla'

import {
    LEFT
} from '../../cubes/keys/zIndex'

const
    G = GROUND_COLOUR,
    H = HILL_COLOUR,
    I = HILL_DARKER_COLOUR,

    CEMETERY_CUBES = {
        slantDirection: LEFT,
        floor: {
            hslaColours: [
                [G],
                [H, H, I, I, H, H, I, I, H, H, I, I],
                [H, I, I, H, H, I, I, H, H, I, I, H],
                [I, H, H, I, I, H, H, I, I, H, H, I],
                [H, I, I, H, H, I, I, H, H, I, I, H],
                [I, I, H, H, I, I, H, H, I, I, H]
            ],
            zIndices: [
                [0],
                [3]
            ]
        }
    },

    CUBES = {
        [CEMETERY_KEY]: CEMETERY_CUBES
    }

export default CUBES

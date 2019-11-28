import {
    CLIFF_KEY
} from '../../../constants/scene/scenes'

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

    CLIFF_CUBES = {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [H, I, I, H, H, I, I, G],
                [I, H, H, I, I, H, H, I, G],
                [H, I, I, H, H, I, I, H, G],
                [H, H, I, I, H, H, I, G],
                [I, I, H, H, I, I, G]
            ],
            zIndices: [
                [0],
                [3, 3, 3, 3, 3, 3, 3, 0],
                [3, 3, 3, 3, 3, 3, 3, 3, 0],
                [3, 3, 3, 3, 3, 3, 3, 3, 0],
                [3, 3, 3, 3, 3, 3, 3, 0],
                [3, 3, 3, 3, 3, 3, 0]
            ]
        }
    },

    CUBES = {
        [CLIFF_KEY]: CLIFF_CUBES
    }

export default CUBES

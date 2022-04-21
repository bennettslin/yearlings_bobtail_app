import { RIGHT } from '../../../../../src/constants/scene/cubes'
import { CLIFF_KEY } from '../../../../../src/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    GRASS_WINTER_EVENING_COLOUR as H,
} from '../../../../../src/constants/scene/cubes/colours'

export default {
    [CLIFF_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [H, H, H, H, H, H, H, G],
                [H, H, H, H, H, H, H, H, G],
                [H, H, H, H, H, H, H, H, G],
                [H, H, H, H, H, H, H, G],
                [H, H, H, H, H, H, G],
            ],
            zIndices: [
                [0],
                [3, 3, 3, 3, 3, 3, 3, 0],
                [3, 3, 3, 3, 3, 3, 3, 3, 0],
                [3, 3, 3, 3, 3, 3, 3, 3, 0],
                [3, 3, 3, 3, 3, 3, 3, 0],
                [3, 3, 3, 3, 3, 3, 0],
            ],
        },
    },
}

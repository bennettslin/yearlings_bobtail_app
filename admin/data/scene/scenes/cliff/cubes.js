import { RIGHT } from '../../../../../app/constants/scene/cubes'
import { CLIFF_KEY } from '../../../../../app/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    GRASS_COLOUR as H,
} from '../../../../../app/constants/scene/cubes/colours'

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

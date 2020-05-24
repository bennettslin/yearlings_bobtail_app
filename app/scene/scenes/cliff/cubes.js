import { RIGHT } from '../../../constants/scene/cubes'
import { CLIFF_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    GRASS_COLOUR as H
} from '../../cubes/colours'

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
                [H, H, H, H, H, H, G]
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
    }
}

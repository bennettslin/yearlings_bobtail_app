import { WALGREENS_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    WOOD_FLOOR_COLOUR as F
} from '../../cubes/colours'

export default {
    [WALGREENS_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G, F, F, F, F, F, F, F, F, F, F, G],
                [G, F, F, F, F, F, F, F, F, F, F, G],
                [G, F, F, F, F, F, F, F, F, F, F, G],
                [G, F, F, F, F, F, F, F, F, F, F, G],
                [G, F, F, F, F, F, F, F, F, F, F, G]
            ],
            zIndices: [
                [0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    }
}

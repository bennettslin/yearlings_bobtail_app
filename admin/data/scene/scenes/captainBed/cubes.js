import { CAPTAIN_BED_KEY } from '../../../../../src/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    BENNETT_CARPET_COLOUR as F,
} from '../../../../../src/constants/scene/cubes/colours'
import { LEFT } from '../../../../../src/constants/transition'

export default {
    [CAPTAIN_BED_KEY]: {
        slantDirection: LEFT,
        floor: {
            hslaColours: [
                [G, G, G, G, G, G, G, F, F, G],
                [G, G, G, G, G, F, F, F, F, G],
                [G, G, G, G, G, G, F, F, F, F, G],
                [G, G, G, G, G, G, F, F, F, F, G],
                [G, G, G, G, G, G, F, F, F, F, G],
                [G, G, G, G, G, G, G, F, F, G],
            ],
            zIndices: [
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
            ],
        },
    },
}

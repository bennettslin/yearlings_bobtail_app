import { RIGHT } from '../../../../../src/constants/scene/cubes'
import { PAMPAS_KEY } from '../../../../../src/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    GRASS_COLOUR as H,
} from '../../../../../src/constants/scene/cubes/colours'

export default {
    [PAMPAS_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [H],
            ],
            zIndices: [
                [0],
                [3],
            ],
        },
    },
}

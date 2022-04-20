import { LEFT } from '../../../../../src/constants/scene/cubes'
import { CEMETERY_KEY } from '../../../../../src/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    GRASS_NIGHT_COLOUR as H,
} from '../../../../../src/constants/scene/cubes/colours'

export default {
    [CEMETERY_KEY]: {
        slantDirection: LEFT,
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

import { LEFT } from '../../../../../app/constants/scene/cubes'
import { CEMETERY_KEY } from '../../../../../app/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    GRASS_COLOUR as H,
} from '../../../../../app/constants/scene/cubes/colours'

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

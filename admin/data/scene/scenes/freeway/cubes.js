import { FREEWAY_KEY } from '../../../../../app/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    PAVEMENT_COLOUR as V,
    CONCRETE_PLATFORM_COLOUR as P,
} from '../../../../../app/constants/scene/cubes/colours'

export default {
    [FREEWAY_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G],
                [G],
                [P],
                [V],
            ],
            zIndices: [
                [0],
                [0],
                [0],
                [4],
                [2],
            ],
        },
    },
}

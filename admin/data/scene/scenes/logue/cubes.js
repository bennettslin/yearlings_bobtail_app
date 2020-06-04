import { LOGUE_KEY } from '../../../../../app/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    PLATFORM_COLOUR as P
} from '../../../../../app/constants/scene/cubes/colours'

export default {
    [LOGUE_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G],
                [P],
                [P],
                [P],
                [G]
            ],
            zIndices: [
                [0],
                [0],
                [3],
                [2],
                [1],
                [0]
            ]
        }
    }
}

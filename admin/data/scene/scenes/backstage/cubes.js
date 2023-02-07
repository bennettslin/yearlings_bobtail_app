import { BACKSTAGE_KEY } from '../../../../../src/constants/scene/scenes'
import {
    GROUND_CLEAR_COLOUR as G,
    PLATFORM_COLOUR as P,
} from '../../../../../src/constants/scene/cubes/colours'

export default {
    [BACKSTAGE_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [P],
            ],
            zIndices: [
                [0],
                [1],
            ],
        },
    },
}

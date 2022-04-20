import { LEFT } from '../../../../../src/constants/scene/cubes'
import { RICKSHAW_KEY } from '../../../../../src/constants/scene/scenes'

import {
    SAND_NIGHT_COLOUR as K,
    STREET_NIGHT_COLOUR as T,
} from '../../../../../src/constants/scene/cubes/colours'

export default {
    [RICKSHAW_KEY]: {
        slantDirection: LEFT,
        floor: {
            hslaColours: [
                [K, K, K, K, K, K, K, K, K, T],
                [K, K, K, K, K, K, K, T],
                [K, K, K, K, K, K, T],
                [K, K, K, K, T],
                [K, K, T],
                [K, T],
            ],
            zIndices: [
                [0],
            ],
        },
    },
}

import { LEFT } from '../../../../../app/constants/scene/cubes'
import { RICKSHAW_KEY } from '../../../../../app/constants/scene/scenes'

import {
    SAND_COLOUR as K,
    STREET_COLOUR as T
} from '../../../../../app/constants/scene/cubes/colours'

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
                [K, T]
            ],
            zIndices: [
                [0]
            ]
        }
    }
}

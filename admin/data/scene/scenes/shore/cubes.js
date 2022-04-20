import { RIGHT } from '../../../../../src/constants/scene/cubes'
import { SHORE_KEY } from '../../../../../src/constants/scene/scenes'

import {
    SAND_NIGHT_COLOUR as K,
    OCEAN_NIGHT_COLOUR as V,
} from '../../../../../src/constants/scene/cubes/colours'

export default {
    [SHORE_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [K, K, K, K, K, V],
                [K, K, K, K, K, K, V],
                [K, K, K, K, K, K, K, K, V],
                [K, K, K, K, K, K, K, K, K, K, V],
                [K, K, K, K, K, K, K, K, K, K, K, V],
                [K],
            ],
            zIndices: [
                [0],
            ],
        },
    },
}

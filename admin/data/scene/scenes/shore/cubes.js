import { RIGHT } from '../../../../../app/constants/scene/cubes'
import { SHORE_KEY } from '../../../../../app/constants/scene/scenes'

import {
    SAND_COLOUR as K,
    OCEAN_COLOUR as V,
} from '../../../../../app/constants/scene/cubes/colours'

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

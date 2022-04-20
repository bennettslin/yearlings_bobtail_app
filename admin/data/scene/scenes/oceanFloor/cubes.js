import { RIGHT } from '../../../../../src/constants/scene/cubes'
import { OCEAN_FLOOR_KEY } from '../../../../../src/constants/scene/scenes'

import { SAND_NIGHT_COLOUR as K } from '../../../../../src/constants/scene/cubes/colours'

export default {
    [OCEAN_FLOOR_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [K],
            ],
            zIndices: [
                [0],
            ],
        },
    },
}

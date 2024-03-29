import { LEFT } from '../../../../../src/constants/scene/cubes'
import { OCEAN_DEPTHS_KEY } from '../../../../../src/constants/scene/scenes'

import { SAND_NIGHT_COLOUR as K } from '../../../../../src/constants/scene/cubes/colours'

export default {
    [OCEAN_DEPTHS_KEY]: {
        slantDirection: LEFT,
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

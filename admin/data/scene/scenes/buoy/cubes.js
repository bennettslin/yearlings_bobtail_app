import { RIGHT } from '../../../../../src/constants/scene/cubes'
import { BUOY_KEY } from '../../../../../src/constants/scene/scenes'

import { OCEAN_NIGHT_COLOUR as V } from '../../../../../src/constants/scene/cubes/colours'

export default {
    [BUOY_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [V],
            ],
            zIndices: [
                [0],
            ],
        },
    },
}

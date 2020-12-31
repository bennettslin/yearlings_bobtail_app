import { RIGHT } from '../../../../../app/constants/scene/cubes'
import { OCEAN_FLOOR_KEY } from '../../../../../app/constants/scene/scenes'

import { SAND_COLOUR as K } from '../../../../../app/constants/scene/cubes/colours'

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

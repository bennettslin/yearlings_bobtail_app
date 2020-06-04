import { RIGHT } from '../../../constants/scene/cubes'
import { BUOY_KEY } from '../../../constants/scene/scenes'

import { OCEAN_COLOUR as V } from '../../../constants/scene/cubes/colours'

export default {
    [BUOY_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [V]
            ],
            zIndices: [
                [0]
            ]
        }
    }
}

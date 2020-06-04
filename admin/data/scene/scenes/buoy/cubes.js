import { RIGHT } from '../../../../../app/constants/scene/cubes'
import { BUOY_KEY } from '../../../../../app/constants/scene/scenes'

import { OCEAN_COLOUR as V } from '../../../../../app/constants/scene/cubes/colours'

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

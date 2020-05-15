import { RIGHT } from '../../../constants/scene/cubes'
import { OCEAN_FLOOR_KEY } from '../../../constants/scene/scenes'

import { SAND_COLOUR as K } from '../../cubes/colours'

const CUBES = {
    [OCEAN_FLOOR_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [K]
            ],
            zIndices: [
                [0]
            ]
        }
    }
}

export default CUBES

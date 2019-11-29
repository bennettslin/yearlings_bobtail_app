import { FREEWAY_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR as G,
    PAVEMENT_COLOUR as V,
    CONCRETE_PLATFORM_COLOUR as P
} from '../../cubes/colours'

const CUBES = {
    [FREEWAY_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G],
                [G],
                [P],
                [V]
            ],
            zIndices: [
                [0],
                [0],
                [0],
                [4],
                [2]
            ]
        }
    }
}

export default CUBES

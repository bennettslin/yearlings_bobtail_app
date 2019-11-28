import { FREEWAY_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR,
    PAVEMENT_COLOUR,
    PLATFORM_COLOUR
} from '../../cubes/colours'

const
    G = GROUND_COLOUR,
    V = PAVEMENT_COLOUR,
    P = PLATFORM_COLOUR,

    FREEWAY_CUBES = {
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
    },

    CUBES = {
        [FREEWAY_KEY]: FREEWAY_CUBES
    }

export default CUBES

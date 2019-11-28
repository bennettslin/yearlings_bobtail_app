import { CHANGELING_CAVE_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR,
    PAVEMENT_COLOUR
} from '../../cubes/colours'

const
    G = GROUND_COLOUR,
    V = PAVEMENT_COLOUR,

    CHANGELING_CAVE_CUBES = {
        floor: {
            hslaColours: [
                [V],
                [G]
            ],
            zIndices: [
                [1],
                [0]
            ]
        }
    },

    CUBES = {
        [CHANGELING_CAVE_KEY]: CHANGELING_CAVE_CUBES
    }

export default CUBES

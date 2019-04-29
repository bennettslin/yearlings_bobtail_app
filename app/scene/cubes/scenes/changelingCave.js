import { CHANGELING_CAVE_KEY } from '../../cubesKeys'

import {
    GROUND_HSLA,
    PAVEMENT_HSLA
} from '../../hslaKeys'

const
    G = GROUND_HSLA,
    V = PAVEMENT_HSLA,

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

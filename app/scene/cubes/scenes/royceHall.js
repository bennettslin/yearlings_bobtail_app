import { ROYCE_HALL_KEY } from '../../keys/cubes'

import {
    PAVEMENT_HSLA
} from '../../keys/hsla'

const
    V = PAVEMENT_HSLA,

    ROYCE_HALL_CUBES = {
        floor: {
            hslaColours: [
                [V]
            ],
            zIndices: [
                [0],
                [1]
            ]
        }
    },

    CUBES = {
        [ROYCE_HALL_KEY]: ROYCE_HALL_CUBES
    }

export default CUBES

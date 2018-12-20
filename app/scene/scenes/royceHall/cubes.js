import { ROYCE_HALL_KEY } from '../../cubesKeys'

import {
    PAVEMENT_HSLA
} from '../../hsla/keys'

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

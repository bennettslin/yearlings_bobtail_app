import { NOHO_HOUSES_KEY } from '../../keys/cubes'

import {
    LAWN_HSLA,
    PAVEMENT_HSLA
} from '../../keys/hsla'

const
    V = PAVEMENT_HSLA,
    L = LAWN_HSLA,

    NOHO_HOUSES = {
        floor: {
            hslaColours: [
                [L],
                [L],
                [L],
                [L],
                [V]
            ],
            zIndices: [
                [0],
                [1]
            ]
        }
    },

    CUBES = {
        [NOHO_HOUSES_KEY]: NOHO_HOUSES
    }

export default CUBES

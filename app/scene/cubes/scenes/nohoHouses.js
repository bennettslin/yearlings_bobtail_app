import { NOHO_HOUSES_KEY } from '../../cubesKeys'

import {
    LAWN_HSLA,
    PAVEMENT_HSLA
} from '../../hslaKeys'

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

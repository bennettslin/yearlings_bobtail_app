import { OAKLAND_HOUSES_KEY } from '../../cubesKeys'

import {
    GROUND_HSLA,
    PAVEMENT_HSLA,
    STREET_HSLA
} from '../../hslaKeys'

const
    G = GROUND_HSLA,
    T = STREET_HSLA,
    V = PAVEMENT_HSLA,

    OAKLAND_HOUSES_CUBES = {
        floor: {
            hslaColours: [
                [G],
                [V],
                [T]
            ],
            zIndices: [
                [0],
                [1],
                [0]
            ]
        }
    },

    CUBES = {
        [OAKLAND_HOUSES_KEY]: OAKLAND_HOUSES_CUBES
    }

export default CUBES

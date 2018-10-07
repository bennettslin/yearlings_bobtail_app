import { OAKLAND_HOUSES_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA,
    SIDEWALK_HSLA,
    STREET_HSLA
} from '../../hslaKeys'

const
    // Default.
    D = DEFAULT_HSLA,

    // Street.
    T = STREET_HSLA,

    // Sidewalk.
    K = SIDEWALK_HSLA,

    OAKLAND_HOUSES_CUBES = {
        floor: {
            hslaColours: [
                [D],
                [K],
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

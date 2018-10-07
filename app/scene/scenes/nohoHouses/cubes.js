import { NOHO_HOUSES_KEY } from 'scene/cubesKeys'

import {
    LAWN_HSLA,
    SIDEWALK_HSLA
} from '../../hslaKeys'

const
    // Sidewalk.
    K = SIDEWALK_HSLA,

    // Lawn.
    L = LAWN_HSLA,

    NOHO_HOUSES = {
        floor: {
            hslaColours: [
                [L],
                [L],
                [L],
                [L],
                [K],
                [K]
            ],
            zIndices: [
                [0],
                [1],
                [1],
                [1],
                [1],
                [1]
            ]
        }
    },

    CUBES = {
        [NOHO_HOUSES_KEY]: NOHO_HOUSES
    }

export default CUBES

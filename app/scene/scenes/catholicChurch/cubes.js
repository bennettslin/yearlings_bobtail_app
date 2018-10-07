import { CATHOLIC_CHURCH_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

const
    // Default.
    D = DEFAULT_HSLA,

    CATHOLIC_CHURCH_CUBES = {
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [0],
                [1],
                [0],
                [0],
                [1],
                [1]
            ]
        }
    },

    CUBES = {
        [CATHOLIC_CHURCH_KEY]: CATHOLIC_CHURCH_CUBES
    }

export default CUBES

import { PUPPET_SHOW_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

const
    // Default.
    D = DEFAULT_HSLA,

    PUPPET_SHOW_CUBES = {
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [0],
                [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
                [0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0],
                [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
                [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [PUPPET_SHOW_KEY]: PUPPET_SHOW_CUBES
    }

export default CUBES

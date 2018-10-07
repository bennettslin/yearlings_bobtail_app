import { TETHERBALL_COURT_KEY } from 'scene/cubesKeys'

import {
    DEFAULT_HSLA
} from '../../hslaKeys'

const
    // Default.
    D = DEFAULT_HSLA,

    TETHERBALL_COURT_CUBES = {
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [0],
                [1]
            ]
        }
    },

    CUBES = {
        [TETHERBALL_COURT_KEY]: TETHERBALL_COURT_CUBES
    }

export default CUBES

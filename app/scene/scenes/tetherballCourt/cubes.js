import { TETHERBALL_COURT_KEY } from '../../cubesKeys'

import {
    GROUND_HSLA,
    PAVEMENT_HSLA
} from '../../hslaKeys'

const
    G = GROUND_HSLA,
    V = PAVEMENT_HSLA,

    TETHERBALL_COURT_CUBES = {
        floor: {
            hslaColours: [
                [G],
                [G, V, V, V, V, V, V, V, V, V, V, G],
                [G, V, V, V, V, V, V, V, V, V, V, G],
                [G, V, V, V, V, V, V, V, V, V, V, G],
                [G, V, V, V, V, V, V, V, V, V, V, G],
                [G]
            ],
            zIndices: [
                [0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [TETHERBALL_COURT_KEY]: TETHERBALL_COURT_CUBES
    }

export default CUBES

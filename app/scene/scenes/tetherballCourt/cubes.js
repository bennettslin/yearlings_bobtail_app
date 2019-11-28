import { TETHERBALL_COURT_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR,
    PAVEMENT_COLOUR
} from '../../cubes/colours'

const
    G = GROUND_COLOUR,
    V = PAVEMENT_COLOUR,

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

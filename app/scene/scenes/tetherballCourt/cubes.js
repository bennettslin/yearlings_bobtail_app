import { TETHERBALL_COURT_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    PAVEMENT_COLOUR as V
} from '../../cubes/colours'

const CUBES = {
    [TETHERBALL_COURT_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G, V, V, V, V, V, V, V, V, V, V, G]
            ],
            zIndices: [
                [0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    }
}

export default CUBES

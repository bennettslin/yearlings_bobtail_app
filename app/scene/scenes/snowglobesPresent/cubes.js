import { SNOWGLOBES_PRESENT_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    PLATFORM_COLOUR as P,
    LIZ_COUCH_COLOUR as U,
    MIRIAM_COUCH_COLOUR as Z
} from '../../cubes/colours'

const CUBES = {
    [SNOWGLOBES_PRESENT_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G, P, P, P, P, G],
                [G, U, U, U, P, G, Z, Z, Z, Z, Z, G],
                [G, U, U, U, P, G, Z, Z, Z, Z, Z, G],
                [G, P, P, P, P, G, Z, Z, Z, Z, Z, G],
                [G, G, G, G, G, G, P, P, P, P, P, G]
            ],
            zIndices: [
                [0],
                [0],
                [0, 7, 3, 3, 1, 0, 7, 7, 7, 7, 7, 0],
                [0, 7, 3, 3, 1, 0, 4, 4, 4, 4, 4, 0],
                [0, 1, 1, 1, 1, 0, 4, 4, 4, 4, 4, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0]
            ]
        }
    }
}

export default CUBES

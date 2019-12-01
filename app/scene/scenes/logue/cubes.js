import { LOGUE_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    PLATFORM_COLOUR as P
} from '../../cubes/colours'

const CUBES = {
    [LOGUE_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G],
                [G, P, P, P, P, P, P, P, P, P, P, G],
                [G, P, P, P, P, P, P, P, P, P, P, G],
                [G]
            ],
            zIndices: [
                [0],
                [0],
                [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    }
}

export default CUBES

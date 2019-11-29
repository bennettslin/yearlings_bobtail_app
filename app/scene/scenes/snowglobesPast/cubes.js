import { SNOWGLOBES_PAST_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR as G,
    PAVEMENT_COLOUR as V,
    PLATFORM_COLOUR as P
} from '../../cubes/colours'

const CUBES = {
    [SNOWGLOBES_PAST_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [G, G, G, G, G, V, V, V, V, V, G],
                [G, G, G, G, G, V, V, V, V, V, G],
                [G, G, G, G, G, V, V, V, V, V, G],
                [G, G, G, G, G, P, P, P, P, P, G],
                [G]
            ],
            zIndices: [
                [0],
                [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0],
                [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0],
                [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0],
                [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0],
                [0]
            ]
        }
    }
}

export default CUBES

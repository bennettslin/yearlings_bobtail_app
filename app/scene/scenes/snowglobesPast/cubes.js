import { SNOWGLOBES_PAST_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR,
    FLOOR_COLOUR,
    PLATFORM_COLOUR
} from '../../cubes/keys/hsla'

const
    G = GROUND_COLOUR,
    F = FLOOR_COLOUR,
    P = PLATFORM_COLOUR,

    SNOWGLOBES_PAST_CUBES = {
        floor: {
            hslaColours: [
                [G],
                [G, G, G, G, G, F, F, F, F, F, G],
                [G, G, G, G, G, F, F, F, F, F, G],
                [G, G, G, G, G, F, F, F, F, F, G],
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
    },

    CUBES = {
        [SNOWGLOBES_PAST_KEY]: SNOWGLOBES_PAST_CUBES
    }

export default CUBES

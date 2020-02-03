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
                [P],
                [P],
                [P],
                [G]
            ],
            zIndices: [
                [0],
                [0],
                [3],
                [2],
                [1],
                [0]
            ]
        }
    }
}

export default CUBES

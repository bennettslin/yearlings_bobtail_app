import { LOGUE_KEY } from '../../../constants/scene/scenes'

import {
    STAGE_FLOOR_COLOUR as F,
    STAGE_PLATFORM_COLOUR as P
} from '../../cubes/colours'

const CUBES = {
    [LOGUE_KEY]: {
        floor: {
            hslaColours: [
                [F],
                [F],
                [F, P, P, P, P, P, P, P, P, P, P, F],
                [F, P, P, P, P, P, P, P, P, P, P, F],
                [F]
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

import { GO_KARTS_KEY } from '../../../constants/scene/scenes'

import {
    STREET_COLOUR as T,
    CROSSWALK_COLOUR as X,
    GRASS_COLOUR as H,
    PLATFORM_COLOUR as P
} from '../../cubes/colours'

const CUBES = {
    [GO_KARTS_KEY]: {
        floor: {
            hslaColours: [
                [T],
                [T],
                [T, P, P, P, P, T, T, P, P, P, P, T],
                [T],
                [X],
                [H]
            ],
            zIndices: [
                [0],
                [0],
                [0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    }
}

export default CUBES

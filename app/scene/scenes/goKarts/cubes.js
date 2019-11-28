import { GO_KARTS_KEY } from '../../../constants/scene/scenes'

import {
    STREET_COLOUR as T,
    CROSSWALK_COLOUR as X,
    LAWN_COLOUR as L,
    SEAT_COLOUR as S
} from '../../cubes/colours'

const CUBES = {
    [GO_KARTS_KEY]: {
        floor: {
            hslaColours: [
                [T],
                [T],
                [T, S, S, S, S, T, T, S, S, S, S, T],
                [T],
                [X],
                [L]
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

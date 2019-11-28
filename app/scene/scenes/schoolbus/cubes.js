import { SCHOOLBUS_KEY } from '../../../constants/scene/scenes'

import {
    STREET_COLOUR as T,
    CROSSWALK_COLOUR as X,
    PLATFORM_COLOUR as P,
    SEAT_COLOUR as S
} from '../../cubes/colours'

const CUBES = {
    [SCHOOLBUS_KEY]: {
        floor: {
            hslaColours: [
                [T],
                [T],
                [T, P, S, P, P, S, P, P, P, P, P, T],
                [T, P, S, P, P, S, P, P, P, P, P, T],
                [T],
                [X]
            ],
            zIndices: [
                [0],
                [0],
                [0, 4, 6, 4, 4, 6, 4, 4, 4, 4, 4, 0],
                [0, 4, 6, 4, 4, 6, 4, 4, 4, 4, 4, 0],
                [0]
            ]
        }
    }
}

export default CUBES

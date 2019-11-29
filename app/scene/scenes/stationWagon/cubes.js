import { STATION_WAGON_KEY } from '../../../constants/scene/scenes'

import {
    STREET_COLOUR as T,
    CROSSWALK_COLOUR as K,
    PLATFORM_COLOUR as P
} from '../../cubes/colours'

const CUBES = {
    [STATION_WAGON_KEY]: {
        floor: {
            hslaColours: [
                [T],
                [T],
                [T, P, P, P, P, P, P, P, P, P, P, T],
                [T, P, P, P, P, P, P, P, P, P, P, T],
                [T],
                [K]
            ],
            zIndices: [
                [0],
                [0],
                [0, 4, 4, 3, 1, 1, 3, 1, 1, 1, 1, 0],
                [0, 4, 4, 3, 1, 1, 3, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    }
}

export default CUBES

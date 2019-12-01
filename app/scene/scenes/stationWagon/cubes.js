import { STATION_WAGON_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    STREET_COLOUR as T,
    CROSSWALK_COLOUR as K
} from '../../cubes/colours'

const CUBES = {
    [STATION_WAGON_KEY]: {
        floor: {
            hslaColours: [
                [T],
                [T],
                [T, D, D, D, D, D, D, D, D, D, D, T],
                [T, D, D, D, D, D, D, D, D, D, D, T],
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

import { STATION_WAGON_KEY } from '../../../../../src/constants/scene/scenes'

import {
    DARK_ROOM_CLEAR_COLOUR as D,
    STREET_NIGHT_COLOUR as T,
    CROSSWALK_NIGHT_COLOUR as K,
} from '../../../../../src/constants/scene/cubes/colours'

export default {
    [STATION_WAGON_KEY]: {
        floor: {
            hslaColours: [
                [T],
                [T],
                [T, D, D, D, D, D, D, D, D, D, D, T],
                [T, D, D, D, D, D, D, D, D, D, D, T],
                [T],
                [K],
            ],
            zIndices: [
                [0],
                [0],
                [0, 4, 4, 3, 1, 1, 3, 1, 1, 1, 1, 0],
                [0, 4, 4, 3, 1, 1, 3, 1, 1, 1, 1, 0],
                [0],
            ],
        },
    },
}

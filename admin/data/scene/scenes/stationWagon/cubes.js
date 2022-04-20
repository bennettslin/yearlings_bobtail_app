import { STATION_WAGON_KEY } from '../../../../../src/constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    STREET_NIGHT_COLOUR as T,
    CROSSWALK_NIGHT_COLOUR as K,
} from '../../../../../src/constants/scene/cubes/colours'

export default {
    [STATION_WAGON_KEY]: {
        floor: {
            hslaColours: [
                [T],
                [T],
                [T, G, G, G, G, G, G, G, G, G, G, T],
                [T, G, G, G, G, G, G, G, G, G, G, T],
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

import { STATION_WAGON_KEY } from '../../../constants/scene/scenes'

import {
    STREET_COLOUR,
    CROSSWALK_COLOUR,
    PLATFORM_COLOUR,
    SEAT_COLOUR
} from '../../cubes/keys/hsla'

const
    T = STREET_COLOUR,
    X = CROSSWALK_COLOUR,
    P = PLATFORM_COLOUR,
    S = SEAT_COLOUR,

    STATION_WAGON_CUBES = {
        floor: {
            hslaColours: [
                [T],
                [T],
                [T, P, P, S, P, P, S, P, P, P, P, T],
                [T, P, P, S, P, P, S, P, P, P, P, T],
                [T],
                [X]
            ],
            zIndices: [
                [0],
                [0],
                [0, 4, 4, 3, 1, 1, 3, 1, 1, 1, 1, 0],
                [0, 4, 4, 3, 1, 1, 3, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [STATION_WAGON_KEY]: STATION_WAGON_CUBES
    }

export default CUBES

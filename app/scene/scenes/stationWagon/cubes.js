import { STATION_WAGON_KEY } from 'scene/cubesKeys'

import {
    STREET_HSLA,
    CROSSWALK_HSLA,
    PLATFORM_HSLA,
    SEAT_HSLA
} from '../../hslaKeys'

const
    T = STREET_HSLA,
    X = CROSSWALK_HSLA,
    P = PLATFORM_HSLA,
    S = SEAT_HSLA,

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
                [0, 3, 3, 2, 1, 1, 2, 1, 1, 1, 1, 0],
                [0, 3, 3, 2, 1, 1, 2, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [STATION_WAGON_KEY]: STATION_WAGON_CUBES
    }

export default CUBES

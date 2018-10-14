import { GO_KARTS_KEY } from '../../cubesKeys'

import {
    STREET_HSLA,
    CROSSWALK_HSLA,
    LAWN_HSLA,
    SEAT_HSLA
} from '../../hslaKeys'

const
    T = STREET_HSLA,
    X = CROSSWALK_HSLA,
    L = LAWN_HSLA,
    S = SEAT_HSLA,

    GO_KARTS_CUBES = {
        floor: {
            hslaColours: [
                [T],
                [T, T, S, S, S, T, T, S, S, S, T],
                [T, T, S, S, S, T, T, S, S, S, T],
                [T],
                [X],
                [L]
            ],
            zIndices: [
                [0],
                [0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [GO_KARTS_KEY]: GO_KARTS_CUBES
    }

export default CUBES

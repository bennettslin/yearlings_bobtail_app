import { NOHO_SCHOOL_KEY } from '../../cubesKeys'

import {
    PAVEMENT_HSLA,
    FLOOR_HSLA,
    SEAT_HSLA
} from '../../hslaKeys'

const
    V = PAVEMENT_HSLA,
    F = FLOOR_HSLA,
    S = SEAT_HSLA,

    NOHO_SCHOOL = {
        floor: {
            hslaColours: [
                [V],
                [V],
                [V, V, V, V, V, V, V, F, F, F, V],
                [V, V, V, V, V, V, V, F, F, S, V],
                [V, V, V, V, V, V, V, F, F, S, V],
                [V, V, V, V, V, V, V, F, F, F, V]
            ],
            zIndices: [
                [0],
                [1],
                [1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [NOHO_SCHOOL_KEY]: NOHO_SCHOOL
    }

export default CUBES

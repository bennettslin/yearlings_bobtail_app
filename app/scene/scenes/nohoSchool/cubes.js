import { NOHO_SCHOOL_KEY } from '../../../constants/scene/scenes'

import {
    PAVEMENT_COLOUR,
    FLOOR_COLOUR,
    SEAT_COLOUR
} from '../../cubes/colours'

const
    V = PAVEMENT_COLOUR,
    F = FLOOR_COLOUR,
    S = SEAT_COLOUR,

    NOHO_SCHOOL = {
        floor: {
            hslaColours: [
                [V],
                [V],
                [V, V, V, V, V, V, V, V, F, F, F, V],
                [V, V, V, V, V, V, V, V, F, F, S, V],
                [V, V, V, V, V, V, V, V, F, F, S, V],
                [V, V, V, V, V, V, V, V, F, F, F, V]
            ],
            zIndices: [
                [0],
                [1],
                [1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [NOHO_SCHOOL_KEY]: NOHO_SCHOOL
    }

export default CUBES

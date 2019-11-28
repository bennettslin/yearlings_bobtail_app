import { NOHO_SCHOOL_KEY } from '../../../constants/scene/scenes'

import {
    PAVEMENT_COLOUR as V,
    FLOOR_COLOUR as F,
    SEAT_COLOUR as S
} from '../../cubes/colours'

const CUBES = {
    [NOHO_SCHOOL_KEY]: {
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
    }
}

export default CUBES

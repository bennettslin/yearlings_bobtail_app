import { BASEMENT_COUCH_KEY } from '../../../constants/scene/scenes'

import {
    PAVEMENT_COLOUR as V,
    DIRT_FLOOR_COLOUR as F,
    UNDERGROUND_WALL_COLOUR as W,
    FURNITURE_COLOUR as R,
    BENNETT_COUCH_COLOUR as U
} from '../../cubes/colours'

import { a, e } from '../../cubes/zIndices'

const CUBES = {
    [BASEMENT_COUCH_KEY]: {
        ceiling: {
            hslaColours: [
                [W]
            ],
            zIndices: [
                [2],
                [2, e, e, e, e, e, e, e, e, e, e, 2],
                [2, e, e, e, e, e, e, e, e, e, e, a],
                [2, e, e, e, e, e, e, e, e, e, e, a],
                [2, e, e, e, e, e, e, e, e, e, e, 2]
            ]
        },
        floor: {
            hslaColours: [
                [V],
                [V, R, U, U, U, U, U, U, R, R, F, V],
                [V, R, U, U, U, U, U, U, F, V, V, V],
                [V, F, U, U, U, U, U, U, F, V, V, V],
                [V, F, F, F, F, F, F, F, F, F, F, V]
            ],
            zIndices: [
                [2],
                [2, 4, 6, 6, 6, 6, 6, 6, 3, 3, 0, 2],
                [2, 4, 3, 3, 3, 3, 3, 3, 0, 1, 2, 2],
                [2, 0, 3, 3, 3, 3, 3, 3, 0, 1, 2, 2],
                [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
            ]
        }
    }
}

export default CUBES

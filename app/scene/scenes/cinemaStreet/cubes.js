import { CINEMA_STREET_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    STREET_COLOUR as T,
    PAVEMENT_COLOUR as V,
    ROOF_COLOUR as C,
    CINEMA_EXTERIOR_COLOUR as W
} from '../../cubes/colours'

import { f, k } from '../../cubes/zIndices'

const CUBES = {
    [CINEMA_STREET_KEY]: {
        ceiling: {
            hslaColours: [
                [D],
                [C, C, C, C, C, D]
            ],
            zIndices: [
                [k],
                [f, f, f, f, f, k]
            ]
        },
        floor: {
            hslaColours: [
                [T],
                [W, W, W, V],
                [W, W, W, V, T, T, T, T, V],
                [W, W, W, V, T, T, T, T, T, V],
                [V, V, V, V, T, T, T, T, T, T, V],
                [V, V, V, V, T]
            ],
            zIndices: [
                [0],
                [f, f, f, 1],
                [f, f, f, 1, 0, 0, 0, 0, 1],
                [f, f, f, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 0]
            ]
        }
    }
}

export default CUBES

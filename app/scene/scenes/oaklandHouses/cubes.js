import {
    OAKLAND_HOUSES_KEY,
    OAKLAND_VOLKSWAGEN_KEY
} from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR as G,
    PAVEMENT_COLOUR as V,
    STREET_COLOUR as T
} from '../../cubes/colours'

const CUBES = {
    [OAKLAND_HOUSES_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [V],
                [T]
            ],
            zIndices: [
                [0],
                [1],
                [0]
            ]
        }
    },
    [OAKLAND_VOLKSWAGEN_KEY]: {
        floor: {
            hslaColours: [
                [G],
                [V],
                [T],
                [T],
                [V]
            ],
            zIndices: [
                [0],
                [1],
                [0],
                [0],
                [1]
            ]
        }
    }
}

export default CUBES

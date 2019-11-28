import {
    OAKLAND_HOUSES_KEY,
    OAKLAND_VOLKSWAGEN_KEY
} from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR,
    PAVEMENT_COLOUR,
    STREET_COLOUR
} from '../../cubes/keys/hsla'

const
    G = GROUND_COLOUR,
    T = STREET_COLOUR,
    V = PAVEMENT_COLOUR,

    OAKLAND_HOUSES_CUBES = {
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

    OAKLAND_VOLKSWAGEN_CUBES = {
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
    },

    CUBES = {
        [OAKLAND_HOUSES_KEY]: OAKLAND_HOUSES_CUBES,
        [OAKLAND_VOLKSWAGEN_KEY]: OAKLAND_VOLKSWAGEN_CUBES
    }

export default CUBES

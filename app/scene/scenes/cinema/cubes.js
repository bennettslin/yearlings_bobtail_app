import {
    CINEMA_KEY,
    CINEMA_STREET_KEY
} from 'scene/cubesKeys'

import {
    g
} from 'scene/cubesConstants'

const
    CINEMA_CUBES = {
        // Outdoor wall is 8'.
        floor: {
            zIndices: [
                [g],
                [g, g, g, 1, 1, 1, 1, 1, 1, g],
                [g, g, g, 1, 1, 1, 1, 1, 1, g],
                [1],
                [1],
                [0]
            ]
        }
    },
    CINEMA_STREET_CUBES = {
        floor: {
            zIndices: [
                [g, g, g, 1, 1, 0],
                [g, g, g, 1, 1, 0],
                [g, g, g, 1, 1, 0],
                [1],
                [1],
                [0]
            ]
        }
    },

    CUBES = {
        [CINEMA_KEY]: CINEMA_CUBES,
        [CINEMA_STREET_KEY]: CINEMA_STREET_CUBES
    }

export default CUBES

import {
    NORTH_HOLLYWOOD_HOUSES_KEY
} from '../cubesKeys'

import {
    _LW,
    _PV
} from '../hslaKeys'

const

    CHILDHOOD_NEIGHBOURHOOD_CUBES = {
        floor: {
            zIndices: [
                [1],
                [1],
                [1],
                [1],
                [1],
                [1]
            ],
            hslaColours: [
                [_LW],
                [_LW],
                [_LW],
                [_LW],
                [_PV],
                [_PV]
            ]
        }
    },

    CUBES_NORTH_HOLLYWOOD = {
        [NORTH_HOLLYWOOD_HOUSES_KEY]: CHILDHOOD_NEIGHBOURHOOD_CUBES
    }

export {
    CUBES_NORTH_HOLLYWOOD
}

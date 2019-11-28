import { ROYCE_HALL_KEY } from '../../../constants/scene/scenes'

import {
    PAVEMENT_COLOUR
} from '../../cubes/colours'

const
    V = PAVEMENT_COLOUR,

    ROYCE_HALL_CUBES = {
        floor: {
            hslaColours: [
                [V]
            ],
            zIndices: [
                [0],
                [1]
            ]
        }
    },

    CUBES = {
        [ROYCE_HALL_KEY]: ROYCE_HALL_CUBES
    }

export default CUBES

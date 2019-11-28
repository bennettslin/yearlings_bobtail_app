import { ROYCE_HALL_KEY } from '../../../constants/scene/scenes'

import { PAVEMENT_COLOUR as V } from '../../cubes/colours'

const CUBES = {
    [ROYCE_HALL_KEY]: {
        floor: {
            hslaColours: [
                [V]
            ],
            zIndices: [
                [0],
                [1]
            ]
        }
    }
}

export default CUBES

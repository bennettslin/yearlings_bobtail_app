import { CHANGELING_CAVE_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR as G,
    PAVEMENT_COLOUR as V
} from '../../cubes/colours'

const CUBES = {
    [CHANGELING_CAVE_KEY]: {
        floor: {
            hslaColours: [
                [V],
                [G]
            ],
            zIndices: [
                [1],
                [0]
            ]
        }
    }
}

export default CUBES

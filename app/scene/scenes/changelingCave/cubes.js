import { CHANGELING_CAVE_KEY } from '../../../constants/scene/scenes'

import {
    NIGHT_MAGIC_COLOUR as Z,
    PAVEMENT_COLOUR as V
} from '../../cubes/colours'

const CUBES = {
    [CHANGELING_CAVE_KEY]: {
        floor: {
            hslaColours: [
                [V],
                [Z]
            ],
            zIndices: [
                [1],
                [0]
            ]
        }
    }
}

export default CUBES

import { CEMETERY_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_CLEAR_COLOUR as G,
    GRASS_COLOUR as H
} from '../../cubes/colours'

import { LEFT } from '../../cubes/zIndices'

const CUBES = {
    [CEMETERY_KEY]: {
        slantDirection: LEFT,
        floor: {
            hslaColours: [
                [G],
                [H]
            ],
            zIndices: [
                [0],
                [3]
            ]
        }
    }
}

export default CUBES

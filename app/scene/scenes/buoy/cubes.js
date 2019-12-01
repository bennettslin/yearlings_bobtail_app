import { BUOY_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_CLEAR_COLOUR as D,
    OCEAN_COLOUR as V
} from '../../cubes/colours'

import { RIGHT } from '../../cubes/zIndices'

const CUBES = {
    [BUOY_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [D],
                [V],
                [V],
                [V],
                [V],
                [D]
            ],
            zIndices: [
                [0]
            ]
        }
    }
}

export default CUBES
